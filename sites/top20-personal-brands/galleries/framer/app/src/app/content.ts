// Semantic page content extracted from recognized recipe sections.

export type LogosItem = {
  name: string;
  name2: string;
  description: string;
};
export const logos: LogosItem[] = [
    { name: "Platform", name2: "Platform", description: "Platform" },
    { name: "Solutions", name2: "Solutions", description: "Solutions" },
    { name: "Resources", name2: "Resources", description: "Resources" }
];

export type FeaturesItem = {
  href: string;
  alt: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  title: string;
  label: string;
};
export const features: FeaturesItem[] = [
    { href: "/blog/framer-creators-nandi-the-23yo-dropout-behind-framer-university/", alt: "Framer Creators: Nandi, the 23yo dropout behind Framer University — cover image", height: "2026", imgSrc: "/assets/cloned/images/01cef41e906b.png", srcSet: "/assets/cloned/images/c55965a20e4a.png 512w, /assets/cloned/images/b4b594945e13.png 1024w, /assets/cloned/images/803144c83796.png 2048w, /assets/cloned/images/01cef41e906b.png 3616w", width: "3616", title: "Framer Creators: Nandi, the 23yo dropout behind Framer University", label: "2 min read" },
    { href: "/blog/framer-creators-lee-black-from-print-to-best-framer-designer/", alt: "Framer Creators: Lee Black, from print to Best Framer Designer — cover image", height: "720", imgSrc: "/assets/cloned/images/7088b650a350.png", srcSet: "/assets/cloned/images/4ba89cfd64f4.png 512w, /assets/cloned/images/38a2d4e314d4.png 1024w, /assets/cloned/images/7088b650a350.png 1280w", width: "1280", title: "Framer Creators: Lee Black, from print to Best Framer Designer", label: "2 min read" },
    { href: "/blog/koen-jorn-framer-reloaded-first-of-kind/", alt: "Koen & Jorn: Framer Reloaded — First of Kind", height: "2034", imgSrc: "/assets/cloned/images/aadcae501a10.png", srcSet: "/assets/cloned/images/96eac019b4cf.png 512w, /assets/cloned/images/93939220a926.png 1024w, /assets/cloned/images/0db805fa6d79.png 2048w, /assets/cloned/images/aadcae501a10.png 3658w", width: "3658", title: "Koen & Jorn: Framer Reloaded — First of Kind", label: "1 min read" },
    { href: "/blog/why-designers-should-become-founders/", alt: "Jorn van Dijk on why designers should become founders — cover image", height: "3072", imgSrc: "/assets/cloned/images/6b04ac0b7eaa.png", srcSet: "/assets/cloned/images/bbd488f49d61.png 512w, /assets/cloned/images/0fbfeb3a19c2.png 1024w, /assets/cloned/images/89ba5fa1d5ed.png 2048w, /assets/cloned/images/b3b328aab5f9.png 4096w, /assets/cloned/images/6b04ac0b7eaa.png 5568w", width: "5568", title: "Jorn van Dijk on why designers should become founders", label: "5 min read" },
    { href: "/blog/restaurant-website-design-examples/", alt: "20 best restaurant website examples + design tips — cover image", height: "2160", imgSrc: "/assets/cloned/images/5966c46392b7.jpg", srcSet: "/assets/cloned/images/0b2f81edc43b.jpg 512w, /assets/cloned/images/075cfe7c9221.jpg 1024w, /assets/cloned/images/22aee845590d.jpg 2048w, /assets/cloned/images/5966c46392b7.jpg 3236w", width: "3236", title: "20 best restaurant website examples + design tips", label: "11 min read" },
    { href: "/blog/homepage-design-examples/", alt: "11 homepage design examples and best practices — cover image", height: "3240", imgSrc: "/assets/cloned/images/ff1c9360739d.jpg", srcSet: "/assets/cloned/images/36c96a479286.jpg 512w, /assets/cloned/images/f380fd911247.jpg 1024w, /assets/cloned/images/49158e0a4359.jpg 2048w, /assets/cloned/images/42f458b48f00.jpg 4096w, /assets/cloned/images/ff1c9360739d.jpg 4854w", width: "4854", title: "11 homepage design examples and best practices", label: "9 min read" }
];

export type ListRowDataItem = {
  href: string;
  description: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "/ai/", description: "AI" },
    { href: "/agents/", description: "Agents" },
    { href: "/agents/external/", description: "External Agents" }
];

export type ListRow2DataItem = {
  href: string;
  description: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "/cms/", description: "CMS" },
    { href: "/hosting/", description: "Hosting" },
    { href: "/performance/", description: "Performance" },
    { href: "/seo/", description: "SEO" },
    { href: "/convert/", description: "Convert" },
    { href: "/publish/", description: "Publish" }
];

export type ListRow4DataItem = {
  href: string;
  description: string;
};
export const listRow4Data: ListRow4DataItem[] = [
    { href: "/solutions/designers/", description: "Designers" },
    { href: "/solutions/agencies/", description: "Agencies" },
    { href: "/solutions/marketers/", description: "Marketers" }
];

export type ListRow2Data2Item = {
  href: string;
  description: string;
};
export const listRow2Data2: ListRow2Data2Item[] = [
    { href: "/solutions/portfolio-website/", description: "Portfolio maker" },
    { href: "/solutions/ui-ux-design/", description: "UI/UX design" },
    { href: "/solutions/no-code-website-builder/", description: "No-code" }
];

