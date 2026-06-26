-- Run once in Supabase → SQL Editor
create table if not exists public.waitlist_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null unique,
  phone text not null,
  interest text not null check (interest in ('research', 'care', 'both')),
  goals text,
  submitted_at timestamptz not null default now()
);

create index if not exists waitlist_submissions_submitted_at_idx
  on public.waitlist_submissions (submitted_at desc);

create index if not exists waitlist_submissions_interest_idx
  on public.waitlist_submissions (interest);

alter table public.waitlist_submissions enable row level security;

-- No public policies: only the service role (API routes) can read/write.
