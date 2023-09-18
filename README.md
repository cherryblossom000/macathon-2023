# Course Map Generator

Submission for the [MACathon 2023](https://macathon.framer.website/).

![Screenshot of a website titled ‘Monash Course Plan Generator’. A 4×4 grid of units can be seen, such as ‘MAT1830: Discrete mathematics for computer science’. Most units are grey but some are blue. One unit, ‘FIT1047: Introduction to computer systems, networks and security’ is selected, indicated by a red border, and on the right hand side a yellow box contains a full description fo the unit, as well as a link to the ‘Handbook entry’.](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/580/922/datas/original.png)

---

This is a monorepo. To setup:

- install [pnpm](https://pnpm.io/)
- run `pnpm install`
- run `pnpm run build` to build
- run `pnpm run lint` to lint. Run `pnpm run lint -- --fix` to autofix any errors

You can run `pnpm run build` or `pnpm run lint` in any of the `backend`/`frontend`/`shared` directories as well.

Prettier is set up here. You can get the Prettier VS Code extension or just run `pnpm run lint -- --fix` to fix things. You can also do `pnpm exec prettier -w **/*.{ts,svelte}`.

## `frontend`

follow instructions in `frontend/README.md`

## `backend`

`node .` to start

## `shared`

This is for anything that we might need across both frontend and backend (e.g. types and other utility stuff).

## `scraper`

`node .` to start
