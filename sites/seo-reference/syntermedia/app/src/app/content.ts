// Semantic page content extracted from recognized recipe sections.

export type TextLinkDataItem = {
  href: string;
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { href: "#microsoft-mcp", label: "1. What Microsoft Ads MCP Does" },
    { href: "#synter-mcp", label: "2. Synter MCP for Microsoft Ads" },
    { href: "#microsoft-tools", label: "3. Microsoft Ads Agent Tools" },
    { href: "#campaign-types", label: "4. Supported Campaign Types" },
    { href: "#example-prompts", label: "5. Example Claude Prompts" },
    { href: "#google-import", label: "6. Google Ads Import" },
    { href: "#faq", label: "7. FAQ" }
];

export type FeaturesItem = {
  description: string;
  title: string;
};
export const features: FeaturesItem[] = [
    { description: "Monthly searchers on Microsoft network", title: "1B+" },
    { description: "Platforms in Synter MCP", title: "14" },
    { description: "Microsoft Advertising API connection", title: "Direct API" }
];

export type Features2Item = {
  title: string;
  text: string;
  text3: string;
  text4: string;
  description: string;
};
export const features2: Features2Item[] = [
    { title: "Campaign Tools", text: "create_microsoft_campaign", text3: "pause_microsoft_campaign", text4: "get_microsoft_campaigns", description: "update_microsoft_campaign" },
    { title: "Ad Group and Keyword Tools", text: "create_microsoft_ad_group", text3: "update_microsoft_bids", text4: "add_microsoft_negative_keywords", description: "add_microsoft_keywords" },
    { title: "Ad and Creative Tools", text: "create_microsoft_responsive_search_ad", text3: "import_from_google_ads", text4: "pause_microsoft_ad", description: "create_microsoft_audience_ad" },
    { title: "Audience and Reporting", text: "create_microsoft_audience", text3: "get_microsoft_performance", text4: "get_microsoft_keyword_report", description: "set_linkedin_profile_targeting" }
];

export type FeatureCard3DataItem = {
  title: string;
  description: string;
};
export const featureCard3Data: FeatureCard3DataItem[] = [
    { title: "B2B Search Campaign with LinkedIn Targeting", description: "\"Create a Microsoft Ads search campaign for our enterprise software. Target keywords around ERP software and procurement automation. Enable LinkedIn profile targeting for VP-level and C-suite at companies with 500+ employees. $200/day, target CPA $120.\"" },
    { title: "Google Ads Import and Comparison", description: "\"Import our top five Google Search campaigns into Microsoft Ads. Then run both for 30 days and compare CPC and cost per conversion. Show me which keywords perform better on Bing vs Google.\"" },
    { title: "Cross-Platform Search Budget Allocation", description: "\"Compare our Google Ads and Microsoft Ads search performance this month. If Microsoft CPA is lower, increase Microsoft budget by $300/day and reduce Google by the same amount.\"" }
];

export type FeatureCard4DataItem = {
  title: string;
  description: string;
};
export const featureCard4Data: FeatureCard4DataItem[] = [
    { title: "Can I manage Microsoft Ads from Claude Desktop?", description: "Yes, with Synter MCP. Connect your Microsoft Advertising account to Synter and install the Synter MCP server in Claude Desktop. You can then create search campaigns, configure ad groups, manage keywords, upload creative, and pull performance reports through natural language prompts. Setup guide at syntermedia.ai/mcp." },
    { title: "What is the difference between Microsoft Ads and Bing Ads?", description: "Bing Ads was rebranded to Microsoft Advertising in 2019. The platform now covers Bing search, Microsoft Edge, Yahoo, and the Microsoft Audience Network (MSN, Outlook, LinkedIn profile targeting). Microsoft Ads reaches a distinct audience from Google: it skews toward higher-income, older professionals, and B2B decision-makers." },
    { title: "Does Microsoft Ads support Google Ads campaign import?", description: "Yes. Microsoft Ads supports direct import from Google Ads, so you can replicate Google Search campaigns in Microsoft Ads with minimal setup. Synter MCP can initiate this import and manage both platforms simultaneously, letting you run parallel campaigns across both search engines from a single Claude conversation." },
    { title: "How does Microsoft Ads management via MCP work technically?", description: "Synter MCP connects to the Microsoft Advertising API using OAuth credentials from your Microsoft Ads account. When you prompt Claude, the Synter MCP server calls the appropriate API endpoints and executes actions in your live account. All actions are logged in Synter&apos;s audit trail." },
    { title: "Why add Microsoft Ads to a paid media mix that already includes Google?", description: "Microsoft Ads typically delivers lower CPCs than Google for the same keywords, with less advertiser competition in many verticals. For B2B advertisers, the LinkedIn profile targeting available in Microsoft Audience Network is unique. Most advertisers who import their Google campaigns to Microsoft see incremental conversions at a lower cost per acquisition." }
];

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "/features", label: "All Features" },
    { href: "/features/ai-agents", label: "AI Agents" },
    { href: "/features/campaign-management", label: "Campaign Management" },
    { href: "/features/attribution", label: "Attribution" },
    { href: "/integrations", label: "Integrations" },
    { href: "/security-governance", label: "Security" }
];

