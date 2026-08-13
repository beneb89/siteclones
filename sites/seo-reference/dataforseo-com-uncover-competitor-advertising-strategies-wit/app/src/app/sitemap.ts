import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/blog/uncover-competitor-advertising-strategies-with-google-ads-transparency-and-apis",
    changeFrequency: "weekly",
    priority: 1,
  },
  ];
}
