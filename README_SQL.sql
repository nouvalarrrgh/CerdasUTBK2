create table if not exists users (
  id uuid default gen_random_uuid() primary key,
  name text,
  email text unique,
  whatsapp text,
  password_hash text,
  created_at timestamptz default now()
);
