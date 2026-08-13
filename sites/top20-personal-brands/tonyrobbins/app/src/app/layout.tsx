import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins",
  "description": "Explore programs, events, and coaching services by Tony Robbins, America's top results coach. Click to accelerate change in your business and personal life.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Official Website of Tony Robbins: Personal & Business Results Coach | Tony Robbins",
    "description": "Explore programs, events, and coaching services by Tony Robbins, America's top results coach. Click to accelerate change in your business and personal life.",
    "images": [
      "https://cdn.sanity.io/images/nyyhaljw/production/6c7baa043858ec31ff59d463923feb7bfc64294f-1560x878.jpg?rect=0,32,1560,815&w=1200&h=627&fit=crop&auto=format"
    ]
  },
  "twitter": {
    "card": "summary_large_image"
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/2d1615326c4f.ico",
        "type": "image/x-icon",
        "sizes": "48x48"
      },
      {
        "url": "/assets/cloned/images/11eec99113d5.png",
        "type": "image/png",
        "sizes": "32x32"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1,
  "themeColor": "#000"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
