// Semantic page content extracted from recognized recipe sections.

export type MediaTileDataItem = {
  label: string;
};
export const mediaTileData: MediaTileDataItem[] = [
    { label: "Marketing Software" },
    { label: "Compare" },
    { label: "AI-Stack Fit" },
    { label: "Learn" }
];

export type ListRowDataItem = {
  href: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "#verdict", label: "The Verdict" },
    { href: "#who-its-for", label: "Who It's For" },
    { href: "#features", label: "Features" },
    { href: "#ux-support", label: "UX & Support" },
    { href: "#pricing", label: "Pricing" },
    { href: "#ratings", label: "Ratings" },
    { href: "#ai-stack", label: "AI & Tech" },
    { href: "#downsides", label: "Downsides" },
    { href: "#faq", label: "FAQ" }
];

export type MediaLinkDataItem = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
};
export const mediaLinkData: MediaLinkDataItem[] = [
    { href: "/software/se-ranking", alt: "SE Ranking logo", imgSrc: "/assets/cloned/images/02c30b942492.png", label: "SE Ranking" },
    { href: "/software/searchatlas", alt: "Search Atlas logo", imgSrc: "/assets/cloned/images/cc128d97f6d3.png", label: "Search Atlas" },
    { href: "/software/oxylabs", alt: "Oxylabs logo", imgSrc: "/assets/cloned/images/8dd4c8836639.png", label: "Oxylabs" }
];

export type FeaturesItem = {
  title: string;
  text: string;
  text3: string;
  text4: string;
  description: string;
};
export const features: FeaturesItem[] = [
    { title: "SERP APIs", text: "Google SERP tracking", text3: "Local search data", text4: "Mobile vs desktop results", description: "Real-time search results" },
    { title: "Keyword Research APIs", text: "Keyword difficulty scores", text3: "Related keywords", text4: "Competition metrics", description: "Search volume data" },
    { title: "Backlink Analysis APIs", text: "Domain backlink profiles", text3: "Referring domains", text4: "Link quality metrics", description: "Anchor text analysis" },
    { title: "Business Intelligence APIs", text: "Review monitoring", text3: "Merchant analytics", text4: "Content analysis", description: "App store data" },
    { title: "AI-Powered Features", text: "Content optimization suggestions", text3: "Automated insights", text4: "Smart data filtering", description: "Sofia AI assistant" }
];

export type TileDataItem = {
  description: string;
};
export const tileData: TileDataItem[] = [
    { description: "\"We have enjoyed working with DataForSEO. We can recommend it to any company that needs SEO related APIs. We have been satisfied with the speed, cost, and accuracy\"" },
    { description: "\"DataForSEO have been great to work with right from the start. They offer a wide range of different APIs and are constantly adding to their offerings. They are always on hand to help with any questions or queries that we have.\"" },
    { description: "\"DataForSEO has always been in our tool kit. I guess the most simple way to put it is that when you explore a tool's API, you can see what it is really capable of. DataForSEO also provides awesome documentation to utilise.\"" }
];

