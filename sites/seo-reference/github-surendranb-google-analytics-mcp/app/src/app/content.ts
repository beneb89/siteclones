// Semantic page content extracted from recognized recipe sections.

export type TextLinkDataItem = {
  href: string;
  label: string;
};
export const textLinkData: TextLinkDataItem[] = [
    { href: "/topics/ai-agent", label: "ai-agent" },
    { href: "/topics/analytics", label: "analytics" },
    { href: "/topics/claude-mcp", label: "claude-mcp" },
    { href: "/topics/ga4", label: "ga4" },
    { href: "/topics/gemini-extension", label: "gemini-extension" },
    { href: "/topics/google-analytics", label: "google-analytics" },
    { href: "/topics/mcp-server", label: "mcp-server" },
    { href: "/topics/model-context-protocol", label: "model-context-protocol" }
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

