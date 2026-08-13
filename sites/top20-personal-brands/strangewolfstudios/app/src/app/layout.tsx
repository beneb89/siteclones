import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Strange Wolf | Brand Designer & Illustrator",
  "description": "Brand Designer and Illustration helping your brand stand out from the pack",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Strange Wolf | Brand Designer & Illustrator",
    "description": "Brand Designer and Illustration helping your brand stand out from the pack",
    "type": "website",
    "url": "/"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Strange Wolf | Brand Designer & Illustrator",
    "description": "Brand Designer and Illustration helping your brand stand out from the pack"
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/250a0589f051.png"
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
    <html lang={"en"}>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
