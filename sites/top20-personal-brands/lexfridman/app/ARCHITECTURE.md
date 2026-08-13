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

- routes: 60
- extracted components: 105
- section modules: 0
- SVG modules: 0
- content module: no
- component extraction requested: yes

## Routes

- / - Lex Fridman
- /hiring - Hiring - Lex Fridman - Lex Fridman
- /sponsors - Lex Fridman Podcast Sponsors - Lex Fridman
- /aaron-smith-levin - #361 – Aaron Smith-Levin: Scientology | Lex Fridman Podcast
- /abbas-amanat - #334 – Abbas Amanat: Iran Protests, Mahsa Amini, History, CIA & Nuclear Weapons | Lex Fridman Podcast
- /adam-frank - #455 – Adam Frank: Alien Civilizations and the Search for Extraterrestrial Life | Lex Fridman Podcast
- /adam-frank-transcript - Transcript for Adam Frank: Alien Civilizations and the Search for Extraterrestrial Life | Lex Fridman Podcast #455 - Lex Fridman
- /aella - #358 – Aella: Sex Work, OnlyFans, Porn, Escorting, Dating, and Human Sexuality | Lex Fridman Podcast
- /ai-sota-2026 - #490 – State of AI in 2026: LLMs, Coding, Scaling Laws, China, Agents, GPUs, AGI | Lex Fridman Podcast
- /ai-sota-2026-transcript - Transcript for State of AI in 2026: LLMs, Coding, Scaling Laws, China, Agents, GPUs, AGI | Lex Fridman Podcast #490 - Lex Fridman
- /albert-bourla - #249 - Albert Bourla: Pfizer CEO | Lex Fridman Podcast
- /alex-filippenko - #137 - Alex Filippenko: Supernovae, Dark Energy, Aliens & the Expanding Universe | Lex Fridman Podcast
- /alex-garland - #77 - Alex Garland: Ex Machina, Devs, Annihilation, and the Poetry of Science | MIT | Artificial Intelligence Podcast
- /alex-gladstein - #231 - Alex Gladstein: Bitcoin, Authoritarianism, and Human Rights | Lex Fridman Podcast
- /alien-debate - #279 - Alien Debate: Sara Walker and Lee Cronin | Lex Fridman Podcast
- /ama - Lex Fridman AMA
- /ama1 - Lex Fridman: Ask Me Anything - AMA January 2021 | Lex Fridman Podcast
- /anca-dragan - #81 - Anca Dragan: Human-Robot Interaction and Reward Engineering | MIT | Artificial Intelligence Podcast
- /andrej-karpathy - #333 – Andrej Karpathy: Tesla AI, Self-Driving, Optimus, Aliens, and AGI | Lex Fridman Podcast
- /andrew-bustamante - #310 – Andrew Bustamante: CIA Spy | Lex Fridman Podcast
- /andrew-callaghan - #425 – Andrew Callaghan: Channel 5, Gonzo, QAnon, O-Block, Politics & Alex Jones | Lex Fridman Podcast
- /andrew-callaghan-transcript - Transcript for Andrew Callaghan: Channel 5, Gonzo, QAnon, O-Block, Politics & Alex Jones | Lex Fridman Podcast #425 - Lex Fridman
- /andrew-huberman - #139 - Andrew Huberman: Neuroscience of Optimal Performance | Lex Fridman Podcast
- /andrew-huberman-2 - #164 - Andrew Huberman: Sleep, Dreams, Creativity & the Limits of the Human Mind | Lex Fridman Podcast
- /andrew-huberman-3 - #277 - Andrew Huberman: Focus, Stress, Relationships, and Friendship | Lex Fridman Podcast
- /andrew-huberman-4 - #393 – Andrew Huberman: Relationships, Drama, Betrayal, Sex, and Love | Lex Fridman Podcast
- /andrew-huberman-4-transcript - Transcript for Andrew Huberman: Relationships, Drama, Betrayal, Sex, and Love | Lex Fridman Podcast #393 - Lex Fridman
- /andrew-huberman-5 - #435 – Andrew Huberman: Focus, Controversy, Politics, and Relationships | Lex Fridman Podcast
- /andrew-huberman-5-transcript - Transcript for Andrew Huberman: Focus, Controversy, Politics, and Relationships | Lex Fridman Podcast #435 - Lex Fridman
- /andrew-ng - #73 - Andrew Ng: Deep Learning, Education, and Real-World AI | MIT | Artificial Intelligence Podcast
- /andrew-strominger - #359 – Andrew Strominger: Black Holes, Quantum Gravity, and Theoretical Physics | Lex Fridman Podcast
- /ann-druyan - #78 - Ann Druyan: Cosmos, Carl Sagan, Voyager, and the Beauty of Science | MIT | Artificial Intelligence Podcast
- /anna-frebel - #378 – Anna Frebel: Origin and Evolution of the Universe, Galaxies, and Stars | Lex Fridman Podcast
- /annaka-harris - #326 – Annaka Harris: Free Will, Consciousness, and the Nature of Reality | Lex Fridman Podcast
- /annie-jacobsen - #420 – Annie Jacobsen: Nuclear War, CIA, KGB, Aliens, Area 51, Roswell & Secrecy | Lex Fridman Podcast
- /annie-jacobsen-transcript - Transcript for Annie Jacobsen: Nuclear War, CIA, KGB, Aliens, Area 51, Roswell & Secrecy | Lex Fridman Podcast #420 - Lex Fridman
- /anthony-kaldellis - #498 – Anthony Kaldellis: Roman Empire, Byzantine Empire, Rise & Fall of Empires | Lex Fridman Podcast
- /anthony-kaldellis-transcript - Transcript for Anthony Kaldellis: Roman Empire, Byzantine Empire, Rise & Fall of Empires | Lex Fridman Podcast #498 - Lex Fridman
- /anthony-pompliano - #171 - Anthony Pompliano: Bitcoin | Lex Fridman Podcast
- /anya-fernald - #203 - Anya Fernald: Regenerative Farming and the Art of Cooking Meat | Lex Fridman Podcast
- /app - App Information - Lex Fridman
- /aravind-srinivas - #434 – Aravind Srinivas: Perplexity CEO on Future of AI, Search & the Internet | Lex Fridman Podcast
- /aravind-srinivas-transcript - Transcript for Aravind Srinivas: Perplexity CEO on Future of AI, Search & the Internet | Lex Fridman Podcast #434 - Lex Fridman
- /ariel-ekblaw - #271 - Ariel Ekblaw: Space Colonization and Self-Assembling Space Megastructures | Lex Fridman Podcast
- /avi-loeb - #154 - Avi Loeb: Aliens, Black Holes, and the Mystery of the Oumuamua | Lex Fridman Podcast
- /avt - MIT Advanced Vehicle Technology Study - Lex Fridman
- /ayanna-howard - Ayanna Howard: Human-Robot Interaction and Ethics of Safety-Critical Systems | MIT | Artificial Intelligence Podcast
- /b-team - #363 – B-Team Jiu Jitsu: Craig Jones, Nicky Rod, and Nicky Ryan | Lex Fridman Podcast
- /balaji-srinivasan - #331 – Balaji Srinivasan: How to Fix Government, Twitter, Science, and the FDA | Lex Fridman Podcast
- /barry-barish - #213 - Barry Barish: Gravitational Waves and the Most Precise Device Ever Built | Lex Fridman Podcast
- /bassem-youssef - #424 – Bassem Youssef: Israel-Palestine, Gaza, Hamas, Middle East, Satire & Fame | Lex Fridman Podcast
- /bassem-youssef-transcript - Transcript for Bassem Youssef: Israel-Palestine, Gaza, Hamas, Middle East, Satire & Fame | Lex Fridman Podcast #424 - Lex Fridman
- /ben-askren - #242 - Ben Askren: Wrestling and MMA | Lex Fridman Podcast
- /ben-goertzel - #103 - Ben Goertzel: Artificial General Intelligence | MIT | Artificial Intelligence Podcast
- /ben-shapiro - #336 – Ben Shapiro: Politics, Kanye, Trump, Biden, Hitler, Extremism, and War | Lex Fridman Podcast
- /ben-shapiro-destiny-debate - #410 – Ben Shapiro vs Destiny Debate: Politics, Jan 6, Israel, Ukraine & Wokeism | Lex Fridman Podcast
- /ben-shapiro-destiny-debate-transcript - Transcript for Ben Shapiro vs Destiny Debate: Politics, Jan 6, Israel, Ukraine & Wokeism | Lex Fridman Podcast #410 - Lex Fridman
- /ben-shapiro-transcript - Transcript for Ben Shapiro: Politics, Kanye, Trump, Biden, Hitler, Extremism, and War | Lex Fridman Podcast #336 - Lex Fridman
- /benjamin-netanyahu - #389 – Benjamin Netanyahu: Israel, Palestine, Power, Corruption, Hate, and Peace | Lex Fridman Podcast
- /benjamin-netanyahu-transcript - Transcript for Benjamin Netanyahu: Israel, Palestine, Power, Corruption, Hate, and Peace | Lex Fridman Podcast #389 - Lex Fridman

## Tradeoffs

The clone prioritizes deterministic static fidelity, accessible markup, local asset materialization, and source metadata preservation. It may keep measured CSS where inferred layout intent is uncertain. It intentionally defers arbitrary JavaScript replay, video-like animation replay, and full third-party application behavior. External services, live personalization, analytics, payments, auth, and complex client app state are not reconstructed unless a specific safe recipe exists.
