# AGENTS.md

This is a generated ditto.site clone app for https://ai-first.ai/. It is a static Next.js App Router project produced from captured DOM, CSS, assets, metadata, and interaction recipes.

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

`src/app/ditto` contains generated runtime utilities for captured interactions and motion. Current runtime utilities: DittoWire. Do not casually rewrite these files; they are plumbing that maps captured recipes to stable `data-ditto-id` anchors in delivered apps.

## File Meanings

- `src/app/page.tsx` and nested route `page.tsx` files: generated route bodies.
- `src/app/content.ts`: structured data extracted from repeated clone regions.
- `src/app/components/`: reusable JSX components promoted from repeated captured subtrees.
- `src/app/sections/`: page sections split from the captured body.
- `src/app/svgs/`: inline SVGs hoisted out of page/section files.
- `src/app/ditto.css`: generated CSS that preserves source layout and visual details not represented by Tailwind utilities.
- `src/app/ditto-meta.ts`: delivered-app metadata for anchors that still need runtime or stylesheet targeting after validation-only ids are stripped.

## Routes

- / - AI FIRST — Dein Kompass für die neue Ära | AI FIRST
- /hub - AI FIRST Hub — Skills, Agenten, Wissen & Tools | AI FIRST
- /insights - AI FIRST Insights | AI FIRST
- /podcast - AI FIRST Podcast | AI FIRST
- /anmelden - Anmelden — AI FIRST | AI FIRST
- /collective - AI FIRST Collective | AI FIRST
- /datenschutz - Datenschutz | AI FIRST
- /enablement - AI FIRST Enablement | AI FIRST
- /impressum - Impressum | AI FIRST
- /kontakt - Kontakt | AI FIRST
- /referenzen - AI FIRST Referenzen | AI FIRST
- /school - AI FIRST School | AI FIRST
- /hub/ab-testing-ideen - A/B Testing Ideen — AI FIRST Hub | AI FIRST
- /insights/12-neuerungen-von-openai - 12 OpenAI-Neuerungen: Der Jahresendspurt | AI FIRST
- /podcast/13-jahre-in-der-daten-und-ki-welt-was-funktioniert-wirklich - 13 Jahre in der Daten- und KI-Welt: Was funktioniert wirklich? | AI FIRST

## Do Not Edit Casually

- `src/app/ditto/` runtime utilities.
- Generated anchor metadata such as `ditto-meta.ts`.
- Validation-only files in working captures, including `_cids.ts` and `_styles.ts` before export stripping.
- Framework shell plumbing unless you are intentionally changing global metadata or page mounting behavior.
