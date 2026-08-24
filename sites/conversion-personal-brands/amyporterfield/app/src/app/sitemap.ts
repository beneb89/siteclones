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
    url: SITE_ORIGIN + "/transcript",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/2026-master-your-year-terms-conditions",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/20nlp-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/about",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/all-reviews",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/all-show-notes",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/amy-porterfield-podcast",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/business-success-coach",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/business-success-coach-part-time",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/careers",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/contact",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/course-confident-2024-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/course-confident-2025-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/dca",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/digital-marketing-podcast",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/fast-funnel-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/growth-advisor",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/lbs-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/marketing-strategy-podcast",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/master-your-year-terms-conditions",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/mastermind-waitlist",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/momentum",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/mts-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/mts-terms-2",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/mylogin",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/newsletter",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/newsletter_archive",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/newsletter-archive-all",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/online-business-courses",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/online-business-programs",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/online-marketing-tools",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/podcast-test",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/porter-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/privacy",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/reset-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/reviews",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/side-hustle-ideas-guide-ap",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/sts-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/subscribed-2024-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/subscribed-2025-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/t1ho-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/tcc-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/terms-and-conditions",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/tmc-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/tmc-terms-3a",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/tmc-terms-3nm",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/tmc-terms-4",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/tmc-terms-5",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/tme-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/tobss-terms-conditions",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/tocs-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/torc-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/training",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/ultimate-guide-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/ydcc-terms",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/ap_show_categories/business-tips",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/blog-category/engagement-and-community",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: SITE_ORIGIN + "/blog/10-signs-its-time-to-create-your-9-to-5-exit-strategy",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  ];
}
