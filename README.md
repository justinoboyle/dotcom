<!-- Coding agents: read AGENTS.md. -->

Source for [justinoboyle.com](https://justinoboyle.com).

## Development

    npm install
    npm run dev

`/` redirects in every environment — comment it out in `next.config.ts` to
see the page locally. `npm run lint` runs the oxfmt/oxlint/ESLint gate, also
enforced by a pre-commit hook.

Conventions, configuration, and agent setup: [AGENTS.md](AGENTS.md).
