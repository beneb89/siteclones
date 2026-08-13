// Semantic page content extracted from recognized recipe sections.

export type MediaTileDataItem = {
  label: string;
};
export const mediaTileData: MediaTileDataItem[] = [
    { label: "Products" },
    { label: "Solutions" },
    { label: "Resources" }
];

export type NavLinkDataItem = {
  href: string;
  label: string;
};
export const navLinkData: NavLinkDataItem[] = [
    { href: "#what-the-google-ads-mcp-is-in-30-seconds", label: "What the Google Ads MCP is, in 30 seconds" },
    { href: "#the-two-tools-and-the-gaql-layer", label: "The two tools and the GAQL layer" },
    { href: "#setup-the-developer-token-wall-is-the-real-friction", label: "Setup: the developer-token wall is the real friction" },
    { href: "#prerequisites", label: "Prerequisites" },
    { href: "#step-1-enable-the-api-and-create-the-oauth-client", label: "Step 1 — Enable the API and create the OAuth client" },
    { href: "#step-2-mint-a-refresh-token", label: "Step 2 — Mint a refresh token" },
    { href: "#step-3-install-or-clone-the-server", label: "Step 3 — Install or clone the server" },
    { href: "#step-4-configure-credentials", label: "Step 4 — Configure credentials" },
    { href: "#step-5-register-it-with-your-mcp-client", label: "Step 5 — Register it with your MCP client" },
    { href: "#step-6-run-your-first-gaql-query", label: "Step 6 — Run your first GAQL query" },
    { href: "#troubleshooting-the-common-failures", label: "Troubleshooting the common failures" },
    { href: "#the-read-only-vs-meta-contrast-the-original-frame", label: "The read-only-vs-Meta contrast (the original frame)" },
    { href: "#the-connector-landscape-official-isn-t-the-only-option", label: "The connector landscape: official isn't the only option" },
    { href: "#the-honest-limitations-read-before-you-trust-it", label: "The honest limitations (read before you trust it)" },
    { href: "#the-agent-operating-model-the-tools-imply", label: "The agent operating model the tools imply" },
    { href: "#a-real-tiered-gaql-prompt-library", label: "A real, tiered GAQL prompt library" },
    { href: "#tier-1-triage-your-daily-60-second-read", label: "Tier 1 — Triage (your daily 60-second read)" },
    { href: "#tier-2-diagnose-when-a-number-moves-the-wrong-way", label: "Tier 2 — Diagnose (when a number moves the wrong way)" },
    { href: "#tier-3-decide-your-weekly-optimization-review", label: "Tier 3 — Decide (your weekly optimization review)" },
    { href: "#how-soku-fits", label: "How Soku fits" },
    { href: "#where-to-go-next", label: "Where to go next" },
    { href: "#faq", label: "FAQ" }
];

export type CardsItem = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  label: string;
  title: string;
  description: string;
};
export const cards: CardsItem[] = [
    { href: "/tools/google-ads-cost-calculator", alt: "Google Ads Cost Calculator", imgSrc: "/assets/cloned/images/1aa80e50b37b.png", srcSet: "/assets/cloned/images/91153b2ac474.png 384w, /assets/cloned/images/30e47f243ff0.webp 640w, /assets/cloned/images/7d9507fad354.png 750w, /assets/cloned/images/9233192d2d1f.webp 828w, /assets/cloned/images/4ac9cf413df9.webp 1080w, /assets/cloned/images/21c62ad32606.png 1200w, /assets/cloned/images/8a78d6cb8e06.png 1920w, /assets/cloned/images/5b836085712a.png 2048w, /assets/cloned/images/1aa80e50b37b.png 3840w", label: "Calculator", title: "Google Ads Cost Calculator", description: "Free Google Ads cost calculator — pick your industry and monthly budget to estimate clicks, conversions, and cost per lead from real Search-network CPC benchmarks." },
    { href: "/tools/real-estate-video-maker", alt: "Real Estate Video Maker", imgSrc: "/assets/cloned/images/0e850385eecf.png", srcSet: "/assets/cloned/images/bb54842f8501.png 384w, /assets/cloned/images/dd369072d79c.webp 640w, /assets/cloned/images/41e1edc274c8.png 750w, /assets/cloned/images/0d095cf8c960.webp 828w, /assets/cloned/images/7cdf998385eb.webp 1080w, /assets/cloned/images/26afbbeaa4be.png 1200w, /assets/cloned/images/f2c8d15d404d.png 1920w, /assets/cloned/images/f98d677177ca.png 2048w, /assets/cloned/images/0e850385eecf.png 3840w", label: "Video Generation", title: "Real Estate Video Maker", description: "Free AI real estate video maker from Soku AI — turn listing photos or a Zillow/MLS URL into property tours, agent intros, and just-listed ads with captions, music, and an AI presenter, then deploy and A/B test them across Meta, TikTok, YouTube, and Google." },
    { href: "/tools/business-video-maker", alt: "Business Video Maker", imgSrc: "/assets/cloned/images/e3879ffeccf8.png", srcSet: "/assets/cloned/images/529a51f3d360.png 384w, /assets/cloned/images/613ed8778b00.webp 640w, /assets/cloned/images/d784eb183acd.png 750w, /assets/cloned/images/62347dc3b211.webp 828w, /assets/cloned/images/75f81da5f23e.webp 1080w, /assets/cloned/images/24715aa9cd80.png 1200w, /assets/cloned/images/b6dc8eb863df.png 1920w, /assets/cloned/images/2849ff2d7065.png 2048w, /assets/cloned/images/e3879ffeccf8.png 3840w", label: "Video Generation", title: "Business Video Maker", description: "Free AI business video maker from Soku AI — turn a product URL, script, or brief into professional business videos: product demos, promos, explainers, and social ads. Generate on-brand variants, then deploy and A/B test them across Meta, TikTok, Google, and YouTube." }
];