export type ListRow2Data2Item = {
  href: string;
  label: string;
};
export const listRow2Data2: ListRow2Data2Item[] = [
    { href: "/google-ads-ai-agent", label: "Google Ads" },
    { href: "/microsoft-ads-ai-agent", label: "Microsoft Ads" },
    { href: "/linkedin-ads-ai-agent", label: "LinkedIn Ads" },
    { href: "/meta-ads-ai-agent", label: "Meta Ads" },
    { href: "/reddit-ads-ai-agent", label: "Reddit Ads" },
    { href: "/x-ads-ai-agent", label: "X Ads" }
];

export type ListRow3DataItem = {
  href: string;
  label: string;
};
export const listRow3Data: ListRow3DataItem[] = [
    { href: "/blog/google-ads-ai-agent-guide", label: "Google Ads Guide" },
    { href: "/blog/microsoft-ads-ai-agent-guide", label: "Microsoft Ads Guide" },
    { href: "/blog/linkedin-ads-ai-agent-guide", label: "LinkedIn Ads Guide" },
    { href: "/blog/reddit-ads-guide-2025", label: "Reddit Ads Guide" },
    { href: "/blog/x-ads-ai-agent-guide", label: "X Ads Guide" }
];

export type ListRow2Data3Item = {
  href: string;
  label: string;
};
export const listRow2Data3: ListRow2Data3Item[] = [
    { href: "/compare/gomarble", label: "vs GoMarble" },
    { href: "/compare/optmyzr", label: "vs Optmyzr" },
    { href: "/compare/wordstream", label: "vs WordStream" },
    { href: "/compare/skai", label: "vs Skai" },
    { href: "/compare/synter-vs-ploy", label: "vs Ploy" },
    { href: "/compare", label: "All Comparisons" }
];

export type ListRow4DataItem = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { href: "/manual", label: "Manual" },
    { href: "https://docs.syntermedia.ai/?utm_source=syntermedia_ai&utm_medium=website&utm_campaign=footer_docs", rel: "noopener noreferrer", target: "_blank", label: "Docs" },
    { href: "/blog", label: "Blog" },
    { href: "/for/agencies", label: "Agency" },
    { href: "/demo", rel: "noopener noreferrer", target: "_blank", label: "Book a Demo" },
    { href: "/free-report", label: "Free AI Report" },
    { href: "/mcp", label: "MCP Server" },
    { href: "https://x.com/synterai", rel: "noopener noreferrer", target: "_blank", label: "X (Twitter)" },
    { href: "/contact", label: "Contact" }
];

export type TextLink2DataItem = {
  href: string;
  label: string;
};
export const textLink2Data: TextLink2DataItem[] = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Notice" },
    { href: "/privacy/do-not-sell", label: "Do Not Sell My Info" },
    { href: "/trust", label: "Trust Center" }
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
  "title": "Get posts like this in your inbox",
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
  "title": "The AI Agent Operator for Ads.",
  "actions": [
    {
      "label": "Start Growing",
      "href": "/sign-up?placement=blog_cta_mcp-server-microsoft-ads"
    },
    {
      "label": "See how it works",
      "href": "/demo?placement=blog_cta_secondary_mcp-server-microsoft-ads"
    }
  ]
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
  "title": "Is your site ready to run ads?",
  "actions": [
    {
      "label": "Or book a 60-min session with Joel ↗",
      "href": "/demo"
    }
  ]
};

