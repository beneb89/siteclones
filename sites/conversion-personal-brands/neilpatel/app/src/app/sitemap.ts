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
    url: SITE_ORIGIN + "/blog",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/br",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/de",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/es",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/fr",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/it",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/marketing-stats",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/nl",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/training",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/ab-testing-calculator",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/ai-seo-meta-tags",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/ai-social",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/ai-writer",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/backlinks",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/cn",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/consulting",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/contact",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/copyright",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/digital-marketing",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/do-not-track",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/how-to-start-a-blog",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/jp",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/paid-ads",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/privacy",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/privacy-notice-us-addendum",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/privacy-policy",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/seo-analyzer",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/ubersuggest",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/website-traffic-checker",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/what-is-conversion-optimization",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/what-is-facebook-advertising",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/what-is-google-adwords",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/what-is-online-marketing",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/what-is-social-media-marketing",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/blog/ab-testing-introduction",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/br/backlinks",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/de/backlinks",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/es/backlinks",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/fr/backlinks",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/it/backlink",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/marketing-stats/ab-testing-funnel-stage-gains",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/training/content-marketing-unlocked",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/cn/backlinks",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/cn/ubersuggest",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/jp/backlinks",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/jp/ubersuggest",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/nl/advies",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/nl/backlinks",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/nl/ubersuggest",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/blog/author/brittany-werdowatz",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/marketing-stats/category/ad-spend-budgets",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  ];
}
