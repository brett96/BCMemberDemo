# BookCover Member Portal Demo + Admin

Next.js app: **interactive member portal demo** (from `BookCover_Interactive_Demo_21 - MEMBER.html`) at `/`, plus password-protected admin analytics.

## Stack

- **Next.js 16** (App Router)
- **Public demo**: Member mobile experience — registration, virtual assistant, plan analysis, feedback, My Plan
- **Admin**: Tailwind v4 + shadcn-style UI, Recharts
- **Database**: Neon / Vercel Postgres + Drizzle ORM
- **Auth**: Auth.js v5 (credentials, JWT) for `/admin`; landing-issued `__bc_demo_jwt` for `/`
- **Analytics**: Custom `events` table + `/api/track`

## Routes

| Path | Description |
|------|-------------|
| `/` | Member Portal Demo (iPad mockup + flow tabs) |
| `/login` | Admin sign-in |
| `/admin` | Analytics overview dashboard |
| `/admin/leads` | Lead management |
| `/admin/traffic` | Traffic & geo |
| `/admin/funnel` | Conversion funnel |
| `/admin/engagement` | Engagement metrics |
| `/admin/settings` | Account settings |

## Updating the demo from the mockup

When `BookCover_Interactive_Demo_21 - MEMBER.html` changes at the repo parent folder:

```bash
npm run sync:demo
```

This refreshes `public/demo-shell.html`, `public/demo-runtime.js`, `src/styles/demo.css`, and `public/bookcover-member-demo.html`.

Standalone copy (open directly in a browser): `/bookcover-member-demo.html`

## Local development

1. Copy `.env.example` to `.env.local` and set `DATABASE_URL`, `AUTH_SECRET`, `AUTH_URL`, `ADMIN_SEED_*`.

2. Push schema and seed admin:

```bash
npm install
npm run db:push
npm run seed:admin
```

3. `npm run dev` → http://localhost:3000 (demo), http://localhost:3000/login (admin).

## Deploy on Vercel

Import the repo with **Root Directory** = `web` (or repo root if configured). Custom domain: `bcmemberdemo.cercalabs.com`.

Set `DEMO_JWT_SECRET` (same as landing), `NEXT_PUBLIC_LANDING_URL`, and `NEXT_PUBLIC_DEMO_URL`.

## Project structure

```
src/
├── app/
│   ├── (marketing)/     # Member demo home + analytics
│   ├── admin/           # Dashboard (protected)
│   ├── (auth)/          # login, reset-password
│   └── api/
├── components/demo/     # MemberDemo loader
├── styles/demo.css
public/
├── demo-shell.html
├── demo-runtime.js
└── bookcover-member-demo.html
```
