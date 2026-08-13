// Semantic page content extracted from recognized recipe sections.

export type TextLinkDataItem = {
  href: string;
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { href: "/topics/claude", label: "claude" },
    { href: "/topics/google-search-console", label: "google-search-console" },
    { href: "/topics/mcp-server", label: "mcp-server" },
    { href: "/topics/seo", label: "seo" }
];

export type LogosItem = {
  href: string;
  alt: string;
  imgSrc: string;
};
export const logos: LogosItem[] = [
    { href: "/AminForou", alt: "@AminForou", imgSrc: "/assets/cloned/images/c0ec8dbabf75.png" },
    { href: "/cursoragent", alt: "@cursoragent", imgSrc: "/assets/cloned/images/13f2e3593ce8.png" },
    { href: "/zizzfizzix", alt: "@zizzfizzix", imgSrc: "/assets/cloned/images/43d2d348ed7b.jpg" },
    { href: "/claude", alt: "@claude", imgSrc: "/assets/cloned/images/a61e04641073.png" },
    { href: "/fterenzani", alt: "@fterenzani", imgSrc: "/assets/cloned/images/b3c198dbf748.jpg" },
    { href: "/bezlant", alt: "@bezlant", imgSrc: "/assets/cloned/images/f3528819d864.jpg" }
];

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
    { href: "https://docs.github.com/site-policy/github-terms/github-terms-of-service", label: "Terms" },
    { href: "https://docs.github.com/site-policy/privacy-policies/github-privacy-statement", label: "Privacy" },
    { href: "/security", label: "Security" },
    { href: "https://www.githubstatus.com/", label: "Status" },
    { href: "https://github.community/", label: "Community" },
    { href: "https://docs.github.com/", label: "Docs" },
    { href: "https://support.github.com/?tags=dotcom-footer", label: "Contact" }
];

