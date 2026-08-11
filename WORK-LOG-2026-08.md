# SUP Cruise — cloud sync work, August 2026

Baseline `7dc917a` → `7e592d4`. Everything below is on `main`.

The trigger was a report that Hadar's records were not appearing on her Android.
That specific complaint turned out **not** to be a bug (see "What the original
report actually was"), but finding it surfaced six real defects, all fixed here.

---

## How the app stores data

Worth reading first — most of the bugs below follow from this design.

- The **entire business** is one JSON document: 15 collections (`clients`,
  `cruises`, `payments`, `expenses`, `people`, `guests`, `marketingTasks`,
  `exhibitions`, `partners`, `commissions`, `installments`, `supplierQuotes`,
  `clientQuotes`, `invoices`, `events`).
- It lives in a single `jsonb` column: `workspace_state.state`, one row per
  workspace. There are no per-record tables.
- **Every save rewrites the whole document.** That is why concurrent editing is
  last-writer-wins rather than a merge.
- `render()` is the persistence point — it calls `saveState()`. No form handler
  calls it directly.
- `supabase-sync.js` wraps `saveState`: writes `localStorage` immediately, then
  uploads after a 500 ms debounce.
- **Attachments are NOT in this document.** Receipts and documents live in
  IndexedDB (`supcruise-files`, stores `receipts` and `documents`) — per device,
  never synced, not in the JSON backup.

---

## Fixes

### 1. The page never re-fetched after load — `797603c`
`openWorkspace()` ran only at sign-in and nothing pulled again, so a device
showed the snapshot it loaded with indefinitely. There was no polling and no
realtime subscription.

Now re-pulls on `visibilitychange`, `focus` and `pageshow` (bfcache restore —
the Android case), and flushes pending edits on `pagehide`/hide so a debounced
save survives the browser freezing a backgrounded tab.

Guards: skips while a modal is open, uploads first if a save is pending, and
compares `updated_at` so it only re-renders on genuine remote changes.

### 2. Silent fallback to device-only storage — `797603c`
`if (!config || !window.supabase) return` left the app running on localStorage
with **no sign-in screen and no error** — syncing nothing while looking entirely
normal. Now shows the auth gate with an explanation and a Reload button. The app
shell also stays hidden until the cloud copy has loaded, so no stale data flashes
and no edit can land before it.

### 3. Blind seeding could overwrite good data — `797603c`
A missing cloud row caused an `upsert` of whatever local state existed — on a
fresh device, the **demo fixture** — and `upsert` overwrites a row that was
merely unreadable.

Now uses `insert`, so an existing-but-unread row conflicts (23505) and the code
re-reads instead of clobbering. Seeds an empty workspace, never demo data.

"Real work" is detected by whether the device ever persisted anything
(`STORAGE_KEY`/`LEGACY_KEY`), **not** by `workspaceMode`: typing over the demo
without pressing "start empty workspace" leaves the mode at `demo`, and that must
never be read as disposable. Comparing against `seed` does not work either —
start-up normalises `state`, so an untouched demo never deep-equals the fixture.

### 4. Last-writer-wins between devices — `797603c`
Every write replaced the whole row, so a device holding a stale copy erased
records added elsewhere. Updates are now guarded by the `updated_at` last read.

### 5. A sync conflict discarded the user's newest edit — `7d1458c`
The guard from #4 sent a mismatch straight to `resolveConflict()`, which replaced
local state with the cloud copy — **throwing away the record just entered**. That
reads to the user as "it did not save".

A mismatch now preserves the copy being replaced (`supcruise-replaced-remote-backup`),
refreshes the timestamp and **retries the write once**, so the user's own edit
lands. Only a second consecutive mismatch falls through to `resolveConflict`.

Save failures were also routed to `setMessage()`, which writes into `#authMessage`
— an element **inside the hidden auth gate**, so upload errors were invisible
during use. Those now use `showToast`.

### 6. `saveState()` ran after the whole render chain — `49939b1`
The worst one. `render()` called `saveState()` **last**, after every section
renderer. If any one threw, saveState never ran: nothing written locally, nothing
uploaded — while the sections that had already drawn made it look saved. On the
next reload the record was gone.

`render()` now persists immediately after deriving state, **before drawing**, and
each section runs through `renderStep` so one failure cannot stop the rest. Failed
sections are named in a toast and logged to the console. Applied to both the base
render and the `enhancements.js` override.

Verified by deliberately breaking a renderer: data still saved, other sections
still drew, user was told which section failed.

---

## Features

### Shared workspaces — `00dadb4`, `b012c67`
Data was keyed on `user_id` as the primary key of `workspace_state`, so each
account got an isolated workspace and sharing data meant sharing one password.

Added `workspaces` and `workspace_members`; `workspace_state` is keyed on
`workspace_id`. Each person gets their own login on the same records.

- Membership is checked through `is_workspace_member()`, `SECURITY DEFINER` so
  the policy on `workspace_members` does not recurse through its own RLS.
- Bootstrapping goes through `create_my_workspace()`, also `SECURITY DEFINER` —
  which means there is **no INSERT policy on `workspace_members`**, so no client
  can add itself to someone else's workspace.
- Migration was additive, idempotent and transactional; existing rows were
  backfilled into their own workspace, and the old `user_id` match was kept in
  the policies so the deployed app kept working during rollout.
- **There is deliberately no in-app invite flow.** Adding a member is a SQL
  insert, documented at the bottom of `supabase.sql`.

`b012c67` made `resolveWorkspace()` deterministic — it took the first membership
row with `limit(1)` and no ordering, so an account in two workspaces could land in
a different one per session, recreating the exact "records vanished" symptom.
Now ordered by `created_at, workspace_id`, and belonging to more than one warns
the user and logs to console.

Current workspace: `963bee5a-8759-46fc-9e48-f75b784f25e1`.

### Remove button for cancelled cruises — `df59207`
There was no way to delete a cruise at all; cancelling just swapped the button for
a static label. A cancelled cruise now shows "Remove cruise" on the card and in the
detail modal. Removal is refused while anything still points at it, with a toast
naming what is attached.

Six collections reference a cruise: `clients`, crew (`people.cruiseIds`),
`expenses`, `supplierQuotes`, `clientQuotes`, `invoices`.

### Password-reset diagnostics — `ce055cb`
Supabase reports link failures (expired, already used, redirect URL not
allow-listed) as `error_description` **in the URL**, not through an auth event.
Nothing read it, so a failed reset link dropped the user on the ordinary sign-in
form with no explanation.

The URL hash and query are now checked on load; a link error is shown on the gate.
A recovery link forces the new-password form and suppresses `openWorkspace`, which
would otherwise sign the user straight in (a recovery link creates a real session)
and never ask for a new password.

### Signed-in account + password field — `7e592d4`
The greeting hardcoded `קלימרה, הדר` / `Kalimera, Hadar` regardless of who was
logged in — misleading once there are two logins. Name removed; the signed-in
email is shown beside Sign out.

The show/hide toggle was absolutely positioned **on top of** the password input,
covering its trailing edge and swallowing taps — worse in Hebrew, where typing
starts at that edge. Now sits beside the input in a flex row. Note `.auth-card`
sets `width:100%` on every button inside it, so the toggle needs an explicit
`width:auto` or it takes the whole row.

### Documentation
`DEMO-README.txt` and `הוראות הפעלה להדר.md` were written for a pre-Supabase,
Netlify-hosted, device-local version. Both claimed data never syncs between
devices. Corrected: sign-in requirement, cloud storage, same-email requirement,
WhatsApp in-app-browser warning, Vercel/git publishing.

The Hadar instructions also told her to press **"start empty workspace"** on seeing
sample records — which now wipes the account's workspace and propagates the
deletion. Replaced with an explicit warning.

---

## What the original report actually was

**Not a bug.** Hadar had a second Supabase account. Because `workspace_state` was
keyed on `user_id`, each account had its own isolated row. Her cruise saved
correctly — into *her* workspace. Igal was looking at `igalya4@gmail.com`'s
workspace. Records split across two datasets depending on which login she happened
to be using.

Found by inspecting the rows in Supabase directly, not from the app. The fixes
above are all genuine defects, but none of them was the cause of the complaint.

**Lesson for next time:** check which account is signed in before debugging sync.
The console now logs `[SUPCruise] workspace <id> (<role>)` at every sign-in.

---

## Open items

1. **Attachments do not sync.** Receipts and documents are per-device in
   IndexedDB. A receipt attached on the computer will not appear on the phone,
   while the payment row itself syncs. Needs Supabase Storage — upload the file,
   keep the returned path in `state`. Separate piece of work.
2. **Simultaneous editing is last-writer-wins.** Now that two logins share a
   workspace this is reachable. The loser's version goes to a backup file and to
   `supcruise-replaced-remote-backup`, but there is no merge. Fine if two people
   are not typing at once.
3. **Deploys bottleneck on Galya.** Vercel Hobby blocks deployments whose git
   author is not the account owner, so every fix waits on her. Options: Vercel Pro
   (also resolves the non-commercial-use terms, which a real business app does not
   meet), or move the project to an account that can deploy.
4. **The relational split was considered and deferred.** Measured cost: 291 direct
   `state.<collection>` reads, 50 mutation sites, 3,280 lines across `app.js` and
   `enhancements.js` — roughly 3–5 days plus a week of shaking out bugs, or two
   weeks for true per-record async reads. Only 1 of the 6 bugs above was caused by
   the JSON design. Revisit when two people genuinely edit at once, reports get
   slow, or server-side queries are needed.

---

## Operational notes

**Deploying:** push to `main`, then Galya triggers the build (editing any file on
github.com from her phone works). Bump the cache-buster in `index.html` for any
changed JS/CSS, or clients keep serving the old file. Current versions:
`app.js?v=20260810d`, `enhancements.js?v=20260810c`, `supabase-sync.js?v=7`,
`enhancements.css?v=20260810d`.

**Running locally:** `python3 -m http.server 8765` in the project folder, then
`http://localhost:8765/index.html`. No build step. Note it hits the **real**
database — signing in locally opens the live workspace.

**Supabase:** project `fslgdiuuaekxadzuuzkk`. Keep Site URL and Redirect URLs
pointed at `https://sup-cruise.vercel.app` (plus `http://localhost:8765` for local
work) or password-reset links dead-end.

**Adding a user:** Authentication → Users → Add user, then

```sql
insert into public.workspace_members (workspace_id, user_id, role)
values ('963bee5a-8759-46fc-9e48-f75b784f25e1', '<NEW-USER-UUID>', 'member');
```

There is no dashboard field for setting a password directly; use
`extensions.crypt(...)` against `auth.users`, or send a recovery email once the
URL configuration is correct.

**Backups:** the in-app backup button produces a JSON file the restore button
reads. Take one before any migration or risky change.
