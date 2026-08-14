import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "/koeln",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: SITE_ORIGIN + "/koeln/hauptnavigation/ausbildung",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/koeln/hauptnavigation/beratung-und-services/newsletter-anmeldung",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/koeln/hauptnavigation/ausbildung/finde-deine-ausbildung/last-minute-boerse-rennbahn-2026-7123174",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/koeln/hauptnavigation/beratung-und-services/digitale-services/digitale-services-a-bis-z",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/koeln/hauptnavigation/news/video-podcast-stimme-der-wirtschaft/stimme-der-wirtschaft-30-rudolf-scharping-7124020",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/koeln/hauptnavigation/news/video-podcast-stimme-der-wirtschaft/stimme-der-wirtschaft-31-andreas-kunsmann-7136288",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/koeln/hauptnavigation/umwelt-energie-nachhaltigkeit/energie/versorgungssicherheit-in-nrw-6085918",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/koeln/hauptnavigation/umwelt-energie-nachhaltigkeit/umwelt/ppwr-7128494",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/koeln/system/veranstaltungssuche/suche-mixed/6217126",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/blueprint/servlet/serviceport/layernavigation/v2/4928712",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/koeln/system/veranstaltungssuche/vstdetail-tibros/5821864/1007",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  ];
}
