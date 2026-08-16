# ARCHITECTURE.md

## Overview

This app is a generated ditto.site clone. The generator captured the source pages, normalized the rendered DOM into an IR, inferred assets/tokens/sections/recipes, and emitted a static Next.js App Router project.

## Structure

- `src/app/layout.tsx`: root App Router layout, language, metadata, viewport, JSON-LD, and shared shell.
- `src/app/page.tsx` and nested route `page.tsx` files: generated route bodies.
- `src/app/globals.css`: reset, font faces, design tokens, and global page base.
- `src/app/ditto.css`: route or page fidelity CSS.
- `src/app/content.ts`: editable data layer when repeated regions were promoted.
- `src/app/components/`, `src/app/sections/`, `src/app/svgs/`: generated JSX modules.
- `src/app/ditto/`: runtime helpers for interaction and motion recipes.
- `public/assets/cloned/`: materialized source assets.

## Styling

The generator uses Tailwind classes for declarations that can be represented as stable utilities. Some styles remain in `ditto.css` because they are route-scoped, pseudo-element based, keyframe based, interaction-state based, or too specific to translate safely without changing the rendered result.

## Anchors

`data-ditto-id` exists in delivered apps where runtime utilities or generated CSS still need a stable DOM anchor. Validation-only capture ids are stripped from production output and should not be reintroduced.

## Recipes And Runtime

Recipes identify higher-level patterns such as repeated cards, logo clouds, navigation, disclosures, accordions, tabs, carousels, and motion. Sections and components provide editable structure, SVG modules preserve source artwork, and `src/app/ditto` applies the small runtime behaviors that were captured safely. Runtime utilities emitted for this clone: DittoWire.

## Clone Metadata

- routes: 40
- extracted components: 67
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

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

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
