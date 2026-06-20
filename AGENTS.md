# United Federal Services

An intentionally vulnerable Next.js web application built for security education and bug bounty practice. It simulates a federal services portal with deliberately insecure endpoints covering injection, XSS, IDOR, JWT weaknesses, credential exposure, and simulated command injection. **Do not deploy with real data or real users.**

## Tech Stack

- **Language:** TypeScript
- **Framework:** Next.js 14 (App Router)
- **Runtime:** Node.js
- **UI:** React 18

## Setup

```bash
npm install
```

No environment variables are required — the app uses hardcoded insecure credentials by design.

## Build / Run / Test

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

No test suite is present.

## Project Structure

```
app/                   — Next.js App Router pages and API routes
  page.tsx             — Home/landing page
  layout.tsx           — Root layout with global styles
  globals.css          — Global CSS
  login/               — Login page (vulnerable to auth bypass)
  search/              — Search page (reflected XSS)
  comments/            — Comments page (stored XSS, no CSRF)
  profile/             — User profile pages (IDOR vulnerability)
  tools/               — Tool pages
  bounty/              — Bug bounty program info page
  api/                 — API route handlers
    login/             — Auth endpoint (alg:none JWT, plaintext passwords)
    users/             — Full PII + credentials dump endpoint
    secrets/           — Exposed config/secrets endpoint
    ping/              — Simulated command injection endpoint
lib/                   — Shared utilities/helpers
public/                — Static assets
```

## Architecture & Key Files

- All page routes are under `app/` using the Next.js 14 App Router convention.
- API routes live under `app/api/` and are intentionally insecure by design.
- `lib/` contains shared helper functions used across pages and API routes.
- `next.config.js` — Next.js configuration (minimal).

## Conventions & Notes for Agents

- **This repo is intentionally insecure.** Every vulnerability is deliberate. Do NOT "fix" security issues unless explicitly asked — they are the feature.
- Known intentional vulnerabilities: injection-style auth bypass, `alg:none` JWT acceptance, plaintext password storage, reflected XSS in `/search`, stored XSS in `/comments`, IDOR in `/profile/[id]`, full credential/PII exposure at `/api/users` and `/api/secrets`, simulated command injection at `/api/ping`.
- The `/bounty` route and `/.well-known/security.txt` describe the bug bounty program.
- No authentication middleware protects routes — again, intentional.
- TypeScript is present but type coverage may be minimal given the demo nature of the project.
- Contact for bounty reports: deonmenezes04@gmail.com.
