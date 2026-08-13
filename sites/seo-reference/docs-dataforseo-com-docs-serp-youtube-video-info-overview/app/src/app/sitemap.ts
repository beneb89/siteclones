import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/v3/serp-youtube-video_info-overview/",
    changeFrequency: "weekly",
    priority: 1,
  },
  ];
}
