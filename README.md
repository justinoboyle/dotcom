# dotcom

Personal website of Justin O'Boyle. Live at the Vercel deployment for this
repository.

The site is in a holding pattern: `/` currently redirects to
[GitHub](https://github.com/justinoboyle) until the real page is built here.
The placeholder underneath is ready to be replaced.

## Stack

Next.js 16 (App Router, Turbopack), React 19, TypeScript. Nothing else —
dependencies stay deliberately small until the site needs more.

## Scripts

| Command            | Purpose                                 |
| ------------------ | --------------------------------------- |
| `npm run dev`      | Dev server                              |
| `npm run build`    | Production build                        |
| `npm start`        | Serve the production build              |
| `npm run format`   | Format with oxfmt                       |
| `npm run lint`     | Format check, then oxlint, then ESLint  |
| `npm run lint:fix` | Apply automatic fixes from both linters |

Because `/` redirects in every environment, preview the placeholder page by
temporarily removing the redirect in `next.config.ts` while developing.

A pre-commit hook in `.githooks/` runs `npm run lint` (format check plus both
linters) before every commit; it activates automatically on `npm install`
(via the `prepare` script, no extra dependencies).

## Configuration

- `NEXT_PUBLIC_SITE_URL` — canonical site URL; feeds `metadataBase` for
  metadata and Open Graph tags. Set it in the Vercel project settings once a
  domain is attached. See `.env.example` for local use.
- `next.config.ts` holds the temporary root redirect and an explicit
  `turbopack.root` (a stray parent-directory `package-lock.json` would
  otherwise confuse Turbopack's root detection).

## Agent readiness

The site follows the [AgentReady](https://agentready.org/) standard so AI
agents can find and read it: an open `robots.txt` (one rule for all agents),
a `sitemap.xml`, a `llms.txt`, JSON-LD structured data on the page, and
server-rendered HTML with real status codes. The repository itself carries
agent skills in `.agents/skills/` (Next.js, React, composition, Vercel) and
guidance in `AGENTS.md`.

## Deployment

Pushes deploy automatically on Vercel; `main` is the production branch.

## Repository layout

    src/app/          App Router pages, layout, global styles
    public/           Static assets
    next.config.ts    Redirects and Turbopack options
    .oxlintrc.json    oxlint config (strict)
    .oxfmtrc.json     oxfmt formatter config
    eslint.config.mjs ESLint flat config (Next rules oxlint hasn't ported)
    .githooks/        Git hooks (pre-commit lint gate)
    AGENTS.md         Notes for coding agents working in this repo
