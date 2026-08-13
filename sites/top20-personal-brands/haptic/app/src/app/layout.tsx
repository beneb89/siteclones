import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Haptic — A design studio for startups and scaleups.",
  "description": "Trusted by founders and visionaries to shape brands and products with purpose.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Haptic — A design studio for startups and scaleups.",
    "description": "Trusted by founders and visionaries to shape brands and products with purpose.",
    "type": "website",
    "url": "/",
    "images": [
      "https://framerusercontent.com/images/A8sx0lm2ec5o8TwRMkrrWPtHuI.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Haptic — A design studio for startups and scaleups.",
    "description": "Trusted by founders and visionaries to shape brands and products with purpose.",
    "images": [
      "https://framerusercontent.com/images/A8sx0lm2ec5o8TwRMkrrWPtHuI.jpg"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/c6afa877f776.png",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/9a539a82618b.png",
        "media": "(prefers-color-scheme: dark)"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/a684b569a050.png"
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
    <html lang={"nl"}>
      <body className="cn0">
        {children}
      </body>
    </html>
  );
}
