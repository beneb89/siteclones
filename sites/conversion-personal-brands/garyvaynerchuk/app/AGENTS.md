# AGENTS.md

This is a generated ditto.site clone app for https://garyvaynerchuk.com/. It is a static Next.js App Router project produced from captured DOM, CSS, assets, metadata, and interaction recipes.

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

- / - Gary Vaynerchuk | Entrepreneur, Author & Creator
- /1-view-can-change-everything - Why 1 View Can Change Everything - Gary Vaynerchuk
- /10-mental-shifts-for-success-in-business - 10 Mental Shifts for Success in Business - Gary Vaynerchuk
- /10-ways-to-get-more-followers-on-instagram-how-to-guide - 10 Ways To Get More Followers on Instagram: How To Guide
- /10-ways-to-protect-yourself-from-scams - 10 Ways to Protect Yourself from Scams - Gary Vaynerchuk
- /11-new-garyvee-instagram-ar-filters - 11 New GaryVee Instagram AR Filters - Gary Vaynerchuk
- /11-things-young-people-need-to-know - 11 things young people need to know - Gary Vaynerchuk
- /13-thoughts-on-being-an-entrepreneur - 13 Thoughts on being an Entrepreneur - Gary Vaynerchuk
- /14-awesome-vayniacs-who-put-family-first - 14 Awesome Vayniacs Who Put Family First - Gary Vaynerchuk
- /19-people-you-should-be-following-on-twitter-but-arent-pt-1-of-2 - 19 People You Should Be Following On Twitter But Aren’t (Pt. 1 of 2)
- /19-people-you-should-be-following-on-twitter-but-arent-pt-2-of-2 - 19 People You Should Be Following On Twitter But Aren’t (Pt. 2 of 2)
- /2015-has-been-huge-so-far - 2015 Has Been Huge So Far - Gary Vaynerchuk
- /2017-key-small-business-social-media-marketing - 2017 Key to Small Business Social Media Marketing
- /2018-wine-library-super-tasting - Announcing 2018 Annual Wine Library Super Tasting
- /2020-fundraising-strategies-for-nonprofits - 2020 Fundraising Strategies For Nonprofits - Gary Vaynerchuk

## Do Not Edit Casually

- `src/app/ditto/` runtime utilities.
- Generated anchor metadata such as `ditto-meta.ts`.
- Validation-only files in working captures, including `_cids.ts` and `_styles.ts` before export stripping.
- Framework shell plumbing unless you are intentionally changing global metadata or page mounting behavior.
