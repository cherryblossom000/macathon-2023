This is a monorepo. To setup:

- install [pnpm](https://pnpm.io/)
- run `pnpm install`
- run `pnpm run build` to build
- run `pnpm run lint` to lint. Run `pnpm run lint -- --fix` to autofix any errors

You can run `pnpm run build` or `pnpm run lint` in any of the `backend`/`frontend`/`shared` directories as well.

`shared` is for anything that we might need across both frontend and backend (e.g. types and other utility stuff).

Prettier is set up here. You can get the Prettier VS Code extension or just run `pnpm run lint -- --fix` to fix things. You can also do `pnpm exec prettier -w **/*.{ts,svelte}`.
