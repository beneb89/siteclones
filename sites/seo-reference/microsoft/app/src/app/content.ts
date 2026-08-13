// Semantic page content extracted from recognized recipe sections.

export type FeaturesItem = {
  id: string;
  title: string;
  description: string;
};
export const features: FeaturesItem[] = [
    { id: "teaser-e33d159c04", title: "Fast, secure MCP integration", description: "Integrate the AI assistants your teams already use with the Microsoft Advertising API via a standardized, governed MCP server." },
    { id: "teaser-6ca5c4617e", title: "Faster conversational campaign insights", description: "Save hours in campaign diagnosis and performance optimization by asking your favorite AI assistants questions like, \"How did my PMax campaign perform last week?\"" },
    { id: "teaser-d5def1d930", title: "Cross-platform marketing operations in one AI chat", description: "Stop switching tabs. Connect multiple MCP servers to your AI assistant and simply prompt, \"Show me conversion rates from Microsoft, Google, and Meta Ads.\"" }
];

export type Features2Item = {
  variant: string;
  title: string;
  description: string;
  stat: string;
  label?: string;
};
export const features2: Features2Item[] = [
    { variant: "read-the-set-up-guide", title: "Read the set up guide", description: "Follow the guide to understand how to set up the MCP server", stat: "01" },
    { variant: "configure-the-mcp-server", title: "Configure the MCP server", description: "Add the MCP server to your AI assistant by following the integration guidance.", stat: "02" },
    { variant: "ask-questions-and-get-insights-through-con", title: "Ask questions and get insights through conversation in your favorite AI assistants.", description: "Check out some sample use cases", label: "Start chatting", stat: "03" }
];

export type Tile2DataItem = {
  description: string;
};
export const tile2Data: Tile2DataItem[] = [
    { description: "Exploration of key Microsoft Advertising account data, including campaigns, ad groups, ads, and keywords." },
    { description: "Performance metrics on every entity for filtering and sorting, including spend, clicks, impressions, CTR, average CPC, average CPM, conversions, conversion rate, revenue, return on ad spend (ROAS), and more." },
    { description: "Common ways to narrow results, such as filtering and viewing performance over a selected date range, so you can understand results faster and save token credits." }
];

