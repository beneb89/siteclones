import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "DECAID Academy - DACHs #1 Lernplattform für GenAI",
  "description": "Beschleunige deine AI Transformation messbar - in den Bereichen AI-Management, Copywriting, Design und Compliance.",
  "alternates": {
    "languages": {
      "x-default": "https://www.decaid.academy/",
      "de": "https://www.decaid.academy/",
      "en": "https://www.decaid.academy/en"
    }
  },
  "openGraph": {
    "title": "DECAID Academy - DACHs #1 Lernplattform für GenAI",
    "description": "Beschleunige deine AI Transformation messbar - in den Bereichen AI-Management, Copywriting, Design und Compliance.",
    "type": "website",
    "images": [
      "https://cdn.prod.website-files.com/681c82c4de3a9ce11a518a6d/683d60c93bcf35689a785882_OG-image.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "DECAID Academy - DACHs #1 Lernplattform für GenAI",
    "description": "Beschleunige deine AI Transformation messbar - in den Bereichen AI-Management, Copywriting, Design und Compliance."
  },
  "icons": {
    "shortcut": [
      {
        "url": "/assets/cloned/images/1451a3ef7190.png",
        "type": "image/x-icon"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/2dded713cc4b.png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


import { cn } from "../lib/utils";

function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("block mt-3 mb-1.5 text-background [font-family:Satoshi,_Arial,_sans-serif] text-[0.9375rem] font-light leading-4 cursor-pointer", styles.className)} href={d.href} target={d.target}>
      {d.label}
    </a>
  );
}

const TextLink_data = [
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/imprint", label: "Impressum" },
    { href: "https://www.decaid.ai/ki-transparenzerklaerung?__hstc=254722839.51a8df3881266060c908cf4d80655b9e.1767225607174.1767225607174.1767225607174.1&__hssc=254722839.1.1767225607174&__hsfp=94ef76e50aa552668c1276dec3915e7a", target: "_blank", label: "KI-Transparenzerkärung" }
];

const TextLink_data2 = [
    { href: "mailto:info@decaid.academy", label: "Mail" },
    { href: "tel:+4915128720778", label: "Tel: +49 151 28720778" },
    { href: "https://www.linkedin.com/company/decaid-academy/", target: "_blank", label: "Linkedin" }
];

const TextLink_meta: string[][] = [
    ["style-21"],
    ["style-22"],
    ["style-23"]
];

const TextLink_meta2: string[][] = [
    ["style-24"],
    ["style-25"],
    ["style-26"]
];

const TextLink_styles = [
    {  },
    {  },
    { className: "whitespace-nowrap" }
];

const TextLink_styles2 = [
    {  },
    { className: "whitespace-nowrap" },
    {  }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"de"}>
      <body className="cn0">
        {children}
        <section className="border-b border-solid border-b-surface-6 block relative pt-12.5 pb-[0.9375rem] px-4 bg-color-001 max-md:px-[0.9375rem]" data-ditto-id="style-section">
          <div className="h-px block mb-17.5 bg-clr-0" />
          <div className="block max-w-310 mx-1 max-md:max-w-none max-md:mx-0 md:max-lg:max-w-182 2xl:mx-81">
            <div className="flex max-w-320 justify-between items-start max-md:flex-col max-md:items-center">
              <a className="block max-w-full text-primary underline cursor-pointer" href="#">
                <img className="w-25 h-[10.1875rem] inline-block max-w-25 overflow-clip align-middle max-lg:w-35 max-lg:h-57 max-lg:max-w-35" alt="" sizes="100vw" src="/assets/cloned/images/a26b0d77ec87.png" srcSet="/assets/cloned/images/109ef9a3ecaa.png 500w, /assets/cloned/images/a26b0d77ec87.png 636w" />
              </a>
              <div className="grid gap-y-10 gap-x-15 [grid-auto-columns:1fr] grid-cols-[repeat(auto-fit,_minmax(148px,_1fr))] max-md:mt-10 max-lg:gap-x-10">
                <div className="flex flex-col justify-start items-start col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] max-md:items-center" id="w-node-a08c2775-c276-6dd8-029a-c9bfd7d71c08-4f1167a7">
                  <div className="block mb-3 text-background [font-family:Satoshi,_Arial,_sans-serif] font-medium leading-4 tracking-[1px] uppercase">
                    Rechtliches
                  </div>
                  {TextLink_data.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
                </div>
                <div className="flex flex-col justify-start items-start col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] max-md:items-center" id="w-node-dd5aebb4-97ea-afde-d631-f5594f1167b5-4f1167a7">
                  <div className="block mb-3 text-background [font-family:Satoshi,_Arial,_sans-serif] font-medium leading-4 tracking-[1px] uppercase">
                    Kontakt
                  </div>
                  {TextLink_data2.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles2[i]} />)}
                </div>
                <div className="flex flex-col justify-start items-start col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] max-md:items-center" id="w-node-dd5aebb4-97ea-afde-d631-f5594f1167bc-4f1167a7">
                  <div className="block mb-3 text-background [font-family:Satoshi,_Arial,_sans-serif] font-medium leading-4 tracking-[1px] uppercase">
                    Trusted by
                  </div>
                  <a className="h-12 block max-w-full mt-3 text-primary underline [filter:invert(1)] cursor-pointer" href="https://www.gwa.de/" target="_blank">
                    <img className="w-37.5 h-12 inline-block overflow-clip align-middle" alt="" sizes="100vw" src="/assets/cloned/images/60f7ee65994c.png" srcSet="/assets/cloned/images/1ba75ead2426.png 500w, /assets/cloned/images/60f7ee65994c.png 761w" />
                  </a>
                  <a className="block max-w-full mt-3 text-primary underline cursor-pointer" href="https://www.gwa.de/" target="_blank">
                    <img className="w-25 h-19 inline-block max-w-25 mt-[0.3125rem] -ml-2 overflow-clip align-middle max-lg:w-37.5 max-lg:h-28.5 max-lg:max-w-none max-lg:mt-0 max-lg:ml-0" alt="" src="/assets/cloned/images/6adb1dcd55ca.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px block mt-17.5 mb-[0.9375rem] bg-clr-0 max-md:mt-15" />
          <div className="block text-color-004 [font-family:Satoshi,_Arial,_sans-serif] font-light leading-4 text-center">
            Copyright © 2025 DECAID Academy GmbH
          </div>
        </section>
      </body>
    </html>
  );
}