export type ProductsItem = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  description: string;
  description2: string;
};
export const products: ProductsItem[] = [
    { href: "/use-cases/real-estate-ai-video-ads-lead-generation", alt: "How a Real Estate Brokerage Cut Cost Per Lead 41% with AI Video Ads", imgSrc: "/assets/cloned/images/fb680139abb9.jpg", srcSet: "/assets/cloned/images/8ef670d50895.jpg 384w, /assets/cloned/images/760af678e2cb.webp 640w, /assets/cloned/images/c42c75995423.jpg 750w, /assets/cloned/images/dfef3b90b9e8.webp 828w, /assets/cloned/images/c2b5d69870f0.webp 1080w, /assets/cloned/images/dcda66e14272.jpg 1200w, /assets/cloned/images/827352dfb2c7.jpg 1920w, /assets/cloned/images/3c579f890d1c.jpg 2048w, /assets/cloned/images/fb680139abb9.jpg 3840w", title: "How a Real Estate Brokerage Cut Cost Per Lead 41% with AI Video Ads", description: "A mid-size residential brokerage was hemorrhaging ad spend on static listing photos. Switching to AI-generated video ads dropped their Meta CPL from $52 to $31, tripled lead volume, and transformed how their agents filled pipelines.", description2: "7 min read" },
    { href: "/use-cases/cpg-food-brand-ai-creatives-meta-tiktok", alt: "How a CPG Food Brand Used AI Creatives to Win Shelf Space on Meta & TikTok", imgSrc: "/assets/cloned/images/1311358d4b4b.jpg", srcSet: "/assets/cloned/images/f7f4df267acd.jpg 384w, /assets/cloned/images/0ec8eb520422.webp 640w, /assets/cloned/images/50e4963a1217.jpg 750w, /assets/cloned/images/814c7d89a638.webp 828w, /assets/cloned/images/ba734bf81ab9.webp 1080w, /assets/cloned/images/3a9aa80bdd40.jpg 1200w, /assets/cloned/images/7e89d04be92e.jpg 1920w, /assets/cloned/images/388810f96577.jpg 2048w, /assets/cloned/images/1311358d4b4b.jpg 3840w", title: "How a CPG Food Brand Used AI Creatives to Win Shelf Space on Meta & TikTok", description: "An emerging CPG food brand used AI-powered ad creatives to fight creative fatigue, cut CPA by 34%, and generate the retail velocity data needed to expand from 800 to 2,400 store doors.", description2: "8 min read" },
    { href: "/use-cases/tiktok-creative-velocity-dtc-beauty", alt: "How a DTC Beauty Brand 3x'd TikTok ROAS by Solving the Creative Velocity Problem", imgSrc: "/assets/cloned/images/187aebd3c4d9.jpg", srcSet: "/assets/cloned/images/6a9798290454.jpg 384w, /assets/cloned/images/fb677ab180b5.webp 640w, /assets/cloned/images/875c7276738d.jpg 750w, /assets/cloned/images/b89fb428b36d.webp 828w, /assets/cloned/images/4b80a2d4fe2a.webp 1080w, /assets/cloned/images/ba84efbd391b.jpg 1200w, /assets/cloned/images/27eccb910e62.jpg 1920w, /assets/cloned/images/6c4af3710b44.jpg 2048w, /assets/cloned/images/187aebd3c4d9.jpg 3840w", title: "How a DTC Beauty Brand 3x'd TikTok ROAS by Solving the Creative Velocity Problem", description: "A DTC skincare brand was burning $40K/month on TikTok with declining ROAS. By switching to AI-powered creative velocity — 16 fresh videos per month with modular hook testing — they 3x'd ROAS in 60 days.", description2: "7 min read" }
];

