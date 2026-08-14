# AGENTS.md

This is a generated ditto.site clone app for https://niklasvolland.de/. It is a static Next.js App Router project produced from captured DOM, CSS, assets, metadata, and interaction recipes.

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

- / - Niklas Volland – KI-Transformationsexperte | Keynote Speaker & Berater
- /academy-infopaket.html - Dein Academy-Infopaket – KI•POWERBOOST ACADEMY | Niklas Volland
- /academy.html - Academy – Niklas Volland | KI•POWERBOOST ACADEMY für Tools, Tutorials & Community
- /agb.html - Erfüllungs- und Leistungsrichtlinie – KI•POWERBOOST ACADEMY
- /blog-atlas.html - Das ATLAS-Framework – Niklas Volland | KI-Agenten strukturiert ins Unternehmen integrieren
- /blog-caio.html - Chief AI Officer (CAIO) – Niklas Volland | Warum Unternehmen KI-Führung auf C-Level brauchen
- /blog-ki-keynote-buchen.html - KI-Keynote buchen – Niklas Volland | Die wichtigsten Fragen, die sich Unternehmen vor einer KI-Keynote stellen
- /blog-modell-agnostik.html - KI-Technologie auswählen – Niklas Volland | Warum Modell-Agnostik die wichtigste KI-Strategie wird
- /blog-sobos.html - Das SOBOS-Modell – Niklas Volland | KI-Transformation strukturiert einführen
- /blog.html - Blog – Niklas Volland | KI-Strategie, Frameworks & Einordnungen
- /datenschutz.html - Datenschutzerklärung – Niklas Volland
- /impressum.html - Impressum – Niklas Volland
- /index.html - Niklas Volland – KI-Transformationsexperte | Keynote Speaker & Berater
- /keynote.html - Keynote – Niklas Volland | KI-Keynotes für C-Level & Konferenzen
- /kollaborationen.html - Kollaborationen – Niklas Volland | Ausgewählte Werbepartnerschaften mit AI-Brands
- /kontakt.html - Kontakt – Niklas Volland | Anfrage für Keynote & Academy
- /ueber-niklas.html - Über Niklas – KI-Transformationsexperte, Keynote Speaker & Practitioner
- /workshop.html - Workshop – Niklas Volland | Hands-on KI-Trainings, Strategie-Workshops & AI Updates
- /en/kollaborationen.html - Collaborations - Niklas Volland | Selected Advertising Partnerships with AI Brands

## Do Not Edit Casually

- `src/app/ditto/` runtime utilities.
- Generated anchor metadata such as `ditto-meta.ts`.
- Validation-only files in working captures, including `_cids.ts` and `_styles.ts` before export stripping.
- Framework shell plumbing unless you are intentionally changing global metadata or page mounting behavior.
