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
    url: SITE_ORIGIN + "/274-we-have-a-newborn-and-89-of-our-income-is-already-spent-now-what",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/best-sales-pages",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/blog",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/books",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/budget-help",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/calculators",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/conscious-spending-basics",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/contact-us",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/credit-cards-to-rebuild-credit",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/debt-payoff-calculator",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/disclosure-terms-and-conditions",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/events",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/get-earnable",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/getting-traffic-for-your-blog",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/how-much-do-influencers-make",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/how-to-get-rich",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/i-will-teach-you-to-be-rich-second-edition",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/i-will-teach-you-to-be-rich-the-journal",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/income-producing-assets",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/investment-calculator",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/iwt-about-us",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/jobs-that-make-a-lot-of-money",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/money-for-couples",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/netflix",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/podcast",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/programs-page",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/retirement-calculator",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/review-of-the-4-hour-workweek",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/rich-life-quiz",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/rich-life-road-to-100k",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/sponsors",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/category/blog",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  ];
}
