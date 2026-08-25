import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Mark Manson - Life Advice that Doesn't Suck",
  "description": "Mark Manson — Author of the #1 NYTimes bestselling books, The Subtle Art of Not Giving a F*ck and Everything is F*cked",
  "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Mark Manson - Life Advice that Doesn't Suck",
    "description": "Mark Manson — Author of the #1 NYTimes bestselling books, The Subtle Art of Not Giving a F*ck and Everything is F*cked",
    "type": "website",
    "siteName": "Mark Manson",
    "url": "/"
  },
  "twitter": {
    "card": "summary_large_image",
    "site": "@IAmMarkManson"
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
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https:\\/\\/schema.org\",\"@type\":\"Person\",\"@id\":\"", "#person\",\"name\":\"Mark Manson\",\"url\":\"", "\",\"sameAs\":[\"https:\\/\\/plus.google.com\\/+MarkMansonnet\",\"https:\\/\\/www.facebook.com\\/Markmansonnet\\/\",\"http:\\/\\/twitter.com\\/iammarkmanson\",\"https:\\/\\/instagram.com\\/markmansonnet\\/\",\"https:\\/\\/www.youtube.com\\/c\\/MarkMansonAuthor\",\"https:\\/\\/www.linkedin.com\\/in\\/markmanson\\/\",\"https:\\/\\/www.pinterest.com\\/iammarkmanson\\/\",\"https:\\/\\/soundcloud.com\\/markmanson\",\"http:\\/\\/iammarkmanson.tumblr.com\\/\"]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\n        \"@context\": \"http://schema.org\",\n        \"@type\": \"BreadcrumbList\",\n        \"itemListElement\": [\n            {\n                \"@type\": \"ListItem\",\n                \"position\": 1,\n                \"item\": {\n                    \"@id\": \"", "\",\n                    \"name\": \"Home\"\n                }\n            }\n        ]\n    }"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
