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

Recipes identify higher-level patterns such as repeated cards, logo clouds, navigation, disclosures, accordions, tabs, carousels, and motion. Sections and components provide editable structure, SVG modules preserve source artwork, and `src/app/ditto` applies the small runtime behaviors that were captured safely. Runtime utilities emitted for this clone: none emitted for this capture.

## Clone Metadata

- routes: 57
- extracted components: 338
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - Social Media Experte & Keynote Speaker ➡️ Felix Beilharz (Köln)
- /produkte - Alle Produkte von Felix Beilharz
- /1-wege-um-die-konkurrenz-auszuspionieren-und-von-ihr-zu-lernen - Online Konkurrenz beobachten ☑️ 11 Tools & Tricks für 2023
- /11-facebook-tools - 11 kostenlose Tools für Facebook, die dein Leben einfacher, sicherer und schöner machen
- /12-marketing-strategien - 12 ✔ clevere Marketingstrategien, die man von OnPage.org lernen kann
- /17-fakten-tiktok - Kurz & Knapp: 17 Fakten über TikTok
- /33-tipps-fuer-besseres-facebook-marketing - Facebook Marketing 2023 ☑️ 33 Tipps für Facebook Erfolg
- /37hacks - /37hacks
- /7x7x7 - Beilharz Dies Das - Social Media News
- /8-gruende-warum-fans-follower-und-interaktionsraten-doch-relevant-sind - 8 Gründe, warum Fans, Follower und Interaktionsraten DOCH relevant sind
- /agb - AGB
- /ai-bullshit-bingo - AI Bullshit Bingo
- /aller-anfang - Aller Anfang... so haben die großen Namen der Online-Branche angefangen
- /alles-ist-tot - Alles ist tot!
- /b2b-social-media-seminar - Seite nicht gefunden - FelixBeilharz.de
- /beilharz-dies-das - Beilharz Dies Das - Social Media News
- /bibisprodukt-social-media-kampagne - #bibisprodukt - Was Unternehmen von Donut-Duschschaum über Social Media Marketing lernen können
- /blog - Social Media Blog von Felix Beilharz
- /bundestagswahl-ki - Bundestagswahl 2025: So würde die KI wählen
- /bunte-serps - Emojis für SEO 2025 🐿️ Mach deine Snippets bunt [Liste für SEO]
- /cookie-einstellungen - Cookie Einstellungen
- /csr - CSR
- /das-apostel-modell-fuer-nachhaltiges-social-media-marketing - Das APOSTEL-Modell für nachhaltiges Social Media Marketing
- /datenschutz - Datenschutz
- /der-zweite-facebook-posteingang-und-der-spam-ordner - Der zweite Facebook-Posteingang - und der Spam-Ordner
- /deutsche-marketing-podcasts - Was auf die Ohren - 22 deutsche Marketing-Podcasts
- /die-5-lustigsten-satireseiten-auf-facebook - Die 5 lustigsten Satireseiten auf Facebook
- /digitalbranche-generator - Was ist los in der Digitalbranche? [Generator]
- /digitalisierung-echtzeit - Digitalisierung 2019 in Echtzeit [Infografik]
- /dressgate-die-cleversten-marketingaktionen - #dressgate - Die 10 cleversten Marketingaktionen
- /europawahl-analyse-ki - Europawahl: So würde die KI wählen (Sieger und Verlierer sind eindeutig)
- /experten-tipps-fuer-virales-marketing - Seite nicht gefunden - FelixBeilharz.de
- /facebook-anzeigen-20-prozent-regel-ueberpruefen - Facebook Anzeigen - 20 Prozent-Regel überprüfen
- /facebook-fakes - Nein, ihr könnt keinen Mercedes AMG gewinnen! Und der letzte Kommentar gewinnt auch nichts!
- /facebook-karma - 5 Dinge, die dir dein Facebook-Karma gründlich versauen
- /facebook-werbung-anleitung - Facebook Ads - Die ultimative Schritt-für-Schritt-Anleitung für Facebook Werbung
- /facebook-werbung-transparent - ▷ So transparent ist Facebook-Werbung mittlerweile
- /fake-news-aus-versehen - #Aschenbrödelgate - Wie ich einmal aus Versehen Fake News produziert habe
- /felix-beilharz-quiz - [Quiz] Wie gut kennst du Felix Beilharz?
- /fun-seiten-lernen - Spaß beiseite - Was Unternehmen von Fun-Seiten auf Facebook lernen können
- /generation-z-buch - Manual Generation Z - Das Gen Z Buch von Felix Beilharz
- /generation-z-fakten - Generation Z (2023) ▷ Alle Zahlen, Fakten, Studien, Trends
- /generation-z-quiz - Das Generation Z Quiz
- /girlscanfight - Girls can fight - kostenlose Selbstverteidigungs-Kurse an Kölner Schulen
- /google-ar-tiere-liste - 3D Tiere in Google AR: Liste mit allen 30+ Tieren
- /gratis - Gratis ❤️ Kostenlose Angebote von Felix Beilharz
- /gratis-masterclass-kontosperrung - Gratis Masterclass "Kontosperrung vermeiden, Konto retten"
- /gratis-masterclass-linkedin - Gratis: Masterclass "Dein LinkedIn Booster 2026"
- /hier-koennte-ihre-werbung-stehen-oder-was-man-aus-den-fehlern-von-bmw-lernen-kann - Hier könnte Ihre Werbung stehen - oder: Was man aus den Fehlern von BMW lernen kann
- /immer-schon-so-gemacht - Das ham wir immer schon so gemacht – einer der teuersten Sätze in Unternehmen!
- /impressum - Impressum - Felix Beilharz
- /initiative-q-virales-marketing-in-8-lektionen - Initiative Q - Virales Marketing in 8 Lektionen
- /insider-agenturen - Insider Agenturen
- /insider-pre - Online Marketing Insider Agency
- /instagram-cheat-sheet-2023 - Instagram Cheat Sheet 2023 – Alles auf einen Blick
- /ki-kompetenz-schulung - KI Kompetenz Basis-Schulung nach Art. 4 KI-VO
- /ki-kompetenz-webinar - KI Kompetenz Basis-Schulung nach Art. 4 KI-VO

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
