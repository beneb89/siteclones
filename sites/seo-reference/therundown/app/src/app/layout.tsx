import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Build Your Own AI SEO Specialist With Gumloop Tutorial | Rundown Guides",
  "description": "In this guide, you will learn how to build a team of Gumloop agents that audits one page from your site and organizes the findings in one Google Sheets workb...",
  "alternates": {
    "canonical": "/guides/build-your-own-ai-seo-specialist-with-gumloop"
  },
  "openGraph": {
    "title": "Build Your Own AI SEO Specialist With Gumloop Tutorial | Rundown Guides",
    "description": "In this guide, you will learn how to build a team of Gumloop agents that audits one page from your site and organizes the findings in one Google Sheets workb...",
    "type": "article",
    "siteName": "The Rundown University",
    "url": "/guides/build-your-own-ai-seo-specialist-with-gumloop",
    "images": [
      "https://tru-images.b-cdn.net/guide-assets/local-390/build-your-own-ai-seo-specialist-with-gumloop/390-nl-thumb.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Build Your Own AI SEO Specialist With Gumloop Tutorial | Rundown Guides",
    "description": "In this guide, you will learn how to build a team of Gumloop agents that audits one page from your site and organizes the findings in one Google Sheets workb...",
    "images": [
      "https://tru-images.b-cdn.net/guide-assets/local-390/build-your-own-ai-seo-specialist-with-gumloop/390-nl-thumb.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/bdbb61ad6ae9.png",
        "type": "image/png",
        "sizes": "96x96"
      },
      {
        "url": "/assets/cloned/images/6c52e7c6cf42.png",
        "type": "image/png",
        "sizes": "48x48"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/46ea77ef7808.png",
        "sizes": "180x180"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/58448ed2970c.webmanifest"
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#080a0f"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Build Your Own AI SEO Specialist With Gumloop\",\"description\":\"In this guide, you will learn how to build a team of Gumloop agents that audits one page from your site and organizes the findings in one Google Sheets workb...\",\"url\":\"", "/guides/build-your-own-ai-seo-specialist-with-gumloop\",\"image\":\"https://tru-images.b-cdn.net/guide-assets/local-390/build-your-own-ai-seo-specialist-with-gumloop/390-nl-thumb.png\",\"datePublished\":\"2026-07-23T00:12:04.000Z\",\"dateModified\":\"2026-07-23T08:04:35.000Z\",\"author\":[{\"@type\":\"Person\",\"name\":\"Billy Howell\",\"url\":\"https://youtube.com/@billyjhowell\"}],\"publisher\":{\"@type\":\"Organization\",\"name\":\"The Rundown University\",\"url\":\"", "\"},\"mainEntityOfPage\":\"", "/guides/build-your-own-ai-seo-specialist-with-gumloop\",\"about\":[\"Marketing \\u0026 Growth\",\"Automation \\u0026 Agents\",\"Data, Research \\u0026 Analysis\"]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"Build Your Own AI SEO Specialist With Gumloop\",\"description\":\"In this guide, you will learn how to build a team of Gumloop agents that audits one page from your site and organizes the findings in one Google Sheets workb...\",\"url\":\"", "/guides/build-your-own-ai-seo-specialist-with-gumloop\",\"image\":\"https://tru-images.b-cdn.net/guide-assets/local-390/build-your-own-ai-seo-specialist-with-gumloop/390-nl-thumb.png\",\"step\":[{\"@type\":\"HowToStep\",\"position\":1,\"name\":\"Step 1: Build the Backlink Agent and Start the Workbook\",\"text\":\"Open Gumloop's Backlink Specialist template (https://www.gumloop.com/templates/backlink-specialist) and select Use this Agent. The template gives you a fast...\"},{\"@type\":\"HowToStep\",\"position\":2,\"name\":\"Step 2: Add the Content Refresh Agent\",\"text\":\"Create a second agent named Content Refresh Agent. Give it Firecrawl and Google Sheets, then add instructions that keep it focused on one page, one audience,...\"},{\"@type\":\"HowToStep\",\"position\":3,\"name\":\"Step 3: Add the Technical SEO Audit Agent\",\"text\":\"Create a third agent named Technical SEO Audit Agent. This is the most constrained agent in the system because it can inspect many pages and write a large nu...\"},{\"@type\":\"HowToStep\",\"position\":4,\"name\":\"Step 4: Build One Issues Queue\",\"text\":\"At this point, the workbook has separate specialist tabs. Give the final consolidation prompt to an agent with Google Sheets access. It reads the completed t...\"}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"VideoObject\",\"name\":\"Build Your Own AI SEO Specialist With Gumloop\",\"description\":\"In this guide, you will learn how to build a team of Gumloop agents that audits one page from your site and organizes the findings in one Google Sheets workb...\",\"thumbnailUrl\":[\"https://tru-images.b-cdn.net/guide-assets/local-390/build-your-own-ai-seo-specialist-with-gumloop/390-nl-thumb.png\"],\"embedUrl\":\"https://player.mediadelivery.net/embed/586064/1f5a49ba-b0e2-4b59-b3ed-9a626a9d4b37\",\"contentUrl\":\"https://player.mediadelivery.net/embed/586064/1f5a49ba-b0e2-4b59-b3ed-9a626a9d4b37\",\"uploadDate\":\"2026-07-23T00:12:04.000Z\",\"mainEntityOfPage\":\"", "/guides/build-your-own-ai-seo-specialist-with-gumloop\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"The Rundown University\",\"url\":\"", "\"}}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Guides\",\"item\":\"", "/guides\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Build Your Own AI SEO Specialist With Gumloop\",\"item\":\"", "/guides/build-your-own-ai-seo-specialist-with-gumloop\"}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="h-[3133.1px] min-h-screen block text-foreground [font-family:'IBM_Plex_Sans',_ui-sans-serif,_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_sans-serif] text-base font-normal not-italic leading-5 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background max-md:h-[4493.5px] md:max-lg:h-[251.6875rem] 2xl:h-[195.9125rem]">
        {children}
      </body>
    </html>
  );
}
