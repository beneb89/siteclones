import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Connect GA4 + Search Console to Claude via MCP 2026",
  "description": "Wire Google's official GA4 MCP server and a community Search Console server into Claude Code: service-account auth, read-only scopes and least-privilege grants.",
  "keywords": [
    "ga4 mcp server",
    "search console mcp",
    "claude code mcp setup",
    "google analytics mcp",
    "gsc mcp server",
    "service account auth",
    "analytics.readonly scope"
  ],
  "robots": "index, follow",
  "alternates": {
    "canonical": "/blog/connect-ga4-search-console-claude-mcp-build-2026"
  },
  "openGraph": {
    "title": "Connect GA4 + Search Console to Claude via MCP 2026",
    "description": "Wire Google's official GA4 MCP server and a community Search Console server into Claude Code: service-account auth, read-only scopes and least-privilege grants.",
    "type": "article",
    "url": "/blog/connect-ga4-search-console-claude-mcp-build-2026",
    "images": [
      "https://www.digitalapplied.com/blog/connect-ga4-search-console-claude-mcp-build-2026/article-image"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Connect GA4 + Search Console to Claude via MCP 2026",
    "description": "Wire Google's official GA4 MCP server and a community Search Console server into Claude Code: service-account auth, read-only scopes and least-privilege grants.",
    "images": [
      "https://www.digitalapplied.com/blog/connect-ga4-search-console-claude-mcp-build-2026/article-image"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/f8b2ae83d337.ico",
        "type": "image/x-icon",
        "sizes": "48x48"
      },
      {
        "url": "/assets/cloned/svg/2fde286ce519.svg",
        "type": "image/svg+xml",
        "sizes": "any"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/855f3ef64b4b.png",
        "type": "image/png",
        "sizes": "180x180"
      }
    ]
  },
  "manifest": "/assets/cloned/manifest/3a774ff80032.json"
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#18181b"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"@id\":\"", "/#organization\",\"name\":\"Digital Applied\",\"legalName\":\"Digital Applied, s. r. o.\",\"url\":\"", "\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"", "/logo-black.svg\",\"width\":\"512\",\"height\":\"512\"},\"image\":\"", "/opengraph-image\",\"description\":\"International digital marketing agency specializing in SEO, PPC, social media marketing, and AI-powered digital transformation for global clients\",\"foundingDate\":\"2019-05-01\",\"telephone\":\"+421-90-246-8050\",\"email\":\"info@digitalapplied.com\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Priemyselná 668/7\",\"addressLocality\":\"Bratislava\",\"addressRegion\":\"Bratislava\",\"postalCode\":\"821 09\",\"addressCountry\":\"SK\"},\"geo\":{\"@type\":\"GeoCoordinates\",\"latitude\":48.142672,\"longitude\":17.168666},\"sameAs\":[\"https://x.com/digitalapplied\",\"https://www.facebook.com/digitalapplied\",\"https://www.instagram.com/digital_applied\",\"https://www.linkedin.com/company/digitalapplied\"],\"areaServed\":[{\"@type\":\"Country\",\"name\":\"United States\"},{\"@type\":\"Country\",\"name\":\"United Kingdom\"},{\"@type\":\"Country\",\"name\":\"Canada\"},{\"@type\":\"Country\",\"name\":\"Australia\"},{\"@type\":\"Place\",\"name\":\"European Union\"},{\"@type\":\"Place\",\"name\":\"Worldwide\"}],\"priceRange\":\"€€€-€€€€\",\"paymentAccepted\":[\"Credit Card\",\"Wire Transfer\",\"PayPal\"],\"currenciesAccepted\":\"EUR, USD, GBP\",\"openingHoursSpecification\":[{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\"],\"opens\":\"07:30\",\"closes\":\"17:00\"},{\"@type\":\"OpeningHoursSpecification\",\"dayOfWeek\":\"Saturday\",\"opens\":\"08:00\",\"closes\":\"11:00\"}],\"contactPoint\":{\"@type\":\"ContactPoint\",\"telephone\":\"+421-90-246-8050\",\"contactType\":\"customer service\",\"email\":\"info@digitalapplied.com\",\"availableLanguage\":[\"English\",\"Slovak\"],\"areaServed\":\"Worldwide\"},\"vatID\":\"SK2120914510\",\"taxID\":\"52125670\",\"identifier\":{\"@type\":\"PropertyValue\",\"propertyID\":\"Company ID\",\"value\":\"52125670\"},\"hasOfferCatalog\":{\"@type\":\"OfferCatalog\",\"name\":\"Digital Marketing Services\",\"itemListElement\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"SEO Optimization\",\"url\":\"", "/services/agentic-seo\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"PPC Advertising\",\"url\":\"", "/services/paid-media\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Social Media Marketing\",\"url\":\"", "/services/social-media\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Web Development\",\"url\":\"", "/services/web-development\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Content Marketing\",\"url\":\"", "/services/content-engine\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Analytics & Insights\",\"url\":\"", "/services/analytics\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"eCommerce Solutions\",\"url\":\"", "/services/ecommerce\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"CRM & Automation\",\"url\":\"", "/services/crm-automation\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"AI & Digital Transformation\",\"url\":\"", "/services/ai-transformation\"}}]}}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BlogPosting\",\"@id\":\"", "/blog/connect-ga4-search-console-claude-mcp-build-2026#article\",\"headline\":\"Connect GA4 + Search Console to Claude via MCP 2026\",\"description\":\"Wire Google's official GA4 MCP server and a community Search Console server into Claude Code: service-account auth, read-only scopes and least-privilege grants.\",\"url\":\"", "/blog/connect-ga4-search-console-claude-mcp-build-2026\",\"datePublished\":\"2026-07-08T00:00:00+01:00\",\"dateModified\":\"2026-07-08T00:00:00+01:00\",\"author\":{\"@type\":\"Organization\",\"@id\":\"", "/authors/digital-applied-team#author\",\"name\":\"Digital Applied Team\",\"url\":\"", "/authors/digital-applied-team\"},\"publisher\":{\"@id\":\"", "/#organization\"},\"image\":{\"@type\":\"ImageObject\",\"url\":\"", "/blog/connect-ga4-search-console-claude-mcp-build-2026/article-image\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"", "/blog/connect-ga4-search-console-claude-mcp-build-2026#webpage\"},\"isPartOf\":{\"@id\":\"", "/#website\"},\"articleSection\":\"AI Development\",\"keywords\":\"ga4 mcp server, search console mcp, claude code mcp setup, google analytics mcp, gsc mcp server, service account auth, analytics.readonly scope\",\"about\":[{\"@type\":\"Thing\",\"name\":\"ga4\"},{\"@type\":\"Thing\",\"name\":\"search-console\"},{\"@type\":\"Thing\",\"name\":\"mcp\"},{\"@type\":\"Thing\",\"name\":\"claude-code\"},{\"@type\":\"Thing\",\"name\":\"analytics\"},{\"@type\":\"Thing\",\"name\":\"service-account-auth\"},{\"@type\":\"Thing\",\"name\":\"ai-development\"}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"", "/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Blog\",\"item\":\"", "/blog\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"AI Development\",\"item\":\"", "/blog/category/ai-development\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"Connect GA4 + Search Console to Claude via MCP 2026\"}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block text-foreground [font-family:Geist,_'Geist_Fallback',_ui-sans-serif,_system-ui,_sans-serif] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
