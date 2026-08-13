import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/",
    changeFrequency: "weekly",
    priority: 1,
  },
  ];
}
