# BookCover Agent Portal Demo + Admin

Next.js app: **interactive agent portal demo** with **Autorun tour** (from `BookCover_Admin_Demo_v73_3.html`) at `/`, plus password-protected admin analytics.

## Stack

- **Next.js 16** (App Router)
- **Public demo**: Agent portal mockups, grouped workflow tabs, autorun self-guided tour
- **Admin**: Tailwind v4 + shadcn-style UI, Recharts
- **Database**: Neon / Vercel Postgres + Drizzle ORM
- **Auth**: Auth.js v5 (credentials, JWT)
- **Analytics**: Custom `events` table + `/api/track`

## Routes

| Path | Description |
|------|-------------|
| `/` | Agent Portal Demo (manual + Autorun tour) |
| `/login` | Admin sign-in |
| `/admin` | Analytics overview dashboard |
| `/admin/leads` | Lead management |
| `/admin/traffic` | Traffic & geo |
| `/admin/funnel` | Conversion funnel |
| `/admin/engagement` | Engagement metrics |
| `/admin/settings` | Account settings |

## Updating the demo from the mockup

When `BookCover_Admin_Demo_v73_3.html` changes at the repo parent folder:

```bash
npm run sync:demo
```

This refreshes `public/demo-shell.html`, `public/demo-runtime.js`, `src/styles/demo.css`, and `public/bookcover-agent-demo.html`.

Standalone copy (open directly in a browser): `/bookcover-agent-demo.html`

## Local development

1. Copy `.env.example` to `.env.local` and set `DATABASE_URL`, `AUTH_SECRET`, `AUTH_URL`, `ADMIN_SEED_*`.

2. Push schema and seed admin:

```bash
npm install
npm run db:push
npm run seed:admin
```

3. `npm run dev` → http://localhost:3000 (demo), http://localhost:3000/login (admin).

Click **Click to Autorun** (top right) for the self-guided tour.

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
├── components/demo/     # MemberDemo loader
├── styles/demo.css
public/
├── demo-shell.html      # Shell + autorun UI markup
├── demo-runtime.js      # Demo logic + autorun engine
└── bookcover-agent-demo.html
```
