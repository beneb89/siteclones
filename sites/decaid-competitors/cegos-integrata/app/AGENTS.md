# AGENTS.md

This is a generated ditto.site clone app for https://www.cegos-integrata.de/. It is a static Next.js App Router project produced from captured DOM, CSS, assets, metadata, and interaction recipes.

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

- / - Cegos Integrata GmbH – International führender Seminaranbieter
- /berufliche-weiterbildung-und-trends - Berufliche Weiterbildung: Trends & Future Skills
- /blog - Cegos Integrata Blog – Insights zu Weiterbildung, Führung und IT
- /das-unternehmen - Das Unternehmen
- /digitales-lernen - Digitales Lernen - Die Zukunft des Lernens | Integrata Cegos
- /ihre-vorteile - Die Vorteile für Schulungsteilnehmer bei Cegos Integrata
- /job-profile - Job Profile | Job Descriptions | Berufsbilder | Cegos Integrata
- /kundenprojekte - Qualifizierungsprojekte - Cegos Integrata GmbH
- /leistungsangebot-informationstechnologie - IT-Weiterbildung & IT Schulungen für Fachkräfte | Cegos Integrata
- /leistungsangebot-personalorganisation - Personalentwicklung Schulungen für Fachkräfte
- /seminarangebot - Seminarangebot: Schulungen für Ihre berufliche Weiterbildung
- /standorte - Standorte
- /weiterbildung-mit-integrata-cegos - Aktuelles und Neues von Cegos Integrata - Integrata
- /allgemeine-geschaeftsbedingungen - Allgemeine Geschäftsbedingungen der Cegos Integrata GmbH
- /customer-projects - Customer Projects
- /datenschutz - Die Datenschutzbestimmungen der Cegos Integrata GmbH
- /datenschutzbestimmungen-online-meetings - Datenschutzhinweise für Online-Meetings der Cegos Integrata GmbH
- /disclaimer - Disclaimer
- /general-terms-and-conditions - General Terms and Conditions
- /haeufig-gestellte-fragen-faq - Cegos Integrata FAQ | Antworten zu Seminaren
- /hybride-seminare - Hybride Seminare - Let’s do it hybrid
- /impressum - Impressum der Cegos Integrata GmbH
- /informationen-zur-teilnahme-an-online-trainings - Informationen zur Teilnahme an Online-Trainings bei Cegos Integrata
- /integrata-ag-international-fuehrend-im-bereich-training-und-seminare - Cegos Integrata GmbH – International führender Seminaranbieter
- /integrata-best-seminare - Die besten Seminare: Personalentwicklung und Informationstechnologie

## Do Not Edit Casually

- `src/app/ditto/` runtime utilities.
- Generated anchor metadata such as `ditto-meta.ts`.
- Validation-only files in working captures, including `_cids.ts` and `_styles.ts` before export stripping.
- Framework shell plumbing unless you are intentionally changing global metadata or page mounting behavior.
