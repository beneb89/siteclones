import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/blog/connect-ga4-search-console-claude-mcp-build-2026",
    changeFrequency: "weekly",
    priority: 1,
  },
  ];
}
