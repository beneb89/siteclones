// Semantic page content extracted from recognized recipe sections.

export type FeaturesItem = {
  href: string;
  alt: string;
  imgSrc: string;
  srcSet: string;
  description: string;
  href2: string;
  title: string;
};
export const features: FeaturesItem[] = [
    { href: "/blog/five-pillars-ai-native-marketing/", alt: "AI Native mktng blog hero", imgSrc: "/assets/cloned/images/bb7669cac365.png", srcSet: "/assets/cloned/images/0e6cd4917092.png 3840w, /assets/cloned/images/7345f3341b61.png, /assets/cloned/images/5ce17a2b253d.png, /assets/cloned/images/742163c21b09.png, /assets/cloned/images/6f6cdb48246f.png, /assets/cloned/images/64926391524e.png, /assets/cloned/images/b0096101a432.png", description: "– 17 min read", href2: "/blog/five-pillars-ai-native-marketing/", title: "The five pillars of AI-native marketing: Why focusing on productivity alone isn’t enough" },
    { href: "/blog/agentic-ai-marketing/", alt: "Agentic AI for marketing teams: Use cases from content generation to campaign orchestration", imgSrc: "/assets/cloned/images/5e6df07dbf8c.png", srcSet: "/assets/cloned/images/f2dd1adf1870.png 1920w, /assets/cloned/images/33cad9da2767.png, /assets/cloned/images/b35213ea72be.png, /assets/cloned/images/52176d4a7b79.png, /assets/cloned/images/243a124e5c67.png, /assets/cloned/images/a4df372f9e3b.png", description: "– 22 min read", href2: "/blog/agentic-ai-marketing/", title: "Agentic AI for marketing teams: Use cases from content generation to campaign orchestration" },
    { href: "/blog/ai-native-marketing-platform/", alt: "", imgSrc: "/assets/cloned/images/4cb1fdf7a15a.png", srcSet: "/assets/cloned/images/ad6059550545.png 3840w, /assets/cloned/images/314707bcca1b.png, /assets/cloned/images/d4679869dbe8.png, /assets/cloned/images/7882887ec26e.png, /assets/cloned/images/5f9d90fb8b1c.png, /assets/cloned/images/81de126fd87d.png, /assets/cloned/images/28f03248f590.png", description: "– 17 min read", href2: "/blog/ai-native-marketing-platform/", title: "How to build an AI-native marketing engine: The platform capabilities that make it possible" }
];

export type LogosItem = {
  href: string;
  alt: string;
  imgSrc: string;
};
export const logos: LogosItem[] = [
    { href: "https://www.linkedin.com/company/getwriter", alt: "LinkedIn", imgSrc: "/assets/cloned/svg/a211688bd394.svg" },
    { href: "https://x.com/get_writer", alt: "X", imgSrc: "/assets/cloned/svg/ef9548373f17.svg" },
    { href: "https://www.g2.com/products/writer/reviews", alt: "G2", imgSrc: "/assets/cloned/svg/8ba3747d4048.svg" }
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
  "title": "Delivered to your inbox.",
  "actions": [
    {
      "label": "Privacy Policy",
      "href": "/legal/privacy/"
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
  "actions": [
    {
      "label": "Product",
      "href": "#"
    },
    {
      "label": "Resources",
      "href": "#"
    },
    {
      "label": "Company",
      "href": "#"
    },
    {
      "label": "Support",
      "href": "#"
    },
    {
      "label": "Terms",
      "href": "/legal/terms-of-use/"
    },
    {
      "label": "Privacy",
      "href": "/legal/privacy/"
    }
  ]
};

