import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Oakline Studio",
  "description": "Premium design studio for startups and tech teams. Product design, branding, websites, and Framer builds, all done by senior designers.",
  "robots": "max-image-preview:large",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Oakline Studio",
    "description": "Premium design studio for startups and tech teams. Product design, branding, websites, and Framer builds, all done by senior designers.",
    "type": "website",
    "url": "/",
    "images": [
      "https://framerusercontent.com/images/IMoF9FvBaRMuo3C3lwZo4LURF8.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Oakline Studio",
    "description": "Premium design studio for startups and tech teams. Product design, branding, websites, and Framer builds, all done by senior designers.",
    "images": [
      "https://framerusercontent.com/images/IMoF9FvBaRMuo3C3lwZo4LURF8.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/6188bb28e52b.png",
        "media": "(prefers-color-scheme: light)"
      },
      {
        "url": "/assets/cloned/images/6188bb28e52b.png",
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
