// Semantic page content extracted from recognized recipe sections.

export type TileDataItem = {
  href: string;
  label: string;
};
export const tileData: TileDataItem[] = [
    { href: "https://docs.dataforseo.com/v3", label: "API Docs" },
    { href: "/free-seo-stats", label: "Free Tools" },
    { href: "/about-us", label: "About us" },
    { href: "https://chat.dataforseo.com/", label: "AI Assistant" },
    { href: "/contact", label: "Contact us" },
    { href: "https://app.dataforseo.com/signin", label: "Login" }
];

export type ListRowDataItem = {
  href: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "#", label: "Products" },
    { href: "/integrations", label: "Integrations" },
    { href: "/solutions", label: "Solutions" },
    { href: "/pricing", label: "Pricing" },
    { href: "/knowledgebase", label: "Knowledge base" }
];

export type FeaturesItem = {
  alt: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
  label: string;
  width: string;
  title: string;
  description: string;
};
export const features: FeaturesItem[] = [
    { alt: "Accelerated integration", sizes: "(max-width: 200px) 100vw, 200px", imgSrc: "/assets/cloned/images/3066c4a9a7dc.webp", srcSet: "/assets/cloned/images/3066c4a9a7dc.webp 200w, /assets/cloned/images/f5ffa8944192.webp 150w", label: "DataForSEO Model Context Protocol 3", width: "200", title: "Accelerated integration", description: "Take advantage of out-of-the-box MCP to swiftly connect your AI model to a range of DataForSEO APIs without undertaking lengthy technical integration." },
    { alt: "Interoperability", sizes: "(max-width: 200px) 100vw, 200px", imgSrc: "/assets/cloned/images/bc00ed174d68.webp", srcSet: "/assets/cloned/images/bc00ed174d68.webp 200w, /assets/cloned/images/f1ec259f9b80.webp 150w", label: "DataForSEO Model Context Protocol 4", width: "200", title: "Interoperability", description: "MCP server allows connecting DataForSEO APIs to a variety of AI models, like Claude, and Integrated Development Environments like Cursor AI." },
    { alt: "Scalability", imgSrc: "/assets/cloned/images/ca5f1201c318.webp", label: "DataForSEO Model Context Protocol 5", width: "206", title: "Scalability", description: "From pay-as-you-go pricing model to API endpoints – all DataForSEO services are built for outmost scalability. DataForSEO MCP server is no exception." }
];

export type ListRow3DataItem = {
  href: string;
  label: string;
};
export const listRow3Data: ListRow3DataItem[] = [
    { href: "/apis/serp-api/", label: "SERP API" },
    { href: "/apis/google-ads-api/", label: "Google Ads API" },
    { href: "/apis/backlinks-api", label: "Backlinks API" },
    { href: "/apis/on-page-api/", label: "OnPage API" },
    { href: "/apis/dataforseo-labs-api/", label: "DataForSEO Labs API" },
    { href: "/apis/reviews-api", label: "Reviews API" },
    { href: "/apis/social-media-api/pinterest-api", label: "Pinterest API" },
    { href: "/apis/app-data-api", label: "App Data API" },
    { href: "/apis/business-data-api/", label: "Business Data API" },
    { href: "/apis/merchant-api-amazon/", label: "Amazon API" },
    { href: "/apis/merchant-api-google-shopping/", label: "Google Shopping API" },
    { href: "/apis/domain-analytics-api", label: "Domain Analytics API" },
    { href: "/apis/content-analysis-api", label: "Content Analysis API" },
    { href: "/apis/ai-optimization-api", label: "AI Optimization API" }
];

export type ListRow3Data2Item = {
  href: string;
  label: string;
};
export const listRow3Data2: ListRow3Data2Item[] = [
    { href: "/databases/google-databases", label: "Google Databases" },
    { href: "/databases/bing-databases", label: "Bing Databases" },
    { href: "/databases/amazon-database", label: "Amazon Database" },
    { href: "/databases/app-store-database", label: "App Store Database" },
    { href: "/databases/google-play-database", label: "Google Play Database" },
    { href: "/databases/whois-database", label: "Domains Database" },
    { href: "/databases/backlink-database", label: "Backlink Database" },
    { href: "/databases/business-listings-database", label: "Business Listings Database" }
];

export type ListRow3Data3Item = {
  href: string;
  label: string;
};
export const listRow3Data3: ListRow3Data3Item[] = [
    { href: "/solutions/api-driven-backlinksapp", label: "Backlink App" },
    { href: "/solutions/seo-agency", label: "SEO Agency" },
    { href: "/solutions/seo-software", label: "SEO Software" },
    { href: "/solutions/media", label: "Media" },
    { href: "/solutions/ecommerce-apis", label: "Ecommerce" },
    { href: "/solutions/market-research-apis", label: "Market Research" },
    { href: "/solutions/digital-marketing-apis", label: "Digital Marketing" },
    { href: "/solutions/marketing-tech-apis", label: "Marketing Tech" },
    { href: "/solutions/scraping-services", label: "Scraping Services" },
    { href: "/solutions/data-for-ai-training", label: "AI Development" }
];

export type ListRow3Data4Item = {
  href: string;
  label: string;
};
export const listRow3Data4: ListRow3Data4Item[] = [
    { href: "/blog", label: "Blog" },
    { href: "/templates/", label: "No-code Templates" },
    { href: "/whitepapers", label: "White Papers" },
    { href: "/help-center", label: "Help Center" },
    { href: "/updates", label: "Updates" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "https://academy.dataforseo.com/", label: "DataForSEO Academy" }
];

export type ListRow4DataItem = {
  href: string;
  label: string;
  target?: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { href: "/about-us", label: "About us" },
    { href: "/faq", label: "FAQ" },
    { href: "/bravery", label: "Ukrainian Bravery" },
    { href: "/serp-features", label: "SERP Features" },
    { href: "/top-1000-websites", label: "Top 1000 Sites" },
    { href: "/google-sheets-connector", label: "Google Sheets Connector" },
    { href: "/make-integration", label: "Make Integration" },
    { href: "https://trends.dataforseo.com/", target: "_blank", label: "DataForSEO Trends Tool" },
    { href: "/our-data", label: "Our data" },
    { href: "https://status.dataforseo.com/", target: "_blank", label: "Status Page" },
    { href: "https://chat.dataforseo.com/", target: "_blank", label: "DataForSEO AI Assistant" },
    { href: "/dataforseo-alternatives", label: "Alternatives" }
];

export type LogosItem = {
  alt: string;
  height?: string;
  href?: string;
  imgSrc: string;
  rel?: string;
  srcSet?: string;
  target?: string;
  tooltip?: string;
  width?: string;
};
export const logos: LogosItem[] = [
    { alt: "Visa", height: "34", imgSrc: "/assets/cloned/images/f75734581998.png", width: "56" },
    { alt: "MasterCard", height: "34", imgSrc: "/assets/cloned/images/756fe7e43c8a.png", width: "56" },
    { alt: "Paypal", height: "34", imgSrc: "/assets/cloned/images/2b7fd13ca7b0.png", width: "56" }
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
  "title": "Start your unlimited free trial",
  "actions": [
    {
      "label": "Sign up now",
      "href": "https://app.dataforseo.com/register"
    }
  ]
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
  "title": "Join DataForSEO No-Code Community on Discord!",
  "actions": [
    {
      "label": "Join Now",
      "href": "https://discord.gg/jHADM94qF"
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
  "title": "DataForSEO is ready when you are",
  "actions": [
    {
      "label": "Get started",
      "href": "https://app.dataforseo.com/register"
    }
  ]
};

