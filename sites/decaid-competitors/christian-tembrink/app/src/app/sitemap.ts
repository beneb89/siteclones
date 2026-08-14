import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "https://christian-tembrink.com/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: SITE_ORIGIN + "https://christian-tembrink.com/impressum",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://christian-tembrink.com/ki-workshop",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://christian-tembrink.com/kontakt-",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://christian-tembrink.com/referenzen",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://christian-tembrink.com/ki-workshop/ki-fur-den-arbeitsalltag",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://christian-tembrink.com/ki-workshop/ki-prompt-workshop-fuer-unternehmen",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://christian-tembrink.com/-_-/res/2eff7021-b41e-4941-b3a0-098a98704384/images/files/2eff7021-b41e-4941-b3a0-098a98704384/163bd2fc-3d99-438d-9424-828648eb858e/908-304/9f371eca5c64484a76a58b9373b0535b299216be",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  ];
}
