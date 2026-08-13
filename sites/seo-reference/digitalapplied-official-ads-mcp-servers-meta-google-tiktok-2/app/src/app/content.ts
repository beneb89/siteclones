// Semantic page content extracted from recognized recipe sections.

export type TextLinkDataItem = {
  href: string;
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { href: "/services", label: "Services" },
    { href: "/ai-tools", label: "AI Tools" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
];

export type ListRowDataItem = {
  href: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/blog/category/ai-development", label: "AI Development" }
];

export type FeaturesItem = {
  variant: string;
  eyebrow: string;
  title: string;
  stat?: string;
  description?: string;
  date?: string;
};
export const features: FeaturesItem[] = [
    { variant: "read-write-oauth", eyebrow: "tools", title: "read/write · OAuth", stat: "29" },
    { variant: "read-only-by-design", eyebrow: "tools", title: "read-only by design", stat: "3" },
    { variant: "full", eyebrow: "TikTok Ads MCP", title: "Full", description: "campaign lifecycle" },
    { variant: "google-meta-tiktok-amazon", eyebrow: "Official platforms", title: "Google · Meta · TikTok · Amazon", date: "Feb–May 2026", stat: "4" }
];

export type Features2Item = {
  href: string;
  title: string;
  description: string;
  label: string;
};
export const features2: Features2Item[] = [
    { href: "/blog/agent-plugins-1-0-open-standard-portable-ai-skills", title: "Agent Plugins 1.0: What the Standard Actually Fixes", description: "Agent Plugins 1.0 packages skills and MCP servers in one directory format. The spec is still marked Working Draft, and vendor-specific formats keep shipping.", label: "August 8, 2026 · 20 min" },
    { href: "/blog/connect-ga4-search-console-claude-mcp-build-2026", title: "Connect GA4 + Search Console to Claude via MCP 2026", description: "Wire Google's official GA4 MCP server and a community Search Console server into Claude Code: service-account auth, read-only scopes and least-privilege grants.", label: "July 8, 2026 · 12 min" },
    { href: "/blog/microsoft-dataverse-coding-agent-plugins-mcp-governance-2026", title: "Dataverse Meets Claude, Cursor and Copilot via MCP", description: "Microsoft's Dataverse coding-agent plugin now runs in Claude, Cursor and GitHub Copilot, with one router enforcing existing RBAC across 15 auditable MCP tools.", label: "July 6, 2026 · 10 min" },
    { href: "/blog/snowflake-coco-warehouse-coding-agent-2026-analysis", title: "Snowflake CoCo: The Coding Agent in Your Warehouse", description: "Snowflake CoCo executes SQL, dbt models, and pipelines end-to-end in the warehouse. The ADE-Bench results, the human-on-the-loop model, and the perimeter limit.", label: "June 7, 2026 · 11 min" }
];

export type ListRow5DataItem = {
  href: string;
  label: string;
};
export const listRow5Data: ListRow5DataItem[] = [
    { href: "/services/agentic-seo", label: "SEO" },
    { href: "/services/paid-media", label: "PPC" },
    { href: "/services/content-engine", label: "Content" },
    { href: "/services/web-development", label: "Web Dev" },
    { href: "/services/crm-automation", label: "CRM" }
];

export type ListRow5Data2Item = {
  href: string;
  label: string;
};
export const listRow5Data2: ListRow5Data2Item[] = [
    { href: "/about", label: "About" },
    { href: "/#process", label: "Process" },
    { href: "/contact", label: "Contact" }
];

export type ListRow5Data3Item = {
  href: string;
  label: string;
};
export const listRow5Data3: ListRow5Data3Item[] = [
    { href: "/blog", label: "Blog" },
    { href: "/ai-tools", label: "AI Tools" },
    { href: "/privacy-policy", label: "Privacy" },
    { href: "/terms-of-service", label: "Terms" }
];

export type ListRow5Data4Item = {
  href: string;
  label: string;
};
export const listRow5Data4: ListRow5Data4Item[] = [
    { href: "/blog/category/ai-development", label: "AI Development" },
    { href: "/blog/category/seo", label: "SEO" },
    { href: "/blog/category/marketing", label: "Marketing" },
    { href: "/blog/category/ecommerce", label: "eCommerce" },
    { href: "/blog/category/business", label: "Business" },
    { href: "/blog/category/crm-automation", label: "CRM & Automation" },
    { href: "/blog/category/development", label: "Development" },
    { href: "/blog/tags", label: "All Topics →" }
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
  "title": "budget calls",
  "actions": [
    {
      "label": "Get started",
      "href": "/get-started"
    },
    {
      "label": "Explore paid media management",
      "href": "/services/paid-media"
    }
  ]
};

