import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/update/introducing-google-ads-search-and-advertisers-in-serp-api",
    changeFrequency: "weekly",
    priority: 1,
  },
  ];
}
