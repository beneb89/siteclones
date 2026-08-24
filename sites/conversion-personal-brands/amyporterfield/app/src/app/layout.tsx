import "./globals.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Amy Porterfield | Online Marketing Expert & Bestselling Author",
  "description": "I’m an ex-corporate girl, author, online marketing expert and the host of the top-ranked podcast with 49 million+ downloads, Online Marketing Made Easy.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "images": [
      "https://static.showit.co/1200/8WVNtePzQIWD7w8nIKP_hA/184679/home_page_image.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/a2ea2648f147.png",
        "type": "image/png"
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
