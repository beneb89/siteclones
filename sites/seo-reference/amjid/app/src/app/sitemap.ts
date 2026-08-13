import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/insights/microsoft-ads-mcp-server-build-and-use/",
    changeFrequency: "weekly",
    priority: 1,
  },
  ];
}
