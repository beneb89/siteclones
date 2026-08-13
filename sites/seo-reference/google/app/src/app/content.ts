// Semantic page content extracted from recognized recipe sections.

export type TileDataItem = {
  href: string;
  label: string;
  ariaLabel?: string;
};
export const tileData: TileDataItem[] = [
    { href: "/google-ads/api", label: "Guides" },
    { href: "/google-ads/api/docs/upgrade", label: "Reference" },
    { href: "/google-ads/api/docs/client-libs", label: "Libraries and samples" },
    { href: "/google-ads/api/docs/api-policy/developer-token", ariaLabel: "Policies, selected", label: "Policies" },
    { href: "/google-ads/api/support", label: "Support" }
];

export type ListRowDataItem = {
  href: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "/google-ads/api/docs/api-policy/rate-sheet", label: "Rate sheet" },
    { href: "/google-ads/api/docs/api-policy/rmf", label: "Required Minimum Functionality" },
    { href: "/google-ads/api/docs/api-policy/non-compliance-fee", label: "Non-compliance fees" },
    { href: "/google-ads/api/docs/api-policy/terms", label: "Terms & conditions" },
    { href: "/google-ads/api/docs/api-policy/eu-par", label: "Support for European Union Political Ads Regulation" }
];

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "/products", label: "Products" },
    { href: "/google-ads/api", label: "Google Ads API" },
    { href: "/google-ads/api/docs/api-policy/developer-token", label: "Policies" }
];

export type CardsItem = {
  href: string;
  alt: string;
  imgSrc: string;
  text: string;
  title: string;
};
export const cards: CardsItem[] = [
    { href: "https://ads-developers.googleblog.com/search/label/google_ads_api", alt: "Blog", imgSrc: "/assets/cloned/images/2dc3d4828e2a.png", text: "Visit our blog for important announcements.", title: "Blog" },
    { href: "/google-ads/api/docs/client-libs", alt: "Client Libraries", imgSrc: "/assets/cloned/svg/29a575d9bf6b.svg", text: "Use our officially supported client libraries.", title: "Client Libraries" },
    { href: "https://www.youtube.com/c/GoogleAdsDevelopers/featured", alt: "YouTube", imgSrc: "/assets/cloned/svg/851904921e26.svg", text: "Access our video contents.", title: "YouTube" },
    { href: "https://goo.gle/google-ads-discord", alt: "Discord", imgSrc: "/assets/cloned/svg/8c817846d44e.svg", text: "Join the Google Ads Discord server.", title: "Discord" }
];

export type ListRow3DataItem = {
  href: string;
  label: string;
};
export const listRow3Data: ListRow3DataItem[] = [
    { href: "https://developer.android.com/", label: "Android" },
    { href: "https://developer.chrome.com/home", label: "Chrome" },
    { href: "https://firebase.google.com/", label: "Firebase" },
    { href: "https://cloud.google.com/", label: "Google Cloud Platform" },
    { href: "https://ai.google.dev/", label: "Google AI" },
    { href: "/products", label: "All products" }
];

