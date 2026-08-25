import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/1-view-can-change-everything",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/10-mental-shifts-for-success-in-business",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/10-ways-to-get-more-followers-on-instagram-how-to-guide",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/10-ways-to-protect-yourself-from-scams",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/11-new-garyvee-instagram-ar-filters",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/11-things-young-people-need-to-know",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/13-thoughts-on-being-an-entrepreneur",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/14-awesome-vayniacs-who-put-family-first",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/19-people-you-should-be-following-on-twitter-but-arent-pt-1-of-2",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/19-people-you-should-be-following-on-twitter-but-arent-pt-2-of-2",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/2015-has-been-huge-so-far",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/2017-key-small-business-social-media-marketing",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/2018-wine-library-super-tasting",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "https://www.garyvaynerchuk.com/2020-fundraising-strategies-for-nonprofits",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  ];
}
