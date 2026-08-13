import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/v3/ai_optimization-llm_mentions-aggregated_metrics-live/",
    changeFrequency: "weekly",
    priority: 1,
  },
  ];
}
