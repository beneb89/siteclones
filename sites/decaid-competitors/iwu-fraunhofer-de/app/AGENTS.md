# AGENTS.md

This is a generated ditto.site clone app for https://www.iwu.fraunhofer.de/. It is a static Next.js App Router project produced from captured DOM, CSS, assets, metadata, and interaction recipes.

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

- / - Forschung für die Zukunft - Fraunhofer IWU
- /en.html - Research for the future - Fraunhofer IWU
- /en/about-Fraunhofer-IWU.html - About Us - Fraunhofer IWU
- /de/datenschutzerklaerung.html - Datenschutzerklärung - Fraunhofer IWU
- /de/forschung.html - Kompetenzen von A bis Z - Fraunhofer IWU
- /de/impressum.html - Impressum - Fraunhofer IWU
- /de/karriere.html - Karriere - Fraunhofer IWU
- /de/kontakt.html - Kontakt - Fraunhofer IWU
- /de/kontaktformular.html - Kontaktformular - Fraunhofer IWU
- /de/presse-und-medien.html - Presse - Fraunhofer IWU
- /de/publikationen.html - Publikationen - Fraunhofer IWU
- /de/referenzprojekte-des-fraunhofer-iwu.html - Referenzprojekte Filter - Fraunhofer IWU
- /de/schnelleinstieg-kunden.html - Zusammenarbeit - Fraunhofer IWU
- /de/schnelleinstieg-studierende.html - Schnelleinstieg Studierende - Fraunhofer IWU
- /de/schnelleinstieg-wissenschaftler.html - Schnelleinstieg Wissenschaftler - Fraunhofer IWU
- /de/sitemap.html - Sitemap - Fraunhofer IWU
- /de/Ueber-uns.html - Über uns - Fraunhofer IWU
- /de/veranstaltungen-und-messen.html - Termine - Fraunhofer IWU
- /de/zukunftsthemen.html - Zukunftsthemen - Fraunhofer IWU
- /de/Ueber-uns/Kuratorium.html - Kuratorium - Fraunhofer IWU
- /en/about-Fraunhofer-IWU/advisory-board.html - Advisory Board - Fraunhofer IWU
- /en/about-Fraunhofer-IWU/finance-and-employees.html - Finance and employees - Fraunhofer IWU
- /en/about-Fraunhofer-IWU/locations.html - Locations - Fraunhofer IWU
- /en/about-Fraunhofer-IWU/management.html - Management - Fraunhofer IWU
- /en/about-Fraunhofer-IWU/participation-in-networks.html - Participation in networks - Fraunhofer IWU
- /en/about-Fraunhofer-IWU/quality-management.html - Quality Management - Fraunhofer IWU
- /en/career/excellent-thesis.html - Excellent Thesis - Fraunhofer IWU
- /en/contact/access-chemnitz.html - Access Chemnitz - Fraunhofer IWU
- /en/contact/access-dresden.html - Access Dresden - Fraunhofer IWU
- /en/contact/access-zittau.html - Access Zittau - Fraunhofer IWU
- /en/press/2024-Custom-Print-Heads-for-3D-Printing-Achieving-Individual-and-Highly-Efficient-Functional-Integration.html - 2024 I Custom Print Heads for 3D Printing - Achieving Individual and Highly Efficient Functional Integration - Fraunhofer IWU
- /en/press/2024-Energy-Management-in-Trains-a-Closer-Look-is-Worth-It.html - 2024 I Energy Management in Trains a Closer Look is Worth It - Fraunhofer IWU
- /en/press/2024-Metallic-3D-printing-achieving-high-quality-results-with-customized-scanning-strategies.html - 2024 I Metallic 3D printing achieving high-quality results with customized scanning strategies - Fraunhofer IWU
- /en/press/2024-Three-high-performance-machines-one-SEAM-team-Granulate-based-3D-printing-revolutionizes-facade-construction.html - 2024 I Three high-performance machines, one SEAM team - Granulate-based 3D printing revolutionizes facade construction - Fraunhofer IWU
- /en/quick-links/companies.html - Companies - Fraunhofer IWU
- /en/quick-links/scientists.html - Scientists - Fraunhofer IWU
- /en/trade-fairs-and-events/first-european-spatial-computing-healthcare-summit.html - First European Spatial Computing Healthcare Summit - Fraunhofer IWU
- /de/Ueber-uns/institutsleitung/MartinDix.html - MartinDix - Fraunhofer IWU
- /en/about-Fraunhofer-IWU/locations/wolfsburg.html - Wolfsburg - Fraunhofer IWU
- /en/about-Fraunhofer-IWU/locations/zittau.html - Access Zittau - Fraunhofer IWU

## Do Not Edit Casually

- `src/app/ditto/` runtime utilities.
- Generated anchor metadata such as `ditto-meta.ts`.
- Validation-only files in working captures, including `_cids.ts` and `_styles.ts` before export stripping.
- Framework shell plumbing unless you are intentionally changing global metadata or page mounting behavior.
