import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Primary | Brand Sprints",
  "description": "Primary is a brand sprint agency. We design launch-ready brand identities in just two weeks.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Primary | Brand Sprints",
    "description": "Primary is a brand sprint agency. We design launch-ready brand identities in just two weeks.",
    "type": "website",
    "url": "/",
    "images": [
      "https://framerusercontent.com/images/ExdqBZdi7vwilxNcAMIuDdWdUyM.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Primary | Brand Sprints",
    "description": "Primary is a brand sprint agency. We design launch-ready brand identities in just two weeks.",
    "images": [
      "https://framerusercontent.com/images/ExdqBZdi7vwilxNcAMIuDdWdUyM.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/6d536d252b04.png",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/6d536d252b04.png",
        "media": "(prefers-color-scheme: dark)"
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
