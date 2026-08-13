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
  href: string;
  title: string;
  description: string;
  label: string;
};
export const features: FeaturesItem[] = [
    { href: "/blog/microsoft-dataverse-coding-agent-plugins-mcp-governance-2026", title: "Dataverse Meets Claude, Cursor and Copilot via MCP", description: "Microsoft's Dataverse coding-agent plugin now runs in Claude, Cursor and GitHub Copilot, with one router enforcing existing RBAC across 15 auditable MCP tools.", label: "July 6, 2026 · 10 min" },
    { href: "/blog/official-ads-mcp-servers-meta-google-tiktok-2026-playbook", title: "Meta, Google, TikTok Ship Official Ads MCP Servers", description: "Meta, Google, and TikTok now ship official ads MCP servers. The capability differences, the paused-by-default guardrail, and a staged rollout playbook.", label: "June 7, 2026 · 13 min" },
    { href: "/blog/ai-coding-agents-claude-code-cursor-codex-replit-2026", title: "AI Coding Agents: Claude Code vs Cursor vs Codex 2026", description: "Five-way comparison — Claude Code, Cursor, Codex Desktop, Replit Agent 3, Devin. Pricing, agent autonomy, MCP, eval scores, and reference workloads.", label: "April 28, 2026 · 4 min" },
    { href: "/blog/claude-code-auto-mode-default-permission-model-shift", title: "Claude Code Makes Auto Mode the Default on August 14", description: "Anthropic flips Claude Code to auto mode by default on Pro, Max and Team plans from August 14. What changes, what to pin, and what the studies show.", label: "August 10, 2026 · 18 min" }
];

export type ListRow6DataItem = {
  href: string;
  label: string;
};
export const listRow6Data: ListRow6DataItem[] = [
    { href: "/services/agentic-seo", label: "SEO" },
    { href: "/services/paid-media", label: "PPC" },
    { href: "/services/content-engine", label: "Content" },
    { href: "/services/web-development", label: "Web Dev" },
    { href: "/services/crm-automation", label: "CRM" }
];

export type ListRow6Data2Item = {
  href: string;
  label: string;
};
export const listRow6Data2: ListRow6Data2Item[] = [
    { href: "/about", label: "About" },
    { href: "/#process", label: "Process" },
    { href: "/contact", label: "Contact" }
];

export type ListRow6Data3Item = {
  href: string;
  label: string;
};
export const listRow6Data3: ListRow6Data3Item[] = [
    { href: "/blog", label: "Blog" },
    { href: "/ai-tools", label: "AI Tools" },
    { href: "/privacy-policy", label: "Privacy" },
    { href: "/terms-of-service", label: "Terms" }
];

export type ListRow6Data4Item = {
  href: string;
  label: string;
};
export const listRow6Data4: ListRow6Data4Item[] = [
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
  "title": "zero write access",
  "actions": [
    {
      "label": "Get started",
      "href": "/get-started"
    },
    {
      "label": "Explore analytics services",
      "href": "/services/analytics"
    }
  ]
};

