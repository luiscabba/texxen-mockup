# texxen

Marketing site for texxen. Next.js 15 App Router, React 19, TypeScript strict,
Tailwind CSS v4 (tokens in `@theme` in `app/globals.css`). Deployed on Vercel,
which builds and runs Next natively.

## Local

    npm install
    npm run dev

## Content

All project content lives in `content/projects.ts`. The work index, both filter
axes and every detail page read from it. Never hardcode project data into a page.

Adding a project: append to `projects`. It needs at least three `outcomes`, each
with a stated measurement window, and a `card.height` that differs from its
neighbours so the grid stays uneven. A project whose services include `systems`
or `intel` needs a `systemDiagram`.

## Deploys

Vercel builds on every push to `main`. `next.config.ts` sets only
`trailingSlash: true`, since every internal `Link` is written with one.

`/work/[slug]` keeps `generateStaticParams()` and `export const dynamicParams
= false`. Neither is required by Vercel, but together they prerender both
project pages at build time and 404 anything that is not a real slug.

Always run `npm run build` before committing.

## Routes

| Route | State |
| --- | --- |
| `/` | holding page, real home not yet designed |
| `/work` | settled |
| `/work/[slug]` | settled |

Services, pipeline, studio, journal and contact are not built. Their nav links
go back into `components/SiteHeader.tsx` as each route lands.
