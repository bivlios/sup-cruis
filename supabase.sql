-- SUP Cruise workspace schema.
-- Safe to run more than once. Run this BEFORE deploying the matching app version:
-- it is backward compatible, so the currently deployed app keeps working after it.
--
-- Wrapped in a transaction: if any statement fails the whole thing rolls back, so the
-- policies can never be left dropped-but-not-recreated.

begin;

create table if not exists public.workspace_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Shared workspaces: several people, each with their own login, one set of data.
-- ---------------------------------------------------------------------------

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null default 'SUP Cruise',
  created_at timestamptz not null default now()
);

create table if not exists public.workspace_members (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member',
  created_at timestamptz not null default now(),
  primary key (workspace_id, user_id)
);

alter table public.workspace_state add column if not exists workspace_id uuid references public.workspaces(id) on delete cascade;

-- Backfill: every existing row becomes its own workspace, owned by its current user.
do $$
declare
  row_record record;
  new_workspace uuid;
begin
  for row_record in select user_id from public.workspace_state where workspace_id is null loop
    insert into public.workspaces default values returning id into new_workspace;
    insert into public.workspace_members (workspace_id, user_id, role)
      values (new_workspace, row_record.user_id, 'owner')
      on conflict do nothing;
    update public.workspace_state set workspace_id = new_workspace where user_id = row_record.user_id;
  end loop;
end $$;

create unique index if not exists workspace_state_workspace_id_key on public.workspace_state(workspace_id);

-- ---------------------------------------------------------------------------
-- Membership test. SECURITY DEFINER so the policy on workspace_members can call
-- it without recursing through that table's own RLS.
-- ---------------------------------------------------------------------------

create or replace function public.is_workspace_member(target uuid)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.workspace_members
    where workspace_id = target and user_id = (select auth.uid())
  );
$$;

-- Creates a workspace and makes the caller its owner, atomically.
-- SECURITY DEFINER so a client can bootstrap itself without an INSERT policy on
-- workspace_members, which would otherwise let anyone join any workspace.
create or replace function public.create_my_workspace()
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  new_workspace uuid;
begin
  if auth.uid() is null then
    raise exception 'not authenticated';
  end if;
  insert into public.workspaces default values returning id into new_workspace;
  insert into public.workspace_members (workspace_id, user_id, role)
    values (new_workspace, auth.uid(), 'owner');
  return new_workspace;
end $$;

revoke all on function public.create_my_workspace() from public;
grant execute on function public.create_my_workspace() to authenticated;
grant execute on function public.is_workspace_member(uuid) to authenticated;

-- ---------------------------------------------------------------------------
-- Row level security
-- ---------------------------------------------------------------------------

alter table public.workspace_state enable row level security;
alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;

drop policy if exists "Members read their workspace" on public.workspaces;
create policy "Members read their workspace"
  on public.workspaces for select
  to authenticated
  using (public.is_workspace_member(id));

drop policy if exists "Members read the member list" on public.workspace_members;
create policy "Members read the member list"
  on public.workspace_members for select
  to authenticated
  using (public.is_workspace_member(workspace_id));

-- workspace_state: access follows workspace membership. The legacy user_id match
-- is kept so the previously deployed app keeps working during the rollout.
drop policy if exists "Users can read their workspace" on public.workspace_state;
create policy "Users can read their workspace"
  on public.workspace_state for select
  to authenticated
  using (public.is_workspace_member(workspace_id) or (select auth.uid()) = user_id);

drop policy if exists "Users can insert their workspace" on public.workspace_state;
create policy "Users can insert their workspace"
  on public.workspace_state for insert
  to authenticated
  with check (public.is_workspace_member(workspace_id) or (select auth.uid()) = user_id);

drop policy if exists "Users can update their workspace" on public.workspace_state;
create policy "Users can update their workspace"
  on public.workspace_state for update
  to authenticated
  using (public.is_workspace_member(workspace_id) or (select auth.uid()) = user_id)
  with check (public.is_workspace_member(workspace_id) or (select auth.uid()) = user_id);

commit;

-- ---------------------------------------------------------------------------
-- Adding a teammate. There is deliberately no in-app invite flow: run this by
-- hand so joining a workspace always needs database access.
--
--   1. Authentication -> Users -> Add user  (email + password)
--   2. Then, with their id:
--
--        insert into public.workspace_members (workspace_id, user_id, role)
--        select ws.workspace_id, '<NEW-USER-UUID>', 'member'
--        from public.workspace_state ws
--        join auth.users u on u.id = ws.user_id
--        where u.email = '<EXISTING-OWNER-EMAIL>';
--
--   To see who is in which workspace:
--
--        select w.id, u.email, m.role
--        from public.workspace_members m
--        join auth.users u on u.id = m.user_id
--        join public.workspaces w on w.id = m.workspace_id
--        order by w.id;
-- ---------------------------------------------------------------------------
