# AGENTS.md

This is a generated ditto.site clone app for https://doubleyourfreelancing.com/. It is a static Next.js App Router project produced from captured DOM, CSS, assets, metadata, and interaction recipes.

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

- / - Home - Double Your Freelancing
- /about - About - Double Your Freelancing
- /charge-what-youre-worth - Charge What You’re Worth - Double Your Freelancing
- /courses - Courses - Double Your Freelancing
- /feedback - Feedback - Double Your Freelancing
- /opt-out - Opt Out - Double Your Freelancing
- /rate - Double Your Freelancing Rate - Double Your Freelancing
- /1-bp-course-timeline - 1 - BP Course Timeline - Double Your Freelancing
- /1-wip-new-dashboard - 1 - wip new dashboard - Double Your Freelancing
- /1-zach-test-be-own-consultant - 1 - zach test be own consultant - Double Your Freelancing
- /100kprojects - The Business of Freelancing, Episode 20: Scott Yewell On His First $100k+ Project - Double Your Freelancing
- /2-big-marketing-mistakes-freelancers-make-expecting-free-clients-and-not-knowing-your-numbers - Episode 141: 2 Big Marketing Mistakes Freelancers Make - Expecting Free Clients & Not Knowing Your Numbers - Double Your Freelancing
- /20-traits-of-successful-freelancers-part1 - 20 Traits of Successful Freelancers - Double Your Freelancing
- /200k-freelancer-enrollment-closed - $200k Freelancer Enrollment Closed - Double Your Freelancing
- /200kf - 200KF - More Detail - Double Your Freelancing

## Do Not Edit Casually

- `src/app/ditto/` runtime utilities.
- Generated anchor metadata such as `ditto-meta.ts`.
- Validation-only files in working captures, including `_cids.ts` and `_styles.ts` before export stripping.
- Framework shell plumbing unless you are intentionally changing global metadata or page mounting behavior.
