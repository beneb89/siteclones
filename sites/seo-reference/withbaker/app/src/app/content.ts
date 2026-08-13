// Semantic page content extracted from recognized recipe sections.

export type TextLinkDataItem = {
  href: string;
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { href: "/careers", label: "Careers" },
    { href: "https://app.withbaker.com/sign-in", label: "Login" },
    { href: "#contact", label: "Secure the Partnership" }
];

export type FeatureCardDataItem = {
  href: string;
  dateTime: string;
  date: string;
  title: string;
  description: string;
};
export const featureCardData: FeatureCardDataItem[] = [
    { href: "/blog/meta-ads-audit-checklist-2026", dateTime: "2026-04-30T00:00:00.000Z", date: "April 30, 2026", title: "How to Audit a Meta Ads Account: The Complete Agency Checklist (2026)", description: "Baker's 8-Layer Meta Ads Audit Framework: pixel health, campaign architecture, creative scoring, frequency, audience overlap, funnel, and growth tiers." },
    { href: "/blog/meta-conversions-api-capi-lead-gen-setup", dateTime: "2026-04-16T00:00:00.000Z", date: "April 16, 2026", title: "Meta Conversions API (CAPI) for Lead Gen: Complete Setup and First-Click Attribution Guide", description: "Meta CAPI fixes 56% wrong pixel data. Baker's First-Click CAPI Blueprint covers edge tagging, custom events, and the beauty case: ENCAC $26 to $6.73." },
    { href: "/blog/meta-ads-andromeda-algorithm-2026", dateTime: "2026-04-14T00:00:00.000Z", date: "April 14, 2026", title: "Meta Ads Andromeda Algorithm Explained: How It Changes Your Campaign Strategy in 2026", description: "Meta's Andromeda processes 10,000x more signals per ad. Baker's Andromeda Adaptation Framework covers GEM, Lattice, creative diversity, and targeting." }
];

export type NavLinkDataItem = {
  href: string;
  label: string;
};
export const navLinkData: NavLinkDataItem[] = [
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/press", label: "Press" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/delete-data", label: "Delete Data" },
    { href: "/legal-notice", label: "Legal Notice" }
];

