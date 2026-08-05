(function(){
  const config=window.SUPABASE_CONFIG;
  if(!config||!window.supabase){return}
  const client=window.supabase.createClient(config.url,config.publishableKey);
  const gate=document.querySelector('#authGate'),shell=document.querySelector('.app-shell'),form=document.querySelector('#authForm'),message=document.querySelector('#authMessage'),signOut=document.querySelector('#signOutButton'),password=document.querySelector('#authPassword'),togglePassword=document.querySelector('#togglePassword'),email=document.querySelector('#authEmail'),forgot=document.querySelector('#forgotPasswordButton'),resetForm=document.querySelector('#resetPasswordForm'),newPassword=document.querySelector('#newPassword'),confirmPassword=document.querySelector('#confirmPassword');
  let currentUser=null,saveTimer=null,originalSaveState=window.saveState;
  const setMessage=value=>{if(message)message.textContent=value||''};
  const showGate=()=>{gate.hidden=false;shell.hidden=true};
  const showShell=()=>{gate.hidden=true;shell.hidden=false};
  const cloudRow=async user=>{const {data,error}=await client.from('workspace_state').select('state').eq('user_id',user.id).maybeSingle();if(error)throw error;return data};
  const uploadState=async()=>{if(!currentUser)return;const {error}=await client.from('workspace_state').upsert({user_id:currentUser.id,state,updated_at:new Date().toISOString()},{onConflict:'user_id'});if(error)throw error};
  const scheduleUpload=()=>{clearTimeout(saveTimer);saveTimer=setTimeout(()=>uploadState().catch(error=>setMessage(error.message)),500)};
  window.saveState=function(){originalSaveState();scheduleUpload()};
  togglePassword?.addEventListener('click',()=>{const visible=password.type==='text';password.type=visible?'password':'text';togglePassword.textContent=visible?'Show':'Hide';togglePassword.setAttribute('aria-label',visible?'Show password':'Hide password')});
  [email,password].forEach(input=>input?.addEventListener('pointerdown',()=>input.focus(),{passive:true}));
  forgot?.addEventListener('click',async()=>{const address=email.value.trim();if(!address){setMessage('Enter your email address first.');email.focus();return}setMessage('Sending a password reset email…');const {error}=await client.auth.resetPasswordForEmail(address,{redirectTo:window.location.origin});setMessage(error?error.message:'Check your email for a password reset link.')});
  resetForm?.addEventListener('submit',async event=>{event.preventDefault();if(newPassword.value!==confirmPassword.value){setMessage('The passwords do not match.');return}setMessage('Saving your new password…');const {error}=await client.auth.updateUser({password:newPassword.value});if(error){setMessage(error.message);return}resetForm.hidden=true;form.hidden=false;forgot.hidden=false;setMessage('Password updated. You can continue using the app.')});
  async function openWorkspace(user){
    currentUser=user;
    try{
      const row=await cloudRow(user);
      if(row?.state){state=row.state;normalizeRestoredState();workspaceMode='live';localStorage.setItem(WORKSPACE_MODE_KEY,workspaceMode);render()}
      else {await uploadState()}
      showShell();
    }catch(error){setMessage(`Database setup is not complete: ${error.message}`);showGate()}
  }
  form?.addEventListener('submit',async event=>{event.preventDefault();setMessage('Signing in…');const {data,error}=await client.auth.signInWithPassword({email:document.querySelector('#authEmail').value.trim(),password:document.querySelector('#authPassword').value});if(error){setMessage(error.message);return}await openWorkspace(data.user)});
  signOut?.addEventListener('click',()=>client.auth.signOut());
  client.auth.onAuthStateChange((event,session)=>{if(event==='PASSWORD_RECOVERY'){form.hidden=true;forgot.hidden=true;resetForm.hidden=false;setMessage('Choose a new password.');showGate();return}if(session?.user)openWorkspace(session.user);else{currentUser=null;showGate()}});
  client.auth.getSession().then(({data,error})=>{if(error){setMessage(error.message);showGate()}else if(data.session)openWorkspace(data.session.user);else showGate()});
})();
