import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Andrew Ng - Official Website",
  "description": "Andrew Ng has helped millions of people learn AI. Founder of DeepLearning.AI, AI Fund, and LandingAI. Co-Founder of Coursera. Board Director at Amazon.",
  "openGraph": {
    "title": "Andrew Ng - Official Website",
    "description": "Andrew Ng has helped millions of people learn AI. Founder of DeepLearning.AI, AI Fund, and LandingAI. Co-Founder of Coursera. Board Director at Amazon.",
    "type": "website",
    "siteName": "Andrew Ng",
    "images": [
      "https://andrewng.org/opengraph-image.png?opengraph-image.5b759eca.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Andrew Ng - Official Website",
    "description": "Andrew Ng has helped millions of people learn AI. Founder of DeepLearning.AI, AI Fund, and LandingAI. Co-Founder of Coursera. Board Director at Amazon.",
    "images": [
      "https://andrewng.org/opengraph-image.png?opengraph-image.5b759eca.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/1400ee51d270.ico",
        "type": "image/x-icon",
        "sizes": "16x16"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


import { cn } from "../lib/utils";

function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className={cn("inline text-[0.8125rem] font-medium leading-[1.375rem] tracking-[1.56px] uppercase cursor-pointer", styles.className2)} href={d.href}>
        {d.label}
      </a>
    </li>
  );
}

function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="list-item min-w-0">
      <a className={cn("block py-3 text-[0.8125rem] font-medium leading-[1.375rem] tracking-[1.56px] uppercase cursor-pointer", styles.className)} href={d.href}>
        {d.label}
      </a>
    </li>
  );
}

function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item">
      <a className="inline text-muted-foreground text-sm leading-5 cursor-pointer" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}

const ListRow_data = [
    { href: "/", label: "About" },
    { href: "/writing", label: "Writing" },
    { href: "/ai-fund", label: "AI Fund" },
    { href: "/research", label: "Research" },
    { href: "/courses", label: "Courses" },
    { href: "/ai-andrew", label: "AI Andrew" },
    { href: "/contact", label: "Contact" }
];

const ListRow2_data = [
    { href: "/", label: "About" },
    { href: "/writing", label: "Writing" },
    { href: "/ai-fund", label: "AI Fund" },
    { href: "/research", label: "Research" },
    { href: "/courses", label: "Courses" },
    { href: "/ai-andrew", label: "AI Andrew" },
    { href: "/contact", label: "Contact" }
];

const ListRow3_data = [
    { href: "/", label: "About" },
    { href: "/writing", label: "Writing" },
    { href: "/ai-fund", label: "AI Fund" },
    { href: "/research", label: "Research" },
    { href: "/courses", label: "Courses" },
    { href: "/ai-andrew", label: "AI Andrew" },
    { href: "/contact", label: "Contact" }
];

const ListRow_meta: string[][] = [
    ["Ln5", "Ln6"],
    ["Ln7", "style-63"],
    ["Ln9", "style-49"],
    ["Ln11", "style-56"],
    ["Ln13", "style-60"],
    ["Ln15", "style-61"],
    ["Ln17", "style-62"]
];

const ListRow2_meta: string[][] = [
    ["Ln25", "Ln26"],
    ["Ln27", "Ln28"],
    ["Ln29", "Ln30"],
    ["Ln31", "Ln32"],
    ["Ln33", "Ln34"],
    ["Ln35", "Ln36"],
    ["Ln37", "Ln38"]
];

const ListRow3_meta: string[][] = [
    ["Ln108", "style-50"],
    ["Ln110", "style-51"],
    ["Ln112", "style-52"],
    ["Ln114", "style-53"],
    ["Ln116", "style-54"],
    ["Ln118", "style-55"],
    ["Ln120", "style-57"]
];

const ListRow_styles = [
    { className2: "text-color-001 underline" },
    { className2: "text-muted-foreground" },
    { className: "h-full", className2: "text-muted-foreground" },
    { className2: "text-muted-foreground" },
    { className2: "text-muted-foreground" },
    { className: "h-full", className2: "text-muted-foreground" },
    { className2: "text-muted-foreground" }
];

const ListRow2_styles = [
    { className: "text-color-001 underline" },
    { className: "text-muted-foreground" },
    { className: "text-muted-foreground" },
    { className: "text-muted-foreground" },
    { className: "text-muted-foreground" },
    { className: "text-muted-foreground" },
    { className: "text-muted-foreground" }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="cn0">
        <header className="h-[68.9px] block fixed inset-x-0 z-50 bg-background max-md:h-17 md:max-lg:h-[6.1125rem]">
          <nav className="h-full flex mx-auto py-5 px-8 justify-between items-center max-w-5xl max-lg:px-6">
            <a className="h-full block text-color-001 [font-family:ABCSynt,_Georgia,_serif] text-lg font-medium leading-7 tracking-[-0.45px] cursor-pointer" href="/">
              Andrew Ng
            </a>
            <ul className="h-full flex items-center gap-7 [list-style-type:none] list-outside max-md:hidden">
              {ListRow_data.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
            </ul>
            <button className="hidden min-w-0 flex-col gap-1.5 text-center cursor-default max-md:flex" aria-label="Toggle menu">
              <span className="block bg-color-001 h-px w-5" />
              <span className="block bg-color-001 h-px w-5" />
              <span className="block bg-color-001 h-px w-5" />
            </button>
          </nav>
          <div className="hidden max-h-0 overflow-hidden bg-background max-md:block">
            <ul className="flex pb-6 px-6 flex-col [list-style-type:none] list-outside">
              {ListRow2_data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
            </ul>
          </div>
        </header>
        {children}
        <footer className="block mt-20">
          <div className="block mx-auto px-8 max-w-5xl max-lg:px-6">
            <div className="border-t border-solid border-t-border block pt-12 pb-16">
              <div className="flex justify-between gap-10 max-md:flex-col max-md:[justify-content:initial]">
                <div className="block">
                  <a className="inline text-color-001 [font-family:ABCSynt,_Georgia,_serif] text-base font-medium leading-6 cursor-pointer" href="/">
                    Andrew Ng
                  </a>
                </div>
                <div className="flex gap-16">
                  <ul className="flex flex-col gap-2 [list-style-type:none] list-outside">
                    {ListRow3_data.map((d, i) => <ListRow3 key={i} d={d} />)}
                  </ul>
                  <ul className="flex flex-col gap-2 [list-style-type:none] list-outside">
                    <li className="list-item">
                      <a className="inline text-muted-foreground text-sm leading-5 cursor-pointer" data-ditto-id="style-a" href="https://twitter.com/AndrewYNg" rel="noopener noreferrer" target="_blank">
                        Twitter
                      </a>
                    </li>
                    <li className="list-item">
                      <a className="inline text-muted-foreground text-sm leading-5 cursor-pointer" data-ditto-id="style-a-2" href="https://www.linkedin.com/in/andrewyng/" rel="noopener noreferrer" target="_blank">
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="block mt-12 text-muted-foreground text-xs leading-4">
                © 2026 Andrew Ng
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