export type Tile3DataItem = {
  label: string;
  description: string;
};
export const tile3Data: Tile3DataItem[] = [
    { label: "What's the minimum cost to try DataForSEO?", description: "Nothing, to start. New accounts get a free $1 credit for real API testing, no card required. Once that runs out, the $50 minimum top-up kicks in. So you genuinely can test with real data before paying anything." },
    { label: "Do I need developers to use DataForSEO?", description: "Yes. This is an API platform that requires technical implementation, not a ready-to-use SEO tool." },
    { label: "How does pricing work exactly?", description: "Pay-per-request model where different API calls consume different amounts of credits. Costs vary significantly based on data complexity." },
    { label: "Can I build my own SEO tool with this data?", description: "Absolutely. That's the main use case. DataForSEO provides the data infrastructure for custom SEO applications." },
    { label: "How fresh is the data compared to other SEO tools?", description: "Very fresh. Keywords update within 30 days, backlinks are crawled continuously, and SERP data reflects real-time results." },
    { label: "Is there a free trial or free tier?", description: "Yes, in the form of a free $1 credit on signup (no card required), good for real API calls like several hundred SERP requests or several thousand keyword/backlink lookups. It is not a recurring free tier, and once it is used up, topping up requires the $50 minimum." },
    { label: "What makes this different from Ahrefs or Semrush APIs?", description: "More comprehensive API coverage (11 different categories), fresher data updates, and designed API-first rather than as platform extensions." },
    { label: "Can small businesses use this effectively?", description: "Generally not. The technical requirements and minimum costs make it better suited for software companies, agencies, or enterprises with development resources." },
    { label: "Is DataForSEO worth the price?", description: "Pricing is genuinely pay-as-you-go: a $50 minimum deposit, per-request pricing from around $0.0001, and a free $1 credit on signup (no card required) to prove out an integration with real data first. A separate sandbox environment also lets you test request/response shapes without spending credits. The trade-off is that heavy, unpredictable usage can produce a lumpier bill than a flat-tier subscription." },
    { label: "Does DataForSEO have AI features?", description: "An official MCP server exposes 7+ of the API categories (SERP, Keywords, Labs, OnPage, Backlinks, Business Data, Domain Analytics) through one protocol, so Claude, ChatGPT, Cursor, Gemini or n8n can all read the same live data. Because DataForSEO has been a pure data API since 2014, its MCP catalog is wider than any single-vendor SEO MCP." },
    { label: "How easy is it to switch to or away from DataForSEO?", description: "Migration risk is low by design. You integrate against a documented REST API with five official SDKs (Python, TypeScript, PHP, Java, .NET) and a published OpenAPI spec, not a proprietary dashboard, so swapping data providers later means changing a base URL and auth credentials, not rebuilding a workflow. Pay-as-you-go billing also means there is no annual contract to walk away from." },
    { label: "How much does DataForSEO cost?", description: "DataForSEO starts from From $50." }
];

export type NavLinkDataItem = {
  href: string;
  label: string;
};
export const navLinkData: NavLinkDataItem[] = [
    { href: "/recommendation", label: "Free Recommendation" },
    { href: "/software", label: "Software Directory" },
    { href: "/compare", label: "Comparisons" },
    { href: "/alternatives", label: "Alternatives" },
    { href: "/best", label: "Best Roundups" },
    { href: "/pricing", label: "Pricing Guides" },
    { href: "/pricing-calculator", label: "Pricing Calculators" },
    { href: "/deals", label: "Deals" },
    { href: "/mcp", label: "MCP Servers" },
    { href: "/api", label: "Tool APIs" },
    { href: "/affiliate-programs", label: "Affiliate Programs" },
    { href: "/guide", label: "In-Depth Guides" }
];

export type NavLink2DataItem = {
  href: string;
  label: string;
};
export const navLink2Data: NavLink2DataItem[] = [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/badge", label: "Featured Badge" }
];

export type NavLink2Data2Item = {
  href: string;
  label: string;
};
export const navLink2Data2: NavLink2Data2Item[] = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/privacy-policy#terms", label: "Terms of Service" },
    { href: "/privacy-policy#affiliate", label: "Affiliate Disclosure" },
    { href: "/privacy-policy#cookies", label: "Cookie Policy" },
    { href: "/html-sitemap", label: "Sitemap" }
];

export type LogosItem = {
  href: string;
  label: string;
  label2: string;
};
export const logos: LogosItem[] = [
    { href: "https://chiefrevenuebuddy.com/", label: "Chief Revenue Buddy", label2: "Sales & CRM software" },
    { href: "https://academygems.com/", label: "AcademyGems", label2: "Learn AI & make money online" },
    { href: "https://freestack.tools/", label: "freestack.tools", label2: "Free business tools" },
    { href: "https://europeanmartech.eu/", label: "EuropeanMartech", label2: "GDPR-verified EU martech" }
];

export type CtaSectionContentAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CtaSectionContent = {
  title?: string;
  actions: CtaSectionContentAction[];
};
export const ctaSectionContent: CtaSectionContent = {
  "title": "Frequently asked questions about DataForSEO",
  "actions": []
};

export type CtaSection2ContentAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CtaSection2Content = {
  title?: string;
  actions: CtaSection2ContentAction[];
};
export const ctaSection2Content: CtaSection2Content = {
  "title": "Ready to try DataForSEO?",
  "actions": []
};

export type CtaSection3ContentAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CtaSection3Content = {
  title?: string;
  actions: CtaSection3ContentAction[];
};
export const ctaSection3Content: CtaSection3Content = {
  "title": "The marketing tools worth your money, scored for AI agent readiness",
  "actions": []
};

