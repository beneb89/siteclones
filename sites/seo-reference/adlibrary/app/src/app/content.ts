// Semantic page content extracted from recognized recipe sections.

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "#step-1-add-the-mcp-server-to-your-claude-code-config", label: "Step 1 — Add the MCP server to your Claude Code config" },
    { href: "#step-2-start-claude-code-and-trigger-the-oauth-flow", label: "Step 2 — Start Claude Code and trigger the OAuth flow" },
    { href: "#step-3-pick-your-oauth-scopes-deliberately", label: "Step 3 — Pick your OAuth scopes deliberately" },
    { href: "#step-4-verify-the-connection", label: "Step 4 — Verify the connection" }
];

export type ListRow3DataItem = {
  href: string;
  label: string;
};
export const listRow3Data: ListRow3DataItem[] = [
    { href: "#first-read-verify-the-connection-without-touching-live-spend", label: "First read: verify the connection without touching live spend" },
    { href: "#first-write-drafting-a-paused-campaign-endtoend", label: "First write: drafting a paused campaign end-to-end" },
    { href: "#pipeboard-vs-metas-official-server-when-to-pick-which", label: "Pipeboard vs Meta's official server: when to pick which" },
    { href: "#permissions-audit-trails-and-the-readonly-safety-pattern", label: "Permissions, audit trails, and the read-only safety pattern" }
];

export type ListRow4DataItem = {
  href: string;
  label: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { href: "#what-is-meta-ads-mcp-and-how-does-it-work", label: "What is Meta Ads MCP and how does it work?" },
    { href: "#is-meta-ads-mcp-safe-to-connect-with-write-permissions", label: "Is Meta Ads MCP safe to connect with write permissions?" },
    { href: "#what-is-the-difference-between-metas-official-mcp-server-and-pipeboard", label: "What is the difference between Meta's official MCP server and Pipeboard?" },
    { href: "#how-many-tools-does-meta-ads-mcp-expose", label: "How many tools does Meta Ads MCP expose?" },
    { href: "#do-i-need-a-meta-developer-app-to-use-meta-ads-mcp", label: "Do I need a Meta developer app to use Meta Ads MCP?" }
];

export type ProductsItem = {
  variant: string;
  eyebrow: string;
  title: string;
  description?: string;
  label?: string;
};
export const products: ProductsItem[] = [
    { variant: "claude-code-adlibrary-api-building-agentic", eyebrow: "Competitive Research", title: "Claude Code + AdLibrary API: Building Agentic Marketing Workflows That Actually Ship", description: "Build unattended competitor intelligence workflows using Claude Code and the AdLibrary API. Includes real API call patterns, two worked examples, and observability practices." },
    { variant: "agentic-marketing-workflows-with-claude-co", eyebrow: "Platforms & Tools", title: "Agentic Marketing Workflows with Claude Code: From One-Off Scripts to Always-On Agents", description: "Build agentic marketing workflows with Claude Code: a 4-stage progression from a simple prompt to a memory-equipped agent with tool-use and approval gates." },
    { variant: "claude-code-for-marketers-a-beginner-s-int", eyebrow: "Guides & Tutorials", title: "Claude Code for Marketers: A Beginner's Intro to Agentic Command-Line Workflows", label: "Claude Code gives marketers a direct line from data to output — ad variants, audits, teardowns, reports, all from the terminal. Here's how to start." },
    { variant: "claude-code-prompts-for-marketing-workflow", eyebrow: "Platforms & Tools", title: "Claude Code Prompts for Marketing Workflows: A Copy-Paste Library", description: "25+ Claude Code prompts for marketing — competitor research, ad analysis, SEO audits, report generation, and creative batch ops. Copy-paste with setup notes and expected outputs." },
    { variant: "claude-code-vs-cursor-for-marketers-which-", eyebrow: "Platforms & Tools", title: "Claude Code vs Cursor for Marketers: Which Agentic Coder Fits Non-Dev Workflows", description: "Compare Claude Code vs Cursor for non-dev marketers: learning curve, CLI vs IDE, sub-agents vs Composer, MCP support, and honest use-case picks by workflow." },
    { variant: "meta-marketing-api-integration-software-wh", eyebrow: "Advertising Strategy", title: "Meta Marketing API integration software: what to build vs what to buy", description: "Meta Marketing API integration software is free. The ops tax — auth refresh, rate-limit handling, schema drift — is what costs money. A practical build-vs-buy framework." },
    { variant: "facebook-campaign-setup-a-2026-tutorial-th", eyebrow: "Advertising Strategy", title: "Facebook campaign setup: a 2026 tutorial that skips the bad defaults", description: "The default Facebook campaign setup funnels you into Advantage+ before your angles are validated. Skip 3 defaults, add one adlibrary step, and avoid 4 weeks of wasted learning phase." }
];

