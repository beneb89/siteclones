import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: SITE_ORIGIN + "/hub",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/insights",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/podcast",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/anmelden",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/collective",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/datenschutz",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/enablement",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/impressum",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/kontakt",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/referenzen",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/school",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/hub/ab-testing-ideen",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/insights/12-neuerungen-von-openai",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/podcast/13-jahre-in-der-daten-und-ki-welt-was-funktioniert-wirklich",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  ];
}
