(function(){
  const config=window.SUPABASE_CONFIG;
  const gate=document.querySelector('#authGate'),shell=document.querySelector('.app-shell'),card=document.querySelector('.auth-card'),form=document.querySelector('#authForm'),message=document.querySelector('#authMessage'),signOut=document.querySelector('#signOutButton'),password=document.querySelector('#authPassword'),togglePassword=document.querySelector('#togglePassword'),email=document.querySelector('#authEmail'),forgot=document.querySelector('#forgotPasswordButton'),resetForm=document.querySelector('#resetPasswordForm'),newPassword=document.querySelector('#newPassword'),confirmPassword=document.querySelector('#confirmPassword');
  const setMessage=value=>{if(message)message.textContent=value||''};
  const sidebarWhoami=document.querySelector('#sidebarUserEmail');
  const setWhoami=value=>{if(sidebarWhoami)sidebarWhoami.textContent=value||'—'};
  const showGate=()=>{gate.hidden=false;shell.hidden=true};
  const showShell=()=>{gate.hidden=true;shell.hidden=false};
  if(!config||!window.supabase){
    // The cloud layer is unavailable. Block the workspace instead of silently falling back to
    // device-only storage, which looks identical but never syncs and diverges between devices.
    form?.setAttribute('hidden','');forgot?.setAttribute('hidden','');resetForm?.setAttribute('hidden','');
    const notice=document.createElement('div');
    const text=document.createElement('p');
    text.className='auth-message';
    text.setAttribute('role','alert');
    text.textContent=config
      ?'Cannot reach the shared cloud workspace — the connection library did not load. Check the internet connection, turn off any ad blocker or private DNS for this site, then reload. Nothing you entered has been changed or lost.'
      :'The cloud workspace configuration is missing, so this device cannot sync. Reload the page, and tell Igal if it keeps happening.';
    const retry=document.createElement('button');
    retry.type='button';
    retry.className='btn primary auth-submit';
    retry.textContent='Reload';
    retry.addEventListener('click',()=>window.location.reload());
    notice.append(text,retry);
    card?.append(notice);
    showGate();
    return;
  }
  const client=window.supabase.createClient(config.url,config.publishableKey);
  // Show nothing until we know whose workspace this is. Without this the shell renders local/demo
  // data for a moment on every load, and an edit made in that window would upload a stale blob.
  shell.hidden=true;
  let currentUser=null,workspaceId=null,workspaceWarning='',saveTimer=null,pendingSave=false,lastSyncedAt=null,originalSaveState=window.saveState;
  const LOCAL_BACKUP_KEY='supcruise-pre-sync-backup',REMOTE_BACKUP_KEY='supcruise-replaced-remote-backup';
  // Which workspace does this account belong to? A member of someone else's workspace shares
  // their data; an account with no membership gets one created for it.
  const resolveWorkspace=async()=>{
    // Deterministic ordering matters: an account that belongs to two workspaces must land in the
    // SAME one every time. Picking arbitrarily is how records appear to vanish - they were written
    // to the other workspace. Belonging to more than one is a setup mistake, so say so out loud.
    const {data,error}=await client.from('workspace_members').select('workspace_id,role,created_at')
      .order('created_at',{ascending:true}).order('workspace_id',{ascending:true});
    if(error)throw error;
    if(data&&data.length){
      if(data.length>1){
        workspaceWarning='This login belongs to more than one workspace, so some records may look missing. Tell Igal.';
        console.warn('[SUPCruise] account is in multiple workspaces, using the oldest:',data);
      }
      console.info('[SUPCruise] workspace',data[0].workspace_id,`(${data[0].role})`);
      return data[0].workspace_id;
    }
    const created=await client.rpc('create_my_workspace');
    if(created.error)throw created.error;
    return created.data;
  };
  const cloudRow=async()=>{const {data,error}=await client.from('workspace_state').select('state,updated_at').eq('workspace_id',workspaceId).maybeSingle();if(error)throw error;return data};
  // The whole workspace is one JSON blob, so an unconditional write is last-writer-wins: a device
  // holding a stale copy would silently erase records another device added. Guard the update with
  // the updated_at we last read, so it only touches the row we actually know about. On a mismatch
  // we preserve the copy being replaced and retry once, so the user's own edit still lands - only
  // a second consecutive mismatch falls through to resolveConflict.
  const uploadState=async retrying=>{
    if(!currentUser)return;
    const stamp=new Date().toISOString();
    let query=client.from('workspace_state').update({state,updated_at:stamp}).eq('workspace_id',workspaceId);
    if(lastSyncedAt)query=query.eq('updated_at',lastSyncedAt);
    const {data,error}=await query.select('updated_at');
    if(error)throw error;
    if(data&&data.length){lastSyncedAt=data[0].updated_at;return}
    // The guard matched nothing: another tab or device wrote since we last read. Do NOT discard
    // the edit the user just made - that reads as "it did not save". Preserve the copy we are
    // about to replace, take the current timestamp, and write our version once more.
    if(retrying){await resolveConflict();return}
    const row=await cloudRow();
    if(row?.state)try{localStorage.setItem(REMOTE_BACKUP_KEY,JSON.stringify({savedAt:new Date().toISOString(),data:row.state}))}catch(error){/* quota: the retry still preserves the user's own edit */}
    lastSyncedAt=row?row.updated_at:null;
    await uploadState(true);
  };
  // Another device wrote since we last read. Keep both: stash this device's version where the
  // recovery button can reach it, then adopt the cloud copy so the two stop diverging, and say so
  // out loud. Deliberately does not download a file - see showStashRecovery.
  const resolveConflict=async()=>{
    stashLocal();
    const row=await cloudRow();
    if(row?.state){
      state=row.state;normalizeRestoredState();lastSyncedAt=row.updated_at;
      try{originalSaveState()}catch(error){/* keep going: the cloud copy is the authority */}
      render();
    }
    showToast('This workspace changed on another device. Your recent edits were kept — use "Download unsynced copy" in Reports to save them');
  };
  const hasRecords=value=>!!value&&Object.keys(seed).some(key=>Array.isArray(value[key])&&value[key].length);
  // Key order must NOT count as a difference. `workspace_state.state` is a jsonb column and Postgres
  // stores jsonb keys in its own canonical order, so a blob never round-trips in the order we sent
  // it. Worse, normalizeRestoredState appends any missing field to the end of each record, so the
  // local copy is reordered again on top of that. Plain JSON.stringify therefore reported "this
  // device holds unsynced work" on every single load, when the two copies were in fact identical.
  const canonicalJson=value=>{
    if(Array.isArray(value))return `[${value.map(canonicalJson).join(',')}]`;
    // Drop undefined-valued keys the way JSON.stringify does, so an in-memory field that never
    // survives the trip to Postgres does not read as a difference against the copy that came back.
    if(value&&typeof value==='object')return `{${Object.keys(value).filter(key=>value[key]!==undefined).sort().map(key=>`${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(',')}}`;
    return value===undefined?'null':JSON.stringify(value);
  };
  const sameData=(a,b)=>{try{return canonicalJson(a)===canonicalJson(b)}catch(error){return false}};
  // Sorting keys is not enough on its own. At the end of every load we normalise the cloud copy and
  // write THAT to localStorage, without uploading it - so the local copy legitimately carries default
  // fields (person.dob:'', exhibition.tasks:[], ...) that the cloud row does not, until the next edit
  // pushes them. Comparing raw local against raw cloud would read those defaults as "records the
  // cloud does not have" on every load. Normalise a throwaway clone of the cloud copy first so both
  // sides have been through the same treatment. normalizeRestoredState works on the global `state`,
  // hence the swap; the returned reference is the clone, so restoring `state` in finally is safe.
  const normalizedClone=value=>{
    const previous=state;
    try{state=JSON.parse(JSON.stringify(value));normalizeRestoredState();return state}
    catch(error){return value}
    finally{state=previous}
  };
  // Real work = this device has actually persisted something. saveState writes STORAGE_KEY on every
  // edit, so its absence means nothing was ever entered here and the demo fixture on screen is
  // disposable. This deliberately does NOT look at workspaceMode: typing over the demo without
  // pressing "start empty workspace" leaves the mode at 'demo', and that must never be mistaken for
  // disposable data. Comparing against `seed` does not work either — app start-up normalises `state`,
  // so an untouched demo never deep-equals the fixture.
  const stored=key=>{try{return !!localStorage.getItem(key)}catch(error){return false}};
  const hasRealWork=()=>hasRecords(state)&&(stored(STORAGE_KEY)||stored(LEGACY_KEY));
  // Seed a brand-new account with insert, never upsert: if a row does exist and we simply failed
  // to read it, this conflicts (23505) and the caller re-reads, instead of silently overwriting it.
  const seedCloud=async payload=>{const {error}=await client.from('workspace_state').insert({user_id:currentUser.id,workspace_id:workspaceId,state:payload,updated_at:new Date().toISOString()});return error};
  const stashLocal=()=>{try{localStorage.setItem(LOCAL_BACKUP_KEY,JSON.stringify({savedAt:new Date().toISOString(),data:state}))}catch(error){/* quota or private mode: not worth blocking sign-in */}showStashRecovery()};
  // The stash used to be paired with an automatic backup() download, which meant the browser saved a
  // JSON file without being asked - on every load, because of the sameData bug above. The stash is
  // now the only copy, so it needs a way out: a button that appears in the Reports backup panel only
  // while an unrecovered stash exists. Downloading it produces the same shape restore() reads back.
  const readStash=()=>{try{const parsed=JSON.parse(localStorage.getItem(LOCAL_BACKUP_KEY));return parsed?.data?parsed:null}catch(error){return null}};
  function showStashRecovery(){
    const panel=document.querySelector('.backup-actions');
    if(!panel)return;
    const stash=readStash();
    let button=document.querySelector('#downloadUnsyncedCopy');
    if(!stash){button?.remove();return}
    if(!button){
      button=document.createElement('button');
      button.id='downloadUnsyncedCopy';
      button.type='button';
      button.className='btn secondary';
      button.addEventListener('click',()=>{
        const pending=readStash();
        if(!pending){showStashRecovery();return}
        downloadBlob(new Blob([JSON.stringify({version:5,exportedAt:pending.savedAt,data:pending.data},null,2)],{type:'application/json'}),`supcruise-unsynced-${String(pending.savedAt).slice(0,10)}.json`);
        try{localStorage.removeItem(LOCAL_BACKUP_KEY)}catch(error){/* the file is already downloaded */}
        showStashRecovery();
        showToast('Unsynced copy downloaded. Use "Restore from backup" if you need those records back');
      });
      panel.append(button);
    }
    // The label has to stay a fixed phrase so the HE dictionary can match it; the date goes in the
    // tooltip rather than into the text.
    button.textContent='↓ Download unsynced copy';
    button.title=`Kept on ${String(stash.savedAt).slice(0,10)}`;
    applyLanguage();
  }
  const scheduleUpload=()=>{pendingSave=true;clearTimeout(saveTimer);saveTimer=setTimeout(()=>{uploadState().then(()=>{pendingSave=false}).catch(error=>{pendingSave=true;showToast(`Not saved to the cloud: ${error.message}`)})},500)};
  window.saveState=function(){originalSaveState();scheduleUpload()};
  // Push any debounced edit out now. Mobile browsers freeze backgrounded tabs, so a pending
  // 500ms timer can otherwise never fire and the edit never leaves the device.
  const flush=()=>{if(!pendingSave||!currentUser)return;clearTimeout(saveTimer);pendingSave=false;uploadState().catch(()=>{pendingSave=true})};
  // Pull whatever another device has written since we last looked. openWorkspace only runs at
  // sign-in, so without this the page shows the snapshot it loaded with, forever.
  const refresh=async()=>{
    if(!currentUser||document.hidden)return;
    if(pendingSave){clearTimeout(saveTimer);try{await uploadState();pendingSave=false}catch(error){showToast(`Not saved to the cloud: ${error.message}`)}return}
    if(document.querySelector('.modal-backdrop.open'))return;
    try{
      const row=await cloudRow();
      if(row?.state&&row.updated_at!==lastSyncedAt){state=row.state;normalizeRestoredState();lastSyncedAt=row.updated_at;render()}
    }catch(error){/* transient network problem: keep showing the data already on screen */}
  };
  document.addEventListener('visibilitychange',()=>{document.hidden?flush():refresh()});
  window.addEventListener('focus',()=>refresh());
  window.addEventListener('pagehide',flush);
  // Android Chrome restores backgrounded tabs from the back/forward cache without re-running
  // any of this file, so a restored page needs an explicit re-pull.
  window.addEventListener('pageshow',event=>{if(event.persisted)refresh()});
  togglePassword?.addEventListener('click',()=>{const visible=password.type==='text';password.type=visible?'password':'text';togglePassword.textContent=visible?'Show':'Hide';togglePassword.setAttribute('aria-label',visible?'Show password':'Hide password')});
  [email,password].forEach(input=>input?.addEventListener('pointerdown',()=>input.focus(),{passive:true}));
  forgot?.addEventListener('click',async()=>{const address=email.value.trim();if(!address){setMessage('Enter your email address first.');email.focus();return}setMessage('Sending a password reset email…');const {error}=await client.auth.resetPasswordForEmail(address,{redirectTo:window.location.origin});setMessage(error?error.message:'Check your email for a password reset link.')});
  resetForm?.addEventListener('submit',async event=>{event.preventDefault();if(newPassword.value!==confirmPassword.value){setMessage('The passwords do not match.');return}setMessage('Saving your new password…');const {error}=await client.auth.updateUser({password:newPassword.value});if(error){setMessage(error.message);return}resetForm.hidden=true;form.hidden=false;forgot.hidden=false;setMessage('Password updated. You can continue using the app.')});
  // getSession() and onAuthStateChange BOTH report the same session at start-up: supabase-js v2
  // emits INITIAL_SESSION as soon as the listener subscribes, then SIGNED_IN, then TOKEN_REFRESHED
  // on focus and roughly hourly. Each one used to re-run the whole open sequence - re-reading the
  // row, re-rendering, and (with the sameData bug) downloading another backup file. Open a given
  // user's workspace once, and serialise the calls so a sign-out/sign-in cannot interleave.
  let openedUserId=null,openInFlight=null;
  function openWorkspace(user){
    if(!user)return Promise.resolve();
    openInFlight=(openInFlight||Promise.resolve()).catch(()=>{}).then(()=>openedUserId===user.id?undefined:runOpenWorkspace(user));
    return openInFlight;
  }
  async function runOpenWorkspace(user){
    currentUser=user;
    try{
      workspaceId=await resolveWorkspace();
      let row=await cloudRow();
      if(!row?.state){
        // No cloud workspace for this account yet. Upload real work so it survives; seed an empty
        // workspace only when this device holds nothing but the untouched demo. insert (not upsert)
        // so a row we merely failed to read conflicts instead of being overwritten.
        const error=await seedCloud(hasRealWork()?state:emptyState());
        if(error&&error.code!=='23505')throw error;
        row=await cloudRow();
        if(!row?.state)throw new Error('the cloud workspace could not be created. Reload the page and try again.');
      }
      // The cloud copy wins from here. If this device held work that never reached the cloud, stash
      // it first so the recovery button can hand it back. sameData must be order-insensitive or this
      // fires on every load - see canonicalJson.
      if(hasRealWork()&&!sameData(state,normalizedClone(row.state))){
        stashLocal();
        showToast('This device held records the cloud did not have. They were kept — use "Download unsynced copy" in Reports to save them');
      }
      state=row.state;normalizeRestoredState();lastSyncedAt=row.updated_at;
      workspaceMode='live';localStorage.setItem(WORKSPACE_MODE_KEY,workspaceMode);
      try{originalSaveState()}catch(error){/* keep going: the cloud copy is the authority */}
      setWhoami(user.email);
      render();
      showShell();
      showStashRecovery();
      openedUserId=user.id;
      if(workspaceWarning){showToast(workspaceWarning);workspaceWarning=''}
    }catch(error){openedUserId=null;setMessage(`Cannot open your workspace: ${error.message}`);showGate()}
  }
  form?.addEventListener('submit',async event=>{event.preventDefault();setMessage('Signing in…');const {data,error}=await client.auth.signInWithPassword({email:document.querySelector('#authEmail').value.trim(),password:document.querySelector('#authPassword').value});if(error){setMessage(error.message);return}await openWorkspace(data.user)});
  signOut?.addEventListener('click',()=>client.auth.signOut());
  client.auth.onAuthStateChange((event,session)=>{if(event==='PASSWORD_RECOVERY'){form.hidden=true;forgot.hidden=true;resetForm.hidden=false;setMessage('Choose a new password.');showGate();return}if(session?.user)openWorkspace(session.user);else{currentUser=null;workspaceId=null;lastSyncedAt=null;openedUserId=null;setWhoami('');showGate()}});
  // .catch matters: without it a rejected session lookup (offline, DNS blocked) leaves both the
  // gate and the shell hidden, i.e. a blank page with no way forward.
  // Supabase reports link failures (expired, already used, redirect not allow-listed) in the URL,
  // not through an event. Without this the user just lands on the sign-in form with no explanation.
  const urlParams=()=>{
    const hash=new URLSearchParams(String(window.location.hash||'').replace(/^#/,''));
    const query=new URLSearchParams(window.location.search);
    return key=>hash.get(key)||query.get(key);
  };
  const linkError=urlParams()('error_description')||urlParams()('error');
  const isRecoveryLink=urlParams()('type')==='recovery';
  if(linkError){
    setMessage(decodeURIComponent(String(linkError).replace(/\+/g,' ')));
    showGate();
  }
  // A recovery link signs the user in, so without this getSession() would open the workspace and
  // she would never be asked for a new password.
  if(isRecoveryLink&&form&&resetForm&&forgot){
    form.hidden=true;forgot.hidden=true;resetForm.hidden=false;
    setMessage('Choose a new password.');
    showGate();
  }
  client.auth.getSession().then(({data,error})=>{if(error){setMessage(error.message);showGate()}else if(data.session&&!isRecoveryLink)openWorkspace(data.session.user);else if(!isRecoveryLink&&!linkError)showGate()}).catch(error=>{setMessage(`Cannot reach the cloud workspace: ${error.message}`);showGate()});
})();
