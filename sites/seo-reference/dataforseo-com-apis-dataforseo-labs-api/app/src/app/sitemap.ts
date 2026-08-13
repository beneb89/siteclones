import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/apis/dataforseo-labs-api",
    changeFrequency: "weekly",
    priority: 1,
  },
  ];
}