export type TextLinkDataItem = {
  href: string;
  title: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { href: "/features/api-access", title: "Programmatic Access to the AdLibrary Database" },
    { href: "/features/unified-ad-search", title: "Search Ads Across Multiple Networks in One Interface" },
    { href: "/features/ad-timeline-analysis", title: "Filter Ads by Date and Analyze Running Timelines" }
];

export type NavLinkDataItem = {
  href: string;
  rel?: string;
  target?: string;
  label: string;
};
export const navLinkData: NavLinkDataItem[] = [
    { href: "/ad-library-api", rel: "noopener noreferrer", target: "_blank", label: "API" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/posts", label: "Posts" },
    { href: "/features", label: "Features" },
    { href: "/guides", label: "Guides" },
    { href: "/brands", label: "Discover Brands" },
    { href: "/compare", label: "Comparisons" },
    { href: "/tools", rel: "noopener noreferrer", target: "_blank", label: "Free Tools for Marketers" },
    { href: "/adtools", label: "Ad Tools" },
    { href: "/glossary", label: "Glossary" },
    { href: "/alternatives", label: "Alternatives" }
];

export type ListRow5DataItem = {
  href: string;
  label: string;
};
export const listRow5Data: ListRow5DataItem[] = [
    { href: "/platforms/facebook", label: "Facebook Ads" },
    { href: "/platforms/instagram", label: "Instagram Ads" },
    { href: "/platforms/tiktok", label: "TikTok Ads" },
    { href: "/platforms/youtube", label: "YouTube Ads" },
    { href: "/platforms/google", label: "Google Ads" }
];

export type ListRow5Data2Item = {
  href: string;
  label: string;
};
export const listRow5Data2: ListRow5Data2Item[] = [
    { href: "/ads-by-format/video", label: "Video Ads" },
    { href: "/ads-by-format/image", label: "Image Ads" },
    { href: "/ads-by-format/carousel", label: "Carousel Ads" },
    { href: "/ad-intelligence-api", label: "Ad Spy API" }
];

export type ListRow5Data3Item = {
  href: string;
  label: string;
};
export const listRow5Data3: ListRow5Data3Item[] = [
    { href: "/ads-by-country/us", label: "United States" },
    { href: "/ads-by-country/gb", label: "United Kingdom" },
    { href: "/ads-by-country/de", label: "Germany" },
    { href: "/ads-by-country/fr", label: "France" },
    { href: "/ads-by-country/au", label: "Australia" }
];

export type ListRow5Data4Item = {
  href: string;
  label: string;
};
export const listRow5Data4: ListRow5Data4Item[] = [
    { href: "/brands/industry/ecommerce", label: "E-commerce Ads" },
    { href: "/brands/industry/saas", label: "SaaS Ads" },
    { href: "/brands/industry/finance", label: "Finance Ads" },
    { href: "/brands/industry/fashion", label: "Fashion Ads" },
    { href: "/brands/industry/technology", label: "Technology Ads" }
];

