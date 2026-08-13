import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Generative Engine Optimization (GEO): The 2026 Guide to AI Search Visibility - LLMrefs",
  "description": "Learn what generative engine optimization is, how GEO differs from SEO, and how to optimize your content for AI search engines like ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
  "alternates": {
    "canonical": "/generative-engine-optimization"
  },
  "openGraph": {
    "title": "Generative Engine Optimization (GEO): The 2026 Guide to AI Search Visibility - LLMrefs",
    "description": "Learn what generative engine optimization is, how GEO differs from SEO, and how to optimize your content for AI search engines like ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    "type": "website",
    "siteName": "LLMrefs",
    "url": "/generative-engine-optimization",
    "images": [
      "https://llmrefs.com/opengraph-image.png?opengraph-image.09995bf2.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Generative Engine Optimization (GEO): The 2026 Guide to AI Search Visibility - LLMrefs",
    "description": "Learn what generative engine optimization is, how GEO differs from SEO, and how to optimize your content for AI search engines like ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    "site": "@llmrefs",
    "images": [
      "https://llmrefs.com/twitter-image.png?twitter-image.09995bf2.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/dd39ccbd4d88.ico",
        "type": "image/x-icon",
        "sizes": "48x48"
      },
      {
        "url": "/assets/cloned/images/c66e23f60690.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/a27829559184.png",
        "type": "image/png",
        "sizes": "180x180"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#000000",
  "colorScheme": "only light"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"LLMrefs\",\"description\":\"LLMrefs is an AI search analytics platform built for marketers to increase visibility in ChatGPT, Google AI Overviews/Mode, Perplexity, Claude & more generative answer engines. Track keywords and optimize your AI SEO performance.\",\"url\":\"", "/\",\"logo\":\"", "/llmrefs-social-logo.png\",\"contactPoint\":[{\"@type\":\"ContactPoint\",\"contactType\":\"general\",\"email\":\"hello@llmrefs.com\"}],\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"London\",\"addressCountry\":\"GB\"},\"founder\":{\"@type\":\"Person\",\"name\":\"James Berry\"},\"foundingDate\":\"2025-05-01\",\"sameAs\":[\"https://www.linkedin.com/company/llmrefs/\",\"https://www.youtube.com/@llmrefs\",\"https://x.com/llmrefs\",\"https://github.com/LLMrefs\",\"https://www.facebook.com/LLMrefs\",\"https://www.crunchbase.com/organization/llmrefs\"]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"name\":\"LLMrefs\",\"url\":\"", "/\"}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"@id\":\"", "/#software-application\",\"name\":\"LLMrefs\",\"url\":\"", "/\",\"applicationCategory\":\"BusinessApplication\",\"applicationSubCategory\":\"AI SEO platform\",\"operatingSystem\":\"Web\",\"publisher\":{\"@type\":\"Organization\",\"@id\":\"", "/#organization\"}}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block overflow-x-hidden overflow-y-auto text-foreground [font-family:Satoshi,_'Satoshi_Fallback',_ui-sans-serif,_system-ui,_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] text-base [font-weight:449] not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:'dlig',_'liga',_'ss02',_'ss03'] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background max-w-dvw">
        {children}
      </body>
    </html>
  );
}
