import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Microsoft Advertising MCP Server in Open Pilot",
  "description": "Microsoft Advertising MCP server now in open pilot, enabling custom AI workflows with live campaign data using various AI assistants.",
  "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/"
  },
  "openGraph": {
    "title": "Microsoft Advertising MCP Server in Open Pilot",
    "description": "Microsoft Advertising MCP server now in open pilot, enabling custom AI workflows with live campaign data using various AI assistants.",
    "type": "article",
    "siteName": "PPC News Feed",
    "url": "/ppc-news/2026-06/microsoft-advertising-mcp-server-expands-open-pilot/",
    "images": [
      "https://ppcnewsfeed.com/wp-content/uploads/2026/06/microsoft-advertising-mcp-server-the.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image"
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/b73f2f1083c0.png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/457fc17fc7d3.png",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/bcc9a0e0ce97.png"
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https:\\/\\/schema.org\",\"@graph\":[{\"@type\":\"Article\",\"@id\":\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/#article\",\"isPartOf\":{\"@id\":\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/\"},\"author\":{\"name\":\"PPC News Feed\",\"@id\":\"", "\\/#\\/schema\\/person\\/ebc0e51c22b86bd60749bf18329ccaba\"},\"headline\":\"Microsoft Advertising MCP Server in Open Pilot\",\"datePublished\":\"2026-06-19T07:44:01+00:00\",\"dateModified\":\"2026-06-19T07:44:07+00:00\",\"mainEntityOfPage\":{\"@id\":\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/\"},\"wordCount\":76,\"publisher\":{\"@id\":\"", "\\/#organization\"},\"image\":{\"@id\":\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/#primaryimage\"},\"thumbnailUrl\":\"", "\\/wp-content\\/uploads\\/2026\\/06\\/microsoft-advertising-mcp-server-the.jpg\",\"keywords\":[\"AI\",\"API\",\"Ecommerce\",\"Lead Generation\",\"Microsoft Advertising\"],\"articleSection\":[\"2026-06\",\"PPC News\"],\"inLanguage\":\"en-US\",\"copyrightYear\":\"2026\",\"copyrightHolder\":{\"@id\":\"", "\\/#organization\"}},{\"@type\":\"WebPage\",\"@id\":\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/\",\"url\":\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/\",\"name\":\"Microsoft Advertising MCP Server in Open Pilot\",\"isPartOf\":{\"@id\":\"", "\\/#website\"},\"primaryImageOfPage\":{\"@id\":\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/#primaryimage\"},\"image\":{\"@id\":\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/#primaryimage\"},\"thumbnailUrl\":\"", "\\/wp-content\\/uploads\\/2026\\/06\\/microsoft-advertising-mcp-server-the.jpg\",\"datePublished\":\"2026-06-19T07:44:01+00:00\",\"dateModified\":\"2026-06-19T07:44:07+00:00\",\"description\":\"Microsoft Advertising MCP server now in open pilot, enabling custom AI workflows with live campaign data using various AI assistants.\",\"breadcrumb\":{\"@id\":\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/\"]}]},{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/#primaryimage\",\"url\":\"", "\\/wp-content\\/uploads\\/2026\\/06\\/microsoft-advertising-mcp-server-the.jpg\",\"contentUrl\":\"", "\\/wp-content\\/uploads\\/2026\\/06\\/microsoft-advertising-mcp-server-the.jpg\",\"width\":1280,\"height\":720,\"caption\":\"Screenshot of a Work IQ chat interface showing a Microsoft Advertising campaign analysis for a Contoso laptop search campaign, displaying performance metrics, main issues with high CPA, and optimization recommendations.\"},{\"@type\":\"BreadcrumbList\",\"@id\":\"", "\\/ppc-news\\/2026-06\\/microsoft-advertising-mcp-server-expands-open-pilot\\/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"PPC News\",\"item\":\"", "\\/ppc-news\\/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"2026-06\",\"item\":\"", "\\/ppc-news\\/2026-06\\/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"Microsoft Advertising MCP Server in Open Pilot\"}]},{\"@type\":\"WebSite\",\"@id\":\"", "\\/#website\",\"url\":\"", "\\/\",\"name\":\"PPC News Feed\",\"description\":\"Your One-Stop Source for the Latest PPC News\",\"publisher\":{\"@id\":\"", "\\/#organization\"},\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"", "\\/?s={search_term_string}\"},\"query-input\":{\"@type\":\"PropertyValueSpecification\",\"valueRequired\":true,\"valueName\":\"search_term_string\"}}],\"inLanguage\":\"en-US\"},{\"@type\":\"Organization\",\"@id\":\"", "\\/#organization\",\"name\":\"PPC News Feed\",\"alternateName\":\"PPCNewsFeed\",\"url\":\"", "\\/\",\"logo\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"", "\\/#\\/schema\\/logo\\/image\\/\",\"url\":\"", "\\/wp-content\\/uploads\\/2023\\/09\\/logo2.png\",\"contentUrl\":\"", "\\/wp-content\\/uploads\\/2023\\/09\\/logo2.png\",\"width\":585,\"height\":150,\"caption\":\"PPC News Feed\"},\"image\":{\"@id\":\"", "\\/#\\/schema\\/logo\\/image\\/\"},\"sameAs\":[\"https:\\/\\/www.linkedin.com\\/company\\/ppc-news-feed\\/\"],\"description\":\"PPC News Feed gives PPC specialists a clear and fast way to follow the latest updates in Google Ads and Microsoft Advertising. It collects key news in one place, saving time and reducing the need to search through many sources. Updates are available on the website or delivered by email through the PPC News Feed newsletter at a preferred pace.\"},{\"@type\":\"Person\",\"@id\":\"", "\\/#\\/schema\\/person\\/ebc0e51c22b86bd60749bf18329ccaba\",\"name\":\"PPC News Feed\",\"image\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1643bcb3d3fa929465907c23dd9fd1f8e2b9d393d4d7e443c6be177b531724d8?s=96&d=mm&r=g\",\"url\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1643bcb3d3fa929465907c23dd9fd1f8e2b9d393d4d7e443c6be177b531724d8?s=96&d=mm&r=g\",\"contentUrl\":\"https:\\/\\/secure.gravatar.com\\/avatar\\/1643bcb3d3fa929465907c23dd9fd1f8e2b9d393d4d7e443c6be177b531724d8?s=96&d=mm&r=g\",\"caption\":\"PPC News Feed\"},\"sameAs\":[\"", "\"],\"url\":\"", "\\/author\\/admin\\/\"}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"PPC News Feed\",\"url\":\"", "\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"5\",\"reviewCount\":55,\"bestRating\":\"5\",\"worstRating\":\"1\"}}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block overflow-x-hidden overflow-y-auto text-foreground [font-family:Manrope,_sans-serif] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-left normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