export type ListRow7DataItem = {
  description: string;
  href?: string;
};
export const listRow7Data: ListRow7DataItem[] = [
    { description: "Community" },
    { href: "/community/marketplace/", description: "Marketplace" },
    { href: "/community/marketplace/templates/", description: "Templates" },
    { href: "/community/marketplace/components/", description: "Components" },
    { href: "/community/marketplace/plugins/", description: "Plugins" },
    { href: "/community/marketplace/vectors/", description: "Vectors" },
    { href: "/community/feed/", description: "Feed" },
    { href: "/community/hype/", description: "Hype" },
    { href: "/community/gallery/", description: "Gallery" },
    { href: "/community/contests/", description: "Contests" },
    { href: "/community/members/", description: "Members" },
    { href: "/meetups/", description: "Meetups" },
    { href: "/updates/community/", description: "Updates" }
];

export type ListRow8DataItem = {
  description: string;
  href?: string;
  target?: string;
};
export const listRow8Data: ListRow8DataItem[] = [
    { description: "Tools" },
    { href: "/solutions/figma-to-html/", description: "Figma to HTML" },
    { href: "/aeo", description: "AEO scanner" },
    { href: "https://www.linkpreview.app/", target: "_blank", description: "Link previewer" },
    { href: "/domains/", description: "Free domains" },
    { href: "/canvasbench/", description: "CanvasBench" },
    { href: "/shortcuts", description: "Shortcuts" }
];

export type Tile2DataItem = {
  href: string;
  description: string;
};
export const tile2Data: Tile2DataItem[] = [
    { href: "/compare", description: "Overview" },
    { href: "/compare/framer-vs-webflow", description: "Webflow" },
    { href: "/compare/framer-vs-figma", description: "Figma" },
    { href: "/compare/framer-vs-wix", description: "Wix" },
    { href: "/compare/framer-vs-squarespace", description: "Squarespace" },
    { href: "/compare/framer-vs-wordpress", description: "WordPress" },
    { href: "/compare/framer-vs-readymag", description: "Readymag" },
    { href: "/compare/framer-vs-ceros", description: "Ceros" },
    { href: "/compare/framer-vs-unbounce", description: "Unbounce" },
    { href: "/compare/framer-vs-lovable", description: "Lovable" },
    { href: "/compare/framer-vs-claude-code", description: "Claude Code" },
    { href: "/compare/framer-vs-chatgpt", description: "ChatGPT" },
    { href: "/compare/framer-vs-codex", description: "Codex" },
    { href: "/compare/framer-vs-contentful", description: "Contentful" },
    { href: "/compare/framer-vs-sanity", description: "Sanity" },
    { href: "/compare/framer-vs-adobe-experience-manager", description: "AEM" },
    { href: "/compare/framer-vs-replit", description: "Replit" }
];

export type Tile3DataItem = {
  href: string;
  description: string;
};
export const tile3Data: Tile3DataItem[] = [
    { href: "/compare", description: "Overview" },
    { href: "/compare/framer-vs-webflow", description: "Webflow" },
    { href: "/compare/framer-vs-figma", description: "Figma" },
    { href: "/compare/framer-vs-wix", description: "Wix" },
    { href: "/compare/framer-vs-squarespace", description: "Squarespace" },
    { href: "/compare/framer-vs-wordpress", description: "WordPress" },
    { href: "/compare/framer-vs-readymag", description: "Readymag" },
    { href: "/compare/framer-vs-ceros", description: "Ceros" },
    { href: "/compare/framer-vs-unbounce", description: "Unbounce" },
    { href: "/compare/framer-vs-lovable", description: "Lovable" },
    { href: "/compare/framer-vs-claude-code", description: "Claude Code" },
    { href: "/compare/framer-vs-chatgpt", description: "ChatGPT" },
    { href: "/compare/framer-vs-codex", description: "Codex" },
    { href: "/compare/framer-vs-contentful", description: "Contentful" },
    { href: "/compare/framer-vs-sanity", description: "Sanity" },
    { href: "/compare/framer-vs-adobe-experience-manager", description: "AEM" },
    { href: "/compare/framer-vs-replit", description: "Replit" }
];

export type ListRow10DataItem = {
  href: string;
  description: string;
  target?: string;
};
export const listRow10Data: ListRow10DataItem[] = [
    { href: "/aeo", description: "AEO scanner" },
    { href: "https://www.linkpreview.app/", target: "_blank", description: "Meta Tags" },
    { href: "/domains/", description: "Free domains" },
    { href: "/canvasbench/", description: "CanvasBench" },
    { href: "/shortcuts", description: "Shortcuts" }
];

export type Tile4DataItem = {
  description: string;
  href?: string;
};
export const tile4Data: Tile4DataItem[] = [
    { description: "Business" },
    { href: "/pricing", description: "Pricing" },
    { href: "/enterprise/", description: "Enterprise" },
    { href: "/startups/", description: "Startups" },
    { href: "/agencies/", description: "Agencies" },
    { href: "/switch/", description: "Switch" }
];

export type Tile4Data2Item = {
  description: string;
  href?: string;
};
export const tile4Data2: Tile4Data2Item[] = [
    { description: "Company" },
    { href: "/careers/", description: "Careers" },
    { href: "/brand", description: "Brand" },
    { href: "/store", description: "Store" },
    { href: "/legal/security", description: "Security" },
    { href: "mailto:abuse@framer.com", description: "Abuse" },
    { href: "/legal/community-terms", description: "Legal" },
    { href: "https://app.eu.vanta.com/framer.com/trust/ow67ujg7iav0t6qtd1o6r2", description: "Trust" }
];

