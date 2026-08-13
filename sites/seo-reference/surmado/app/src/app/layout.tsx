import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Answer Engine Optimization: The Complete AEO and GEO Guide for 2026 | Surmado Blog",
  "description": "Answer Engine Optimization (AEO) & GEO vs SEO: tactics for AI Overviews, Perplexity, Copilot, Claude, Gemini; Princeton/IIT Delhi study; scam red flags.",
  "alternates": {
    "canonical": "/blog/answer-engine-optimization-aeo-geo-guide",
    "languages": {
      "en": "https://www.surmado.com/blog/answer-engine-optimization-aeo-geo-guide",
      "es": "https://www.surmado.com/es/blog/answer-engine-optimization-aeo-geo-guide",
      "fr": "https://www.surmado.com/fr/blog/answer-engine-optimization-aeo-geo-guide",
      "pt": "https://www.surmado.com/pt/blog/answer-engine-optimization-aeo-geo-guide",
      "ja": "https://www.surmado.com/ja/blog/answer-engine-optimization-aeo-geo-guide",
      "it": "https://www.surmado.com/it/blog/answer-engine-optimization-aeo-geo-guide",
      "de": "https://www.surmado.com/de/blog/answer-engine-optimization-aeo-geo-guide",
      "x-default": "https://www.surmado.com/blog/answer-engine-optimization-aeo-geo-guide"
    }
  },
  "openGraph": {
    "title": "Answer Engine Optimization: The Complete AEO and GEO Guide for 2026 | Surmado Blog",
    "description": "Answer Engine Optimization (AEO) & GEO vs SEO: tactics for AI Overviews, Perplexity, Copilot, Claude, Gemini; Princeton/IIT Delhi study; scam red flags.",
    "type": "website",
    "siteName": "Surmado",
    "url": "/blog/answer-engine-optimization-aeo-geo-guide",
    "images": [
      "https://www.surmado.com/images/og-default.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Answer Engine Optimization: The Complete AEO and GEO Guide for 2026 | Surmado Blog",
    "description": "Answer Engine Optimization (AEO) & GEO vs SEO: tactics for AI Overviews, Perplexity, Copilot, Claude, Gemini; Princeton/IIT Delhi study; scam red flags.",
    "site": "@surmado",
    "images": [
      "https://www.surmado.com/images/og-default.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/svg/ce19c637d9d4.svg",
        "type": "image/svg+xml"
      },
      {
        "url": "/assets/cloned/images/ee5397f83df5.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/24e27f4953db.png",
        "type": "image/png",
        "sizes": "16x16"
      },
      {
        "url": "/assets/cloned/images/627a345b7e56.ico"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/a7aa57cea4da.png",
        "sizes": "180x180"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/4ffe9fbaba1f.webmanifest"
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#002A41"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"@id\":\"", "#organization\",\"name\":\"Surmado\",\"legalName\":\"Surmado, Inc.\",\"alternateName\":[\"Surmado Scout\",\"Sirmado\",\"Sermado\",\"Surmada\",\"Surmato\",\"Cermato\",\"Surnado\",\"Surrnado\",\"Zurmado\"],\"url\":\"", "\",\"logo\":\"", "/android-chrome-512x512.png\",\"description\":\"AI for small business. Surmado builds, migrates, and runs websites: Surmado Sites rebuilds the site, hosts it, monitors it, and keeps improving it. Fully customizable, complete multi-page sites in up to 15 languages, kept in sync with every edit. AI Visibility, Site Audit, Strategy, Monitoring, and Code Review Jobs are live today, testing across ChatGPT, Claude, Gemini, Perplexity, Meta AI, Grok, and DeepSeek. Jobs start at $50 and most take about 15 minutes.\",\"knowsAbout\":[\"Answer Engine Optimization\",\"Generative Engine Optimization\",\"AEO\",\"GEO\",\"Local GEO\",\"Local AEO\",\"Local AI Search\",\"AI Visibility\",\"AI Visibility Testing\",\"Persona-Based Testing\",\"AI for Small Business\",\"Technical SEO\",\"Site Audit\",\"Business Strategy\",\"Automated Code Review\",\"Managed Website Hosting\"],\"sameAs\":[\"https://www.youtube.com/@surmado\",\"https://linkedin.com/company/surmado\",\"https://x.com/surmado\",\"https://medium.com/@surmado\",\"https://instagram.com/surmado.ai\",\"https://www.threads.com/@surmado.ai\",\"https://facebook.com/surmado.ai\",\"https://www.reddit.com/u/surmado\",\"https://www.tiktok.com/@surmado\",\"https://surmado.substack.com/\",\"https://dev.to/surmado\",\"https://hashnode.com/@surmado\",\"https://www.producthunt.com/@surmado\",\"https://bsky.app/profile/surmado.bsky.social\",\"https://stackshare.io/surmado/surmado-stack\",\"https://github.com/surmado\",\"https://www.crunchbase.com/organization/surmado\",\"https://surmado.ai\",\"https://cermato.com\",\"https://sermado.com\",\"https://sirmado.com\",\"https://surmada.com\",\"https://surmato.com\",\"https://surnado.com\",\"https://surrnado.com\",\"https://zurmado.com\"],\"founder\":{\"@type\":\"Person\",\"@id\":\"https://lukefwalton.com/#person\",\"name\":\"Luke F. Walton\",\"jobTitle\":\"Founder and CEO\",\"url\":\"https://lukefwalton.com/\",\"worksFor\":{\"@id\":\"", "#organization\"},\"identifier\":[{\"@type\":\"PropertyValue\",\"propertyID\":\"IPI\",\"name\":\"BMI Songwriter IPI\",\"value\":\"00579587572\"},{\"@type\":\"PropertyValue\",\"propertyID\":\"ISNI\",\"value\":\"0000 0005 3040 0539\"},{\"@type\":\"PropertyValue\",\"propertyID\":\"ORCID\",\"value\":\"0009-0005-9263-1954\"}],\"sameAs\":[\"https://lukefwalton.com/\",\"https://www.linkedin.com/in/lukefwalton\",\"https://www.crunchbase.com/person/luke-walton-b943\",\"https://orcid.org/0009-0005-9263-1954\",\"https://philpeople.org/profiles/luke-f-walton\",\"https://github.com/lukefwalton\"]},\"foundingDate\":\"2025-10-13\",\"slogan\":\"Your website, handled.\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"5227 N 7th St STE 54125\",\"addressLocality\":\"Phoenix\",\"addressRegion\":\"AZ\",\"postalCode\":\"85014\",\"addressCountry\":\"US\"},\"contactPoint\":[{\"@type\":\"ContactPoint\",\"email\":\"hi@surmado.com\",\"contactType\":\"Customer Service\"},{\"@type\":\"ContactPoint\",\"email\":\"legal@surmado.com\",\"contactType\":\"Legal\"}],\"telephone\":\"+1-602-341-5572\"}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Answer Engine Optimization: The Complete AEO and GEO Guide for 2026\",\"item\":\"", "/blog/answer-engine-optimization-aeo-geo-guide/\"}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"headline\":\"Answer Engine Optimization: The Complete AEO and GEO Guide for 2026\",\"description\":\"Answer Engine Optimization (AEO) & GEO vs SEO: tactics for AI Overviews, Perplexity, Copilot, Claude, Gemini; Princeton/IIT Delhi study; scam red flags.\",\"datePublished\":\"2026-04-02T00:00:00.000Z\",\"dateModified\":\"2026-04-30T00:00:00.000Z\",\"author\":{\"@type\":\"Organization\",\"name\":\"Surmado\",\"url\":\"", "\"},\"publisher\":{\"@id\":\"", "#organization\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"", "/blog/answer-engine-optimization-aeo-geo-guide/\"},\"image\":\"", "/android-chrome-512x512.png\",\"articleSection\":\"AI Visibility\",\"inLanguage\":\"en\",\"wordCount\":6488}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden overflow-y-auto text-foreground [font-family:'Nunito_Sans',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_'Helvetica_Neue',_Arial,_sans-serif] text-base font-medium not-italic leading-[1.6875rem] tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