export type FeaturesItem = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  description: string;
  description2: string;
};
export const features: FeaturesItem[] = [
    { href: "/blog/tiktok-ads-mcp-guide", alt: "TikTok Ads MCP: Official Status, Setup, and Limits (2026 Guide)", imgSrc: "/assets/cloned/images/716c25981e53.png", srcSet: "/assets/cloned/images/89e361faa59b.png 384w, /assets/cloned/images/a8dd9d8e40d5.webp 640w, /assets/cloned/images/0d4fb570ccd5.png 750w, /assets/cloned/images/0502749d1b1f.webp 828w, /assets/cloned/images/276bc0586b02.webp 1080w, /assets/cloned/images/5d4bee93835c.png 1200w, /assets/cloned/images/6da63769a618.png 1920w, /assets/cloned/images/82fe787be9bc.png 2048w, /assets/cloned/images/716c25981e53.png 3840w", title: "TikTok Ads MCP: Official Status, Setup, and Limits (2026 Guide)", description: "Yes — TikTok has an official Ads MCP server. What it does, what you can actually run today, how to connect it, and how it compares with Meta and Google.", description2: "14 min read" },
    { href: "/blog/best-mcp-servers-google-ads-ranked", alt: "Best MCP Servers for Google Ads, Ranked (2026)", imgSrc: "/assets/cloned/images/b112049d09d8.png", srcSet: "/assets/cloned/images/2cadd74d4a7d.png 384w, /assets/cloned/images/fa1cd30e9f6f.webp 640w, /assets/cloned/images/af9741d2951d.png 750w, /assets/cloned/images/fbeea4e0717f.webp 828w, /assets/cloned/images/4a26a4154580.webp 1080w, /assets/cloned/images/eecc43ff07b8.png 1200w, /assets/cloned/images/5acfb3f5ec52.png 1920w, /assets/cloned/images/9ca412746df0.png 2048w, /assets/cloned/images/b112049d09d8.png 3840w", title: "Best MCP Servers for Google Ads, Ranked (2026)", description: "The Google Ads MCP field compared and ranked — official Google server vs GoMarble, Pipeboard, Composio, Flywheel — first by setup time, then re-ranked by a weighted score where the official server's read-only limit changes everything.", description2: "11 min read" },
    { href: "/blog/meta-ads-mcp-guide", alt: "Meta Ads MCP: The Complete Guide (2026)", imgSrc: "/assets/cloned/images/10fda4514c85.png", srcSet: "/assets/cloned/images/bc6f68b9c4c6.png 384w, /assets/cloned/images/fb98d090a876.webp 640w, /assets/cloned/images/60ec00805ae4.png 750w, /assets/cloned/images/e8a3dee7f81c.webp 828w, /assets/cloned/images/50350196cb35.webp 1080w, /assets/cloned/images/7646a8f81df0.png 1200w, /assets/cloned/images/b2b8c9ec8f2d.png 1920w, /assets/cloned/images/23c1cf0a5f7f.png 2048w, /assets/cloned/images/10fda4514c85.png 3840w", title: "Meta Ads MCP: The Complete Guide (2026)", description: "The complete guide to the official Meta Ads MCP — what shipped, the 29 tools, MCP vs CLI, setup and scopes, how it compares to community connectors, the honest limits, and the agent operating model that makes it safe to run on spend.", description2: "19 min read" }
];

export type ListRow3DataItem = {
  href: string;
  label: string;
};
export const listRow3Data: ListRow3DataItem[] = [
    { href: "/tools", label: "Tools" },
    { href: "/models", label: "Models" },
    { href: "/prompts", label: "Prompts" },
    { href: "/skills", label: "Skills" },
    { href: "/cli", label: "CLI" },
    { href: "/integrations", label: "Integrations" },
    { href: "/free-competitor-analysis", label: "Free Competitor Analysis" },
    { href: "/free-ads-audit", label: "Free Ads Account Audit" }
];

export type ListRow3Data2Item = {
  href: string;
  label: string;
};
export const listRow3Data2: ListRow3Data2Item[] = [
    { href: "/agencies", label: "For Agencies" },
    { href: "/performance-teams", label: "For Performance Teams" },
    { href: "/marketing-agency-software", label: "Marketing Agency Software" },
    { href: "/client-reporting", label: "Client Reporting" },
    { href: "/campaign-management", label: "Campaign Management" },
    { href: "/google-ads-management", label: "Google Ads Management" },
    { href: "/digital-marketing-tools", label: "Digital Marketing Tools" }
];

export type ListRow3Data3Item = {
  href: string;
  label: string;
};
export const listRow3Data3: ListRow3Data3Item[] = [
    { href: "/blog", label: "Blog" },
    { href: "/docs", label: "Docs" },
    { href: "/ad-library", label: "Ad Library" },
    { href: "/alternatives", label: "Alternatives" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/glossary", label: "Glossary" },
    { href: "/changelog", label: "Changelog" },
    { href: "/whitepaper/chatgpt-ads", label: "ChatGPT Ads Whitepaper" },
    { href: "/affiliate", label: "Affiliate Program" },
    { href: "/partnerships", label: "Partnerships" },
    { href: "/contact", label: "Contact" }
];

export type ListRow4DataItem = {
  href: string;
  label: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/data-use-security", label: "Data Use & Security" }
];

export type TextLinkDataItem = {
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { label: "Reject optional" },
    { label: "Manage choices" },
    { label: "Accept all" }
];

