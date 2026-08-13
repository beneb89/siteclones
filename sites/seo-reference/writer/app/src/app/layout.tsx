import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "GEO, AEO, and SEO in 2026: The enterprise guide to AI visibility - WRITER",
  "description": "GEO, AEO, and SEO in 2026: Learn how to build AI visibility with share of model, first-party buyer data, and on-brand, compliant content with WRITER.",
  "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "/blog/geo-aeo-optimization/"
  },
  "openGraph": {
    "title": "GEO, AEO, and SEO in 2026: The enterprise guide to AI visibility",
    "description": "GEO, AEO, and SEO in 2026: Learn how to build AI visibility with share of model, first-party buyer data, and on-brand, compliant content with WRITER.",
    "type": "article",
    "siteName": "WRITER",
    "url": "/blog/geo-aeo-optimization/",
    "images": [
      "https://writer.com/wp-content/uploads/2026/07/2026-07-GEO-AEO-and-SEO-in-2028-1.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "site": "@Get_Writer",
    "creator": "@Get_Writer"
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/a42d19ae878e.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/164725c789f8.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/8828567dcb56.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en-US"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"Article\",\"@id\":\"", "\\/blog\\/geo-aeo-optimization\\/#article\",\"isPartOf\":{\"@id\":\"", "\\/blog\\/geo-aeo-optimization\\/\"},\"author\":{\"name\":\"Alaura Weaver\",\"@id\":\"", "\\/#\\/schema\\/person\\/6843783ee67cfea9b0fd618d37e9b422\"},\"headline\":\"GEO, AEO, and SEO in 2026: The enterprise guide to AI visibility\",\"datePublished\":\"2026-07-28T06:44:16+00:00\",\"dateModified\":\"2026-07-28T06:44:18+00:00\",\"mainEntityOfPage\":{\"@id\":\"", "\\/blog\\/geo-aeo-optimization\\/\"},\"wordCount\":6958,\"publisher\":{\"@id\":\"", "\\/#organization\"},\"image\":{\"@id\":\"", "\\/blog\\/geo-aeo-optimization\\/#primaryimage\"},\"thumbnailUrl\":\"", "\\/wp-content\\/uploads\\/2026\\/07\\/2026-07-GEO-AEO-and-SEO-in-2026-1.png\",\"articleSection\":[\"Enterprise transformation\"],\"inLanguage\":\"en-US\"},{\"@type\":\"WebPage\",\"@id\":\"", "\\/blog\\/geo-aeo-optimization\\/\",\"url\":\"", "\\/blog\\/geo-aeo-optimization\\/\",\"name\":\"GEO, AEO, and SEO in 2026: The enterprise guide to AI visibility - WRITER\",\"isPartOf\":{\"@id\":\"", "\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"", "\\/blog\\/geo-aeo-optimization\\/#primaryimage\"},\"image\":{\"@id\":\"", "\\/blog\\/geo-aeo-optimization\\/#primaryimage\"},\"thumbnailUrl\":\"", "\\/wp-content\\/uploads\\/2026\\/07\\/2026-07-GEO-AEO-and-SEO-in-2026-1.png\",\"datePublished\":\"2026-07-28T06:44:16+00:00\",\"dateModified\":\"2026-07-28T06:44:18+00:00\",\"description\":\"GEO, AEO, and SEO in 2026: Learn how to build AI visibility with share of model, first-party buyer data, and on-brand, compliant content with WRITER.\",\"breadcrumb\":{\"@id\":\"", "\\/blog\\/geo-aeo-optimization\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"", "\\/blog\\/geo-aeo-optimization\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"", "\\/blog\\/geo-aeo-optimization\\/#primaryimage\",\"url\":\"", "\\/wp-content\\/uploads\\/2026\\/07\\/2026-07-GEO-AEO-and-SEO-in-2026-1.png\",\"contentUrl\":\"", "\\/wp-content\\/uploads\\/2026\\/07\\/2026-07-GEO-AEO-and-SEO-in-2026-1.png\",\"width\":3840,\"height\":2160},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "\\/blog\\/geo-aeo-optimization\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"WRITER\",\"item\":\"", "\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"GEO, AEO, and SEO in 2026: The enterprise guide to AI visibility\"}]},{\"@type\":\"WebSite\",\"@id\":\"", "\\/#website\",\"url\":\"", "\\/\",\"name\":\"WRITER\",\"description\":\"The enterprise AI platform for agentic work\",\"publisher\":{\"@id\":\"", "\\/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"", "\\/#organization\",\"name\":\"WRITER\",\"url\":\"", "\\/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"", "\\/#\\/schema\\/logo\\/image\\/\",\"url\":\"", "\\/wp-content\\/uploads\\/2023\\/08\\/writer.png\",\"contentUrl\":\"", "\\/wp-content\\/uploads\\/2023\\/08\\/writer.png\",\"width\":720,\"height\":720,\"caption\":\"WRITER\"},\"image\":{\"@id\":\"", "\\/#\\/schema\\/logo\\/image\\/\"},\"sameAs\":[\"https:\\/\\/x.com\\/Get_Writer\",\"https:\\/\\/www.linkedin.com\\/company\\/getwriter\",\"https:\\/\\/www.youtube.com\\/channel\\/UC281-zvPEcDSUJecVImA-KA\",\"https:\\/\\/en.wikipedia.org\\/wiki\\/Writer_Inc.\"],\"description\":\"WRITER is where the world’s leading enterprises orchestrate AI-powered work. With WRITER’s end-to-end platform, teams can build, activate, and supervise AI agents that are grounded in their company’s data and fueled by WRITER’s enterprise-grade LLMs. From faster product launches to deeper financial research to better clinical trials, companies are quickly transforming their most important business processes for the AI era in partnership with WRITER.\",\"email\":\"hello@writer.com\",\"telephone\":\"+1 (415) 275-1883\",\"legalName\":\"Writer, Inc.\",\"numberOfEmployees\":{\"@type\":\"QuantitativeValue\",\"minValue\":\"201\",\"maxValue\":\"500\"}},{\"@type\":\"Person\",\"@id\":\"", "\\/#\\/schema\\/person\\/6843783ee67cfea9b0fd618d37e9b422\",\"name\":\"Alaura Weaver\",\"image\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/3569390f6d466e9db3ecbd32ac857470514a10b49e364d5f05a8309b044af35b?s=96&d=mm&r=g\",\"url\":\"", "\\/wp-content\\/uploads\\/2023\\/01\\/alaura-weaver.jpeg\",\"contentUrl\":\"", "\\/wp-content\\/uploads\\/2023\\/01\\/alaura-weaver.jpeg\",\"caption\":\"Alaura Weaver\"}}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [\n        {\n      \"@type\": \"Question\",\n      \"name\": \"What is GEO (generative engine optimization)?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Generative Engine Optimization (GEO) is the practice of structuring your content and brand presence so AI systems like ChatGPT, Perplexity, and Claude cite and recommend you in their answers. Unlike SEO, which optimizes for search rankings, GEO optimizes for citations and recommendations in AI-generated responses.\"      }\n    },        {\n      \"@type\": \"Question\",\n      \"name\": \"What is AEO (answer engine optimization)?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Answer Engine Optimization (AEO) focuses on becoming the source for direct answers in featured snippets, knowledge panels, and AI Overviews. It's about structuring content so it can be easily extracted and presented without requiring users to click through to your site.\"      }\n    },        {\n      \"@type\": \"Question\",\n      \"name\": \"How is GEO different from SEO?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"SEO optimizes for search rankings and clicks on search engine results pages. GEO optimizes for citations and recommendations in AI-generated answers. The biggest difference: SEO was primarily a first-party game (your website), while GEO is primarily a third-party game (your reputation across the ecosystem). Roughly 85% of AI references come from third-party platforms, not brand-owned sites.\"      }\n    },        {\n      \"@type\": \"Question\",\n      \"name\": \"What is share of model?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Share of model measures how often your brand appears in AI-generated answers compared to competitors. It's the AI-era successor to share of voice. Unlike paid share of voice, share of model is earned \\u2014 you can't buy your way into a ChatGPT recommendation.\"      }\n    },        {\n      \"@type\": \"Question\",\n      \"name\": \"How do you measure AI visibility?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Track five metrics: AI recommendation rate (are you named when buyers ask about your category?), share of model (your mention share versus competitors), branded search trends (rising branded search is a proxy for AI visibility), direct traffic (unexplained increases may indicate AI research), and self-reported attribution (ask \\\"how did you hear about us?\\\" on forms). To measure share of model specifically, define 20 to 30 category prompts across four query types (discovery, comparison, evaluation, implementation), run each in a fresh session on ChatGPT, Perplexity, Google AI Mode, Claude, and Gemini once a week, and log whether your brand appears, how prominently, and what the sentiment is. Calculate your share as (your appearances \\u00f7 total prompts) \\u00d7 100. Give it four to six weeks before drawing conclusions. You can start manually with a spreadsheet or scale with tools like Semrush's AI Visibility Toolkit, Profound, or Otterly.ai.\"      }\n    },        {\n      \"@type\": \"Question\",\n      \"name\": \"What content gets cited most by AI engines?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Original data and research, middle-funnel content, and comparison content are the most citable. FAQ sections have the highest citation probability of any format at 81%. Content formatted as lists, tables, or step-by-step guides has 2.5x higher citation probability than paragraph-only content. Content with statistics and source citations gets cited up to 40% more.\"      }\n    },        {\n      \"@type\": \"Question\",\n      \"name\": \"Do I need FAQ schema for AI search?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"No. Google's May 2026 AI search guide states that structured data isn't required for AI Overviews or AI Mode, and a May 2026 study found adding JSON-LD schema didn't measurably increase AI citations. Google deprecated FAQ rich results on May 7, 2026. What matters is the Q&amp;A content format \\u2014 well-structured questions and answers in your page content \\u2014 not the schema markup. Keep FAQPage schema if you already have it (it won't hurt), but don't treat it as an AI search lever.\"      }\n    },        {\n      \"@type\": \"Question\",\n      \"name\": \"How often should I update content for GEO?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Quarterly at minimum. Pages not updated quarterly are 3x more likely to lose their AI citations entirely. Content updated within 30 days gets 3.2x more AI citations than older content. Perplexity has the strongest recency bias \\u2014 for fast-moving queries, content older than 90 days enters a decay window. Adding an \\\"Updated [Month Year]\\\" date to high-value pages signals freshness to AI engines.\"      }\n    },        {\n      \"@type\": \"Question\",\n      \"name\": \"How do I get cited by ChatGPT and Perplexity?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Focus on third-party presence first \\u2014 about 85% of AI references come from third-party platforms. Be present on the review sites, analyst reports, trade publications, and earned media that shape your industry's reputation. Then structure your own content with answer-first formatting, question-based headings, and original data. Track your citation rate across each platform separately \\u2014 only 11% of domains are cited by both ChatGPT and Perplexity, so what works on one may not work on another.\"      }\n    }      ]\n}" }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [\n      ]\n}" }}
        />
      </head>
      <body className="block relative overflow-x-hidden overflow-y-auto text-foreground [font-family:CanelaDeck] text-base font-normal not-italic leading-[1.1875rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
