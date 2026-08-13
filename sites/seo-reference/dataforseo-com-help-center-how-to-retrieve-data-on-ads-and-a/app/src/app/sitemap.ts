import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/help-center/how-to-retrieve-data-on-ads-and-advertisers-from-google-ads",
    changeFrequency: "weekly",
    priority: 1,
  },
  ];
}
