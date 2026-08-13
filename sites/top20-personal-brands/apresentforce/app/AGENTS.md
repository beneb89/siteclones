# AGENTS.md

This is a generated ditto.site clone app for https://apresentforce.com/. It is a static Next.js App Router project produced from captured DOM, CSS, assets, metadata, and interaction recipes.

## Run

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`

## Safe Edit Areas

- `src/app/content.ts` or `src/app/content.tsx`: editable structured content extracted from repeated components and sections when present.
- `src/app/components/`: generated component modules. Edit copy, links, and simple JSX structure with care.
- `src/app/sections/`: generated section modules for single-page section splits when present.
- `src/app/svgs/`: hoisted inline SVG modules. Edit only when intentionally changing artwork.
- `src/app/ditto.css`: fidelity CSS for captured layout, pseudos, keyframes, and interaction states. Small visual tweaks are reasonable; broad rewrites can break clone fidelity.
- Root SEO/docs files such as `AGENTS.md`, `ARCHITECTURE.md`, and `src/app/robots.ts`, `src/app/sitemap.ts`, and `src/app/llms.txt/route.ts`.

## Generated Runtime

`src/app/ditto` contains generated runtime utilities for captured interactions and motion. Current runtime utilities: none emitted for this capture. Do not casually rewrite these files; they are plumbing that maps captured recipes to stable `data-ditto-id` anchors in delivered apps.

## File Meanings

- `src/app/page.tsx` and nested route `page.tsx` files: generated route bodies.
- `src/app/content.ts`: structured data extracted from repeated clone regions.
- `src/app/components/`: reusable JSX components promoted from repeated captured subtrees.
- `src/app/sections/`: page sections split from the captured body.
- `src/app/svgs/`: inline SVGs hoisted out of page/section files.
- `src/app/ditto.css`: generated CSS that preserves source layout and visual details not represented by Tailwind utilities.
- `src/app/ditto-meta.ts`: delivered-app metadata for anchors that still need runtime or stylesheet targeting after validation-only ids are stripped.

## Routes

- / - A Present Force
- /about - A Present Force
- /about-2 - tendencies design
- /about-old - tendencies design
- /backyard-preschool - A Present Force
- /case-study-template - A Present Force
- /daylight - A Present Force
- /home - A Present Force
- /home-2 - meredith hattam's portfolio
- /home-3 - tendencies design
- /home-colour - meredith hattam's portfolio
- /home-colour-3 - meredith hattam's portfolio
- /home-colour-4 - meredith hattam's portfolio
- /home-nav-experiment-01 - meredith hattam's portfolio
- /home-nav-experiment-03 - meredith hattam's portfolio
- /illustration - A Present Force
- /jean-bar - A Present Force
- /loeffler-randall - A Present Force
- /oddkin - A Present Force
- /old-home - meredith hattam's portfolio
- /old-home-2 - meredith hattam's portfolio
- /old-home-3 - tendencies design
- /old-home-4 - meredith hattam's portfolio
- /polyteia - A Present Force
- /rita - A Present Force
- /roguemachine - A Present Force
- /terran-demo - A Present Force
- /tny-cartoons - A Present Force
- /tny-editorial - A Present Force
- /vogueworld - A Present Force

## Do Not Edit Casually

- `src/app/ditto/` runtime utilities.
- Generated anchor metadata such as `ditto-meta.ts`.
- Validation-only files in working captures, including `_cids.ts` and `_styles.ts` before export stripping.
- Framework shell plumbing unless you are intentionally changing global metadata or page mounting behavior.
