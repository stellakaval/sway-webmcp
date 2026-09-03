alter table public.boards add column if not exists state jsonb not null default '{}';
create policy "owners insert boards" on public.boards for insert with check(owner_id=auth.uid());
create policy "owners delete boards" on public.boards for delete using(owner_id=auth.uid());
alter publication supabase_realtime add table public.boards;
