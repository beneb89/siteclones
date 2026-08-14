# AGENTS.md

This is a generated ditto.site clone app for https://www.ihk.de/koeln/. It is a static Next.js App Router project produced from captured DOM, CSS, assets, metadata, and interaction recipes.

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

- /koeln - ⁣Startseite - IHK Köln
- /koeln/hauptnavigation/ausbildung - ⁣Ausbildung - IHK Köln
- /koeln/hauptnavigation/beratung-und-services/newsletter-anmeldung - ⁣Newsletter und Veranstaltungseinladungen - IHK Köln
- /koeln/hauptnavigation/ausbildung/finde-deine-ausbildung/last-minute-boerse-rennbahn-2026-7123174 - ⁣Jetzt noch durchstarten! - IHK Köln
- /koeln/hauptnavigation/beratung-und-services/digitale-services/digitale-services-a-bis-z - ⁣Digitale Services von A bis Z - IHK Köln
- /koeln/hauptnavigation/news/video-podcast-stimme-der-wirtschaft/stimme-der-wirtschaft-30-rudolf-scharping-7124020 - ⁣China und die deutsche Wirtschaft - IHK Köln
- /koeln/hauptnavigation/news/video-podcast-stimme-der-wirtschaft/stimme-der-wirtschaft-31-andreas-kunsmann-7136288 - ⁣Warum zementfreies Bauen nachhaltig ist - IHK Köln
- /koeln/hauptnavigation/umwelt-energie-nachhaltigkeit/energie/versorgungssicherheit-in-nrw-6085918 - ⁣Unsichere Stromversorgung – fehlende Strategien zum Ausbau der erneuerbaren Energie - IHK Köln
- /koeln/hauptnavigation/umwelt-energie-nachhaltigkeit/umwelt/ppwr-7128494 - ⁣Verpackungsverordnung PPWR: Was Unternehmen jetzt tun sollten - IHK Köln
- /koeln/system/veranstaltungssuche/suche-mixed/6217126 - ⁣Veranstaltungen und Weiterbildungsangebote - IHK Köln
- /blueprint/servlet/serviceport/layernavigation/v2/4928712 - /blueprint/servlet/serviceport/layernavigation/v2/4928712
- /koeln/system/veranstaltungssuche/vstdetail-tibros/5821864/1007 - /koeln/system/veranstaltungssuche/vstdetail-tibros/5821864/1007

## Do Not Edit Casually

- `src/app/ditto/` runtime utilities.
- Generated anchor metadata such as `ditto-meta.ts`.
- Validation-only files in working captures, including `_cids.ts` and `_styles.ts` before export stripping.
- Framework shell plumbing unless you are intentionally changing global metadata or page mounting behavior.
