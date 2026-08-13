// Semantic page content extracted from recognized recipe sections.

export type CardsItem = {
  variant: string;
  eyebrow: string;
  title: string;
  id: string;
  text: string;
  description?: string;
};
export const cards: CardsItem[] = [
    { variant: "track-and-analyze-competitor-advertising-2", eyebrow: "Spyder", title: "Track and analyze competitor advertising 24/7", id: "w-node-c8c18c55-fdeb-d4c6-6b4c-990677db8eec-77db8ed6", text: "Research" },
    { variant: "advertising-analytics-for-creative-teams", eyebrow: "Lens", title: "Advertising analytics for creative teams.", description: "Turn inspiration into actionable briefs.", id: "w-node-c8c18c55-fdeb-d4c6-6b4c-990677db8f12-77db8ed6", text: "Analytics & Production" },
    { variant: "chrome-extension", eyebrow: "Extend", title: "Chrome Extension", id: "w-node-c8c18c55-fdeb-d4c6-6b4c-990677db8f2d-77db8ed6", text: "Extend" }
];

export type Cards2Item = {
  variant: string;
  eyebrow?: string;
  title: string;
  description?: string;
  label?: string;
};
export const cards2: Cards2Item[] = [
    { variant: "events-webinars", eyebrow: "Ad masterclasses", title: "Events & Webinars", description: "Marketing news & tips" },
    { variant: "merch", title: "Merch", label: "Shop workwear for marketers" },
    { variant: "make-over-10k-mo-reffering-foreplay", eyebrow: "Affiliate Program", title: "Make over $10k/mo reffering Foreplay", description: "Get world-class creative services." }
];

export type ListRowDataItem = {
  ariaLabel: string;
  href: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { ariaLabel: "Go to section “What is the Google Ads Transparency Center?”", href: "#what-is-the-google-ads-transparency-center", label: "What is the Google Ads Transparency Center?" },
    { ariaLabel: "Go to section “How Marketers Leverage Google Ads Transparency Center”", href: "#how-marketers-leverage-google-ads-transparency-center", label: "How Marketers Leverage Google Ads Transparency Center" },
    { ariaLabel: "Go to section “Step-by-Step Guide to Using Google Ads Library”", href: "#step-by-step-guide-to-using-google-ads-library", label: "Step-by-Step Guide to Using Google Ads Library" },
    { ariaLabel: "Go to section “Common Problems & Questions”", href: "#common-problems-questions", label: "Common Problems & Questions" },
    { ariaLabel: "Go to section “Other Ad Libraries you need to know about”", href: "#other-ad-libraries-you-need-to-know-about", label: "Other Ad Libraries you need to know about" }
];

export type LogosItem = {
  href: string;
  label: string;
  label2: string;
};
export const logos: LogosItem[] = [
    { href: "/swipe-file", label: "Organize Ad Inspo", label2: "SwipeFile" },
    { href: "/discovery", label: "Browse +100M Ads", label2: "Discovery" },
    { href: "/spyder-ad-spy", label: "Track Competitors", label2: "Spyder" }
];

export type ListRow4DataItem = {
  href: string;
  label: string;
  target?: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { href: "/swipe-file", label: "Swipe File" },
    { href: "/discovery", label: "Discovery" },
    { href: "/spyder-ad-spy", label: "Spyder" },
    { href: "/lens-creative-analytics", label: "Lens" },
    { href: "/briefs", label: "Briefs" },
    { href: "https://chromewebstore.google.com/detail/ad-library-save-facebook/eaancnanphggbfliooildilcnjocggjm", target: "_blank", label: "Chrome Extension" },
    { href: "/mobile-app", label: "Mobile App" },
    { href: "/api", label: "API" },
    { href: "/mcp", label: "MCP" }
];

export type ListRow5DataItem = {
  href: string;
  label: string;
  target?: string;
};
export const listRow5Data: ListRow5DataItem[] = [
    { href: "/university", label: "University" },
    { href: "https://help.foreplay.co/", target: "_blank", label: "Knowledge Base" },
    { href: "https://public.api.foreplay.co/docs", target: "_blank", label: "API Docs" },
    { href: "/blog", label: "Blog" },
    { href: "/bounties", label: "Bounties" },
    { href: "/fireside", label: "Events & Webinars" },
    { href: "/agency-directory", label: "Agency Directory" },
    { href: "/experts", label: "Experts" }
];

export type ListRow6DataItem = {
  href: string;
  label: string;
};
export const listRow6Data: ListRow6DataItem[] = [
    { href: "/industries/ecommerce", label: "E-Commerce & Retail" },
    { href: "/industries/agencies", label: "Agencies" },
    { href: "/industries/mobile-apps", label: "Mobile Apps & Gaming" },
    { href: "/industries/b2b-saas", label: "B2B & SaaS" },
    { href: "/industries/info-education-community", label: "Info, Education & Community" },
    { href: "/industries/freelancers-creators", label: "Freelancers & Creators" }
];

export type ListRow7DataItem = {
  href: string;
  label: string;
};
export const listRow7Data: ListRow7DataItem[] = [
    { href: "/pricing", label: "Pricing" },
    { href: "/book-demo", label: "Book a Demo" },
    { href: "/careers", label: "Careers" },
    { href: "/adlibrary", label: "Public Library" }
];

export type ListRow4Data2Item = {
  href: string;
  label: string;
  target?: string;
};
export const listRow4Data2: ListRow4Data2Item[] = [
    { href: "/affiliates", label: "Affiliate Program" },
    { href: "/reviews", label: "Wall of Love" },
    { href: "https://feedback.foreplay.co/", target: "_blank", label: "Feature Requests" },
    { href: "https://feedback.foreplay.co/roadmap", target: "_blank", label: "Public Road Map" },
    { href: "https://shop.foreplay.co/", target: "_blank", label: "Merch Store" }
];

