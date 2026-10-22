# AGENTS.md

## Project

Personal website of Justin O'Boyle. Currently minimal: the root path redirects
to GitHub (see `redirects()` in `next.config.ts`) and a placeholder page waits
underneath to become the real site. Keep changes small and idiomatic; this
codebase is a foundation, not a legacy app.

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`)

Note: `/` redirects in every environment. To view the placeholder page
locally, temporarily remove the redirect in `next.config.ts`.

## Reference docs

Version-matched Next.js documentation is bundled locally at
`node_modules/next/dist/docs/` (entry point: `docs/llms.txt`) — it always
matches the installed `next` version, so prefer it over remembered API
details, since much of what applies to older Next.js versions changed in 15
and 16. `next dev` also writes and updates its own managed agent-rules block
in this file; commit it when it appears so the tree stays clean.

## Conventions and constraints

- App Router under `src/app`, TypeScript strict, `next.config.ts` is typed.
- Imports use the `@/*` alias mapped to `./src/*`.
- `turbopack.root` is set explicitly because a stray `package-lock.json`
  above the repo would otherwise confuse Turbopack's root detection. Keep it.
- TypeScript is pinned to 6.0.x: `eslint-config-next` bundles
  typescript-eslint, which does not support TypeScript 7 yet (hard error at
  import). Do not bump to 7 until typescript-eslint raises its `<6.1.0`
  ceiling.
- Metadata lives in `src/app/layout.tsx` with a title template;
  `NEXT_PUBLIC_SITE_URL` (see `.env.example`) drives `metadataBase` in
  production.
