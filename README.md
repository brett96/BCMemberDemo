# BookCover Marketing Site + Admin

Production Next.js app: multi-page marketing site (from `mockup.html`), contact lead capture, custom event analytics, and a password-protected admin dashboard — aligned with [BookCoverCarrier](https://github.com/brett96/BookCoverCarrier).

## Stack

- **Next.js 16** (App Router)
- **Marketing**: CSS design tokens (BookCover brand)
- **Admin**: Tailwind v4 + shadcn-style UI, Recharts
- **Database**: Neon / Vercel Postgres + Drizzle ORM
- **Auth**: Auth.js v5 (credentials, JWT)
- **Analytics**: Custom `events` table + `/api/track` (pageviews, scroll depth, CTA, funnel)

## Routes

| Path | Description |
|------|-------------|
| `/` | Business overview |
| `/member-tools` | Member tools |
| `/retention-platform` | Retention platform |
| `/consultant` | Dedicated consultant |
| `/contact` | Lead / demo request form |
| `/login` | Admin sign-in |
| `/admin` | Analytics overview dashboard |
| `/admin/leads` | Lead management |
| `/admin/traffic` | Traffic & geo |
| `/admin/funnel` | Conversion funnel |
| `/admin/engagement` | Engagement metrics |
| `/admin/settings` | Account settings |

## Dependency security

Do **not** run `npm audit fix --force` on this project. It can downgrade `next` to v9 and replace Auth.js v5 with incompatible v4 packages, which breaks the app. The remaining audit items are mostly in `drizzle-kit` dev tooling (esbuild) and are acceptable for local/CI use.

## Local development

### Dev server looks “stuck” after `Ready`?

That is normal. After `✓ Ready in …ms`, the server is waiting for requests. Open **http://localhost:3000** in your browser (do not press Ctrl+C).

If port 3000 is already in use, Next.js picks **3001** — check the `Local:` line in the terminal.

If you see repeated `lockfile missing swc dependencies` warnings, set `NEXT_IGNORE_INCORRECT_LOCKFILE=1` in `.env.local` (included in `.env.example`), then run `npm install` once and restart `npm run dev`.

### Setup

1. Copy `.env.example` to `.env.local` and set:

   - `DATABASE_URL` or `POSTGRES_URL` (Neon connection string)
   - `AUTH_SECRET` (`openssl rand -base64 32`)
   - `AUTH_URL=http://localhost:3000`
   - `ADMIN_SEED_EMAIL` / `ADMIN_SEED_PASSWORD` (first admin user)
   - Optional Gmail vars for contact form email notifications

2. Push schema and seed admin:

```bash
cd web
npm install
npm run db:push
npm run seed:admin
```

3. Start dev server:

```bash
npm run dev
```

Visit http://localhost:3000 for marketing, http://localhost:3000/login for admin.

## Deploy on Vercel

1. Import the repo; set **Root Directory** to `web`.
2. Add the environment variables above for **Production** (and Preview if using a DB).
3. Deploy. `postbuild` runs `drizzle-kit push` and `seed:admin` when a database URL is present.

## Project structure

```
web/src/
├── app/
│   ├── (marketing)/     # Public site + analytics provider
│   ├── admin/           # Dashboard (protected)
│   ├── api/             # track, bookcover-inquiry, auth
│   └── login/
├── components/
│   ├── admin/           # Dashboard UI
│   ├── analytics/       # Client tracking
│   └── pages/           # Marketing page compositions
├── lib/db/              # Drizzle schema & client
└── auth.ts              # Auth.js
```
