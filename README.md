# BookCover Member Demo + Admin

Next.js app: **interactive member experience demo** (from `BookCover_Interactive_Demo_21 - MEMBER.html`) at `/`, plus password-protected admin analytics — aligned with [BookCoverCarrier](https://github.com/brett96/BookCoverCarrier).

## Stack

- **Next.js 16** (App Router)
- **Public demo**: standalone HTML/CSS/JS (iPad shell, 6 flows, 38 screens)
- **Admin**: Tailwind v4 + shadcn-style UI, Recharts
- **Database**: Neon / Vercel Postgres + Drizzle ORM
- **Auth**: Auth.js v5 (credentials, JWT)
- **Analytics**: Custom `events` table + `/api/track`

## Routes

| Path | Description |
|------|-------------|
| `/` | Member Experience Demo (interactive) |
| `/login` | Admin sign-in |
| `/admin` | Analytics overview dashboard |
| `/admin/leads` | Lead management |
| `/admin/traffic` | Traffic & geo |
| `/admin/funnel` | Conversion funnel |
| `/admin/engagement` | Engagement metrics |
| `/admin/settings` | Account settings |

Legacy marketing URLs (`/member-tools`, `/contact`, etc.) redirect to `/`.

## Updating the demo from the mockup

When `BookCover_Interactive_Demo_21 - MEMBER.html` changes at the repo parent folder:

```bash
npm run sync:demo
```

This refreshes `public/demo-shell.html`, `public/demo-runtime.js`, `src/styles/demo.css`, and `public/bookcover-member-demo.html`.

## Dependency security

Do **not** run `npm audit fix --force` on this project.

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

Import the repo with **Root Directory** empty (`.`). On GitHub this app is the repo root; locally it lives in `BCMemberDemo/web/`.

## Project structure

```
src/
├── app/
│   ├── (marketing)/     # Demo home + analytics
│   ├── admin/           # Dashboard (protected)
│   ├── (auth)/          # login, reset-password
│   └── api/
├── components/
│   ├── demo/            # MemberDemo loader
│   └── admin/
├── styles/demo.css      # Demo shell styles
public/
├── demo-shell.html
├── demo-runtime.js
└── bookcover-member-demo.html  # full standalone copy
```
