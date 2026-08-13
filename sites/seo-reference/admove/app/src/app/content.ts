// Semantic page content extracted from recognized recipe sections.

export type TileDataItem = {
  href: string;
  description: string;
};
export const tileData: TileDataItem[] = [
    { href: "/tools", description: "Tools" },
    { href: "/pricing", description: "Pricing" },
    { href: "/about", description: "About" }
];

export type ListRowDataItem = {
  description: string;
};
export const listRowData: ListRowDataItem[] = [
    { description: "Meta Ads AI Connectors is Meta's umbrella name for two interfaces to the Marketing API: an MCP Server (hosted at mcp.facebook.com/ads for conversational use) and a CLI (installed via npm for scripted workflows). Both launched April 29, 2026." },
    { description: "Both interfaces authenticate through Meta Business OAuth rather than the traditional Developer App and App Review process, cutting setup time from days to minutes." },
    { description: "The MCP Server and CLI expose the same 29 tools across five capability areas: reporting and insights, campaign management, catalog operations, account diagnostics, and dataset operations." },
    { description: "Every campaign, ad set, and ad created through the connectors lands in PAUSED status. No CLI flag overrides this default." },
    { description: "The recommended operating split is MCP for analysis and ad-hoc reporting, CLI for deterministic execution and bulk operations." },
    { description: "Catalog operations account for 10 of the 29 tools, making product feed management the heaviest capability cluster in the toolkit." },
    { description: "MCP sessions preload tool descriptions into the AI client's context window, adding token overhead that grows when multiple connectors run alongside Meta's. The CLI avoids this cost entirely." },
    { description: "The connectors cannot access Meta's optimization layer (Advantage+, bidding algorithms, audience expansion), lead form management, or local files from the MCP Server." },
    { description: "Meta is the first major ad platform to ship full read-and-write MCP access from day one. Google Ads MCP still requires a Developer App, and Amazon Ads reached open beta earlier in 2026." }
];

export type Tile2DataItem = {
  description: string;
};
export const tile2Data: Tile2DataItem[] = [
    { description: "Interface" },
    { description: "How you interact" },
    { description: "Best for" },
    { description: "Auth" },
    { description: "Output" },
    { description: "Token cost" },
    { description: "Ideal use case" }
];

export type Tile3DataItem = {
  description: string;
};
export const tile3Data: Tile3DataItem[] = [
    { description: "MCP Server" },
    { description: "Chat / natural language" },
    { description: "Analysis, reporting, ad-hoc queries" },
    { description: "OAuth via browser" },
    { description: "Conversational responses" },
    { description: "~55K tokens per session" },
    { description: "Morning performance review across accounts" }
];

export type Tile3Data2Item = {
  description: string;
};
export const tile3Data2: Tile3Data2Item[] = [
    { description: "CLI" },
    { description: "Terminal commands" },
    { description: "Bulk edits, scripted workflows, automation" },
    { description: "OAuth via meta auth login" },
    { description: "Spec files, exit codes" },
    { description: "Low (no preloaded definitions)" },
    { description: "Batch budget changes across 20 campaigns" }
];

export type ListRow2DataItem = {
  description: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { description: "Your browser will open a Meta Business OAuth prompt. Authorize the connection by selecting which ad accounts and permissions to grant." },
    { description: "On first connection, the client loads all 29 tool descriptions into its context. The token overhead varies depending on what other connectors are active alongside Meta’s." },
    { description: "Once connected, you can start asking questions about your ad accounts in natural language: “What’s the CPM trend across my active campaigns this week?”" }
];

export type ListRow2Data2Item = {
  description: string;
};
export const listRow2Data2: ListRow2Data2Item[] = [
    { description: "Confirm your machine has Python 3.12 or higher installed; the CLI depends on it." },
    { description: "Claude Code is the primary client for CLI-based workflows, though any terminal environment works." },
    { description: "Run your first command to verify the connection: pull an account performance summary for the current week." }
];

export type ListRow2Data3Item = {
  description: string;
};
export const listRow2Data3: ListRow2Data3Item[] = [
    { description: "Spot the problem in MCP (say, a retargeting campaign burned through 40 percent of its weekly budget overnight)." },
    { description: "Switch to the CLI and run a batch command that adjusts daily budgets on that campaign and three others showing the same pattern." },
    { description: "Review the changes (everything lands in PAUSED status) and activate the ones you approve." }
];

export type Tile4DataItem = {
  href: string;
  description: string;
};
export const tile4Data: Tile4DataItem[] = [
    { href: "/product/creative-strategy", description: "Creative Strategy" },
    { href: "/product/creative-generation", description: "Creative Generation" },
    { href: "/product/branding", description: "Brand Hub" },
    { href: "/product/intelligence", description: "Product Intelligence" },
    { href: "/pricing", description: "Pricing" },
    { href: "/early-access", description: "Book a demo" }
];

export type Tile5DataItem = {
  href: string;
  description: string;
  target?: string;
};
export const tile5Data: Tile5DataItem[] = [
    { href: "/blog", description: "Blog" },
    { href: "/customer-stories", description: "Customer Stories" },
    { href: "https://help.admove.ai/en/", target: "_blank", description: "Help Center" },
    { href: "/privacy", target: "_blank", description: "Privacy" },
    { href: "/terms", target: "_blank", description: "Terms" }
];

export type Tile6DataItem = {
  href: string;
  description: string;
};
export const tile6Data: Tile6DataItem[] = [
    { href: "/tools/ai-ad-generator", description: "AI Ad Generator" },
    { href: "/tools/buyer-persona-generator", description: "AI Buyer Persona Maker" },
    { href: "/tools/ai-ad-copy-generator", description: "AI Ad Copy Generator" },
    { href: "/tools/url-to-video", description: "URL to Video Maker" },
    { href: "/tools/ai-script-generator", description: "AI Script Generator" },
    { href: "/tools/ai-video-generator", description: "AI Video Generator" },
    { href: "/tools", description: "See all tools..." }
];

export type Tile6Data2Item = {
  href: string;
  description: string;
};
export const tile6Data2: Tile6Data2Item[] = [
    { href: "/about", description: "About" },
    { href: "/careers", description: "Careers" },
    { href: "mailto: contact@admove.ai", description: "Get in touch" },
    { href: "/partners", description: "Partnerships" },
    { href: "mailto: support@admove.ai", description: "Support" }
];

