// Semantic page content extracted from recognized recipe sections.

export type TileDataItem = {
  href: string;
  label: string;
};
export const tileData: TileDataItem[] = [
    { href: "/categories", label: "Categories" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/designers/search", label: "Find a designer" },
    { href: "/discover", label: "Inspiration" },
    { href: "/pro/studio", label: "Studio" }
];

export type Tile2DataItem = {
  href: string;
  label: string;
};
export const tile2Data: Tile2DataItem[] = [
    { href: "/inspiration/websites/analytics", label: "Analytics websites" },
    { href: "/inspiration/websites/real-estate", label: "Real estate websites" },
    { href: "/inspiration/websites/business", label: "Business websites" },
    { href: "/inspiration/websites/marketing", label: "Marketing websites" },
    { href: "/inspiration/websites/advertising", label: "Advertising websites" },
    { href: "/inspiration/websites/rental", label: "Rental websites" },
    { href: "/inspiration/websites/architecture", label: "Architecture websites" },
    { href: "/inspiration/websites/management", label: "Management websites" },
    { href: "/inspiration/websites/bootstrap", label: "Bootstrap websites" },
    { href: "/inspiration/websites/b2b", label: "B2B websites" },
    { href: "/inspiration/websites/corporate", label: "Corporate websites" },
    { href: "/inspiration/websites/digital-marketing", label: "Digital websites" },
    { href: "/inspiration/websites/development", label: "Development websites" },
    { href: "/inspiration/websites/dark", label: "Dark websites" },
    { href: "/inspiration/websites/clothing", label: "Clothing websites" },
    { href: "/inspiration/websites/school", label: "School websites" },
    { href: "/inspiration/websites/personal", label: "Personal websites" },
    { href: "/inspiration/websites/education", label: "Education websites" },
    { href: "/inspiration/websites/responsive", label: "Responsive websites" }
];

export type LogosItem = {
  [key: string]: unknown;
};
export const logos: LogosItem[] = [
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  }
];

export type ListRowDataItem = {
  href: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "/about", label: "About" },
    { href: "/about/contact", label: "Contact" },
    { href: "/about/press-releases", label: "Press releases" },
    { href: "/about/media", label: "In the media" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/nonprofits", label: "99nonprofits" }
];

export type ListRowData2Item = {
  href: string;
  label: string;
};
export const listRowData2: ListRowData2Item[] = [
    { href: "/contests", label: "Design contests" },
    { href: "/projects", label: "1-to-1 Projects" },
    { href: "/designers/search", label: "Find a designer" },
    { href: "/discover", label: "Discover inspiration" },
    { href: "/pricing", label: "Pricing" },
    { href: "/pro/studio", label: "99designs Studio" },
    { href: "/pro", label: "99designs Pro" }
];

export type ListRowData3Item = {
  href: string;
  label: string;
};
export const listRowData3: ListRowData3Item[] = [
    { href: "/logo-design", label: "Logo design" },
    { href: "/business-card-design", label: "Business card" },
    { href: "/web-design", label: "Web page design" },
    { href: "/brand-guide", label: "Brand guide" },
    { href: "/product-packaging-design", label: "Packaging design" },
    { href: "/t-shirt-design", label: "T-shirt design" },
    { href: "/book-cover-design", label: "Book cover design" },
    { href: "/categories", label: "Browse all categories" }
];

export type ListRowData4Item = {
  href: string;
  label: string;
};
export const listRowData4: ListRowData4Item[] = [
    { href: "/designers", label: "Become a designer" },
    { href: "/blog/", label: "Blog" },
    { href: "/design-without-borders", label: "Design without borders" },
    { href: "/best-design-awards", label: "99awards" },
    { href: "/affiliates", label: "Affiliates" },
    { href: "/inspiration/logos", label: "Logo ideas" },
    { href: "/inspiration/t-shirt-designs", label: "T-shirt ideas" },
    { href: "/designer-resource-center", label: "Designer resources" },
    { href: "/featured-partners", label: "Featured partners" },
    { href: "/help", label: "Help" }
];

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "/categories", label: "Browse categories" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/designers/search", label: "Find a designer" },
    { href: "/discover", label: "Inspiration" },
    { href: "/pro", label: "99designs Pro" }
];

export type ListRow3DataItem = {
  href: string;
  label: string;
};
export const listRow3Data: ListRow3DataItem[] = [
    { href: "/contests", label: "Design contests" },
    { href: "/projects", label: "1-to-1 Projects" },
    { href: "/designers/search", label: "Find a designer" },
    { href: "/discover", label: "Discover inspiration" },
    { href: "/pro/studio", label: "99designs Studio" },
    { href: "/pro", label: "99designs Pro" }
];

export type ListRow3Data2Item = {
  href: string;
  label: string;
};
export const listRow3Data2: ListRow3Data2Item[] = [
    { href: "/logo-design", label: "Logo design" },
    { href: "/business-card-design", label: "Business card" },
    { href: "/web-design", label: "Web page design" },
    { href: "/brand-guide", label: "Brand guide" },
    { href: "/categories", label: "Browse all categories" }
];

export type ListRow3Data3Item = {
  href: string;
  label: string;
};
export const listRow3Data3: ListRow3Data3Item[] = [
    { href: "/pricing", label: "Pricing" },
    { href: "/designers", label: "Become a designer" },
    { href: "/blog/", label: "Blog" }
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
  "actions": [
    {
      "label": "Learn more about web page design",
      "href": "/web-design"
    },
    {
      "label": "web page design customer reviews",
      "href": "/testimonials/web-design"
    }
  ]
};

