import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/google-ads/api/docs/access-levels",
    changeFrequency: "weekly",
    priority: 1,
  },
  ];
}
