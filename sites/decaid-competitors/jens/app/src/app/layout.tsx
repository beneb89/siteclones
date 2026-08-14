import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Jens Polomski — KI-Marketing, Speaker & Newsletter",
  "description": "KI endlich richtig einsetzen. Strategien, Tools und ehrliche Tests für Marketingteams. Wöchentlich im Posteingang von über 45.000 Marketern.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Jens Polomski — KI-Marketing, Speaker & Newsletter",
    "description": "KI endlich richtig einsetzen. Strategien, Tools und ehrliche Tests für Marketingteams. Wöchentlich im Posteingang von über 45.000 Marketern.",
    "type": "website",
    "siteName": "jens.marketing",
    "images": [
      "https://jens.marketing/opengraph-image?04e280bea2a487fc"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Jens Polomski — KI-Marketing, Speaker & Newsletter",
    "description": "KI endlich richtig einsetzen. Strategien, Tools und ehrliche Tests für Marketingteams. Wöchentlich im Posteingang von über 45.000 Marketern.",
    "creator": "@Jens_Polo",
    "images": [
      "https://jens.marketing/opengraph-image?04e280bea2a487fc"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/5f6afe5da704.ico",
        "type": "image/x-icon",
        "sizes": "48x48"
      },
      {
        "url": "/assets/cloned/images/70992d73b8eb.png",
        "type": "image/png",
        "sizes": "64x64"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/591c3c038ae0.png",
        "type": "image/png",
        "sizes": "180x180"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


import { cn } from "../lib/utils";

function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="block text-sm font-light leading-5 cursor-pointer" href={d.href}>
      {d.label}
    </a>
  );
}

function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <button className={cn("block font-medium text-center cursor-default", styles.className)} type="button">
      {d.label}
    </button>
  );
}

const TextLink_data = [
    { href: "/ki-newsletter", label: "Newsletter" },
    { href: "https://jens.marketing/tools", label: "Tools" },
    { href: "/blog", label: "Blog" }
];

const TextLink_data2 = [
    { href: "https://jens.marketing/ueber-jens-polomski", label: "Über mich" },
    { href: "https://jens.marketing/snipki", label: "snipKI" },
    { href: "https://jens.marketing/kontakt", label: "Kontakt" },
    { href: "https://jens.marketing/uebersicht", label: "Übersicht (Sitemap)" },
    { href: "https://jens.marketing/grounding", label: "Grounding (KI-Fakten)" }
];

const TextLink_data3 = [
    { href: "https://linkedin.com/in/jens-polomski/", label: "LinkedIn" },
    { href: "https://twitter.com/Jens_Polo", label: "X / Twitter" },
    { href: "https://jens.marketing/feed.xml", label: "RSS" }
];

const Tile_data = [
    { label: "Alle akzeptieren" },
    { label: "Nur Notwendige" },
    { label: "Einstellungen" }
];

const TextLink_meta: string[][] = [
    ["style-595"],
    ["style-596"],
    ["style-597"]
];

const TextLink_meta2: string[][] = [
    ["style-598"],
    ["style-599"],
    ["style-600"],
    ["style-601"],
    ["style-602"]
];

const TextLink_meta3: string[][] = [
    ["style-603"],
    ["style-604"],
    ["style-605"]
];

const Tile_meta: string[][] = [
    ["style-607"],
    ["style-608"],
    ["style-611"]
];

const Tile_styles = [
    { className: "py-2.5 px-5 rounded-full text-primary text-[0.8125rem] leading-[1.25rem] bg-color-002" },
    { className: "border border-solid border-color-003 py-2.5 px-5 rounded-full text-color-001 text-[0.8125rem] leading-[1.25rem]" },
    { className: "ml-[12.1875rem] text-color-001 text-xs leading-4.5 underline max-md:ml-15" }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"de"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"jens.marketing\",\"url\":\"", "\",\"logo\":\"", "/logo.png\",\"sameAs\":[\"https://www.wikidata.org/wiki/Q140379356\",\"https://www.linkedin.com/in/jens-polomski/\",\"https://twitter.com/Jens_Polo\",\"https://snipki.de\",\"https://open.spotify.com/show/1l8zx9az9ssVNh0FZXpNBi\",\"https://podcasts.apple.com/us/podcast/newminds-ai-podcast/id1741382643\",\"https://omr.com/de/events/festival/speakers/jens-polomski\",\"https://www.121watt.de/profil/jens-polomski/\",\"https://www.managementcircle.de/experten/jens-polomski.html\",\"https://www.absatzwirtschaft.de/autorInnen/jens-polomski/\",\"https://www.wuv.de/author/jens-polomski/jpo\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"Customer Support\",\"email\":\"hello@jens.marketing\",\"areaServed\":\"DE\",\"availableLanguage\":[\"de\"]}}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Person\",\"@id\":\"", "/#person\",\"name\":\"Jens Polomski\",\"url\":\"", "\",\"image\":\"", "/jens-polomski.jpg\",\"homeLocation\":{\"@type\":\"Place\",\"name\":\"Köln\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"Köln\",\"addressCountry\":\"DE\"}},\"jobTitle\":\"KI-Marketing Berater, Speaker, Newsletter Creator\",\"description\":\"Seit 2009 in Online-Marketing. LinkedIn Top Voice im Bereich KI, Business Punk Kopf 2025, Co-Host des NewMinds.AI Podcasts und Mitgründer der KI-Weiterbildungsplattform snipKI.\",\"sameAs\":[\"https://www.wikidata.org/wiki/Q140379356\",\"https://www.linkedin.com/in/jens-polomski/\",\"https://twitter.com/Jens_Polo\",\"https://snipki.de\",\"https://open.spotify.com/show/1l8zx9az9ssVNh0FZXpNBi\",\"https://podcasts.apple.com/us/podcast/newminds-ai-podcast/id1741382643\",\"https://omr.com/de/events/festival/speakers/jens-polomski\",\"https://www.121watt.de/profil/jens-polomski/\",\"https://www.managementcircle.de/experten/jens-polomski.html\",\"https://www.absatzwirtschaft.de/autorInnen/jens-polomski/\",\"https://www.wuv.de/author/jens-polomski/jpo\"],\"subjectOf\":[{\"@type\":\"CreativeWork\",\"url\":\"https://omr.com/de/reviews/contenthub/omr-tech-check-podcast-jens-polomski\"},{\"@type\":\"CreativeWork\",\"url\":\"https://askomr.podigee.io/272-ki-tools-mit-jens-polomski\"},{\"@type\":\"CreativeWork\",\"url\":\"https://askomr.podigee.io/297-ki-fehler-die-auch-du-machst-mit-jens-polomski\"},{\"@type\":\"CreativeWork\",\"url\":\"https://askomr.podigee.io/172-linkedin-tools-mit-jens-polomski\"},{\"@type\":\"CreativeWork\",\"url\":\"https://podcasts.apple.com/de/podcast/so-entgehst-du-dem-ki-burnout-mit-jens-polomski-von-snipki/id1449948116?i=1000759943922\"},{\"@type\":\"CreativeWork\",\"url\":\"https://open.spotify.com/episode/75optcgKBsTDZ6Z3k3ckn6\"},{\"@type\":\"CreativeWork\",\"url\":\"https://omr.com/en/reviews/contenthub/omr23-can-make-jens-polomski-marketing-jobs-obsolete\"},{\"@type\":\"CreativeWork\",\"url\":\"https://www.business-punk.com/business-punk-koepfe/transformer-2025-diese-koepfe-brechen-regeln-und-setzen-trends/\"}],\"knowsAbout\":[\"KI-Marketing\",\"Künstliche Intelligenz\",\"MarTech\",\"ChatGPT\",\"Marketing Automation\",\"Generative AI\",\"Prompt Engineering\",\"Context Engineering\",\"Newsletter Marketing\",\"AI Tools\",\"B2AI\"],\"award\":[\"LinkedIn Top Voice — KI (2023)\",\"Business Punk Kopf 2025\"],\"affiliation\":{\"@type\":\"Organization\",\"name\":\"snipKI\",\"url\":\"https://snipki.de\"},\"worksFor\":{\"@type\":\"Organization\",\"name\":\"snipKI\",\"url\":\"https://snipki.de\"}}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"name\":\"jens.marketing\",\"url\":\"", "\",\"inLanguage\":\"de-DE\",\"publisher\":{\"@id\":\"", "/#organization\"}}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        {children}
        <footer className="block pt-15 pb-8 px-14 text-color-001 bg-color-005 max-md:pt-12 max-md:px-6">
          <div className="border-b border-solid border-b-color-003 grid max-w-275 mx-auto pb-12 gap-12 grid-cols-[1.5fr_1fr_1fr_1fr_1fr] max-md:gap-y-10 max-md:gap-x-8 max-md:grid-cols-2">
            <div className="block col-start-[span_1] col-end-[span_1] max-md:col-start-[span_2] max-md:col-end-[span_2]">
              <div className="block mb-3 text-color-002 text-lg font-semibold leading-7">
                jens
                <span className="inline text-color-004">
                  .
                </span>
                marketing
              </div>
              <p className="w-full max-w-70 block text-sm font-light leading-[1.375rem]">
                KI-Marketing, Workshops und ein Newsletter für über 45.000 Marketer:innen.
              </p>
            </div>
            <div className="block">
              <div className="block mb-4 text-color-002 text-[0.8125rem] font-medium leading-[1.25rem]">
                Mit Jens arbeiten
              </div>
              <div className="flex flex-col gap-2.5">
                <a className="block text-sm font-light leading-5 cursor-pointer" data-ditto-id="style-a" href="https://jens.marketing/leistungen">
                  Leistungen
                </a>
                <a className="block text-color-006 text-sm font-medium leading-5 cursor-pointer" data-ditto-id="style-a-2" href="https://snipki.de/">
                  Zu snipKI
                </a>
              </div>
            </div>
            <div className="block">
              <div className="block mb-4 text-color-002 text-[0.8125rem] font-medium leading-[1.25rem]">
                Inhalte
              </div>
              <div className="flex flex-col gap-2.5">
                {TextLink_data.map((d, i) => <TextLink key={i} d={d} />)}
              </div>
            </div>
            <div className="block">
              <div className="block mb-4 text-color-002 text-[0.8125rem] font-medium leading-[1.25rem]">
                Über
              </div>
              <div className="flex flex-col gap-2.5">
                {TextLink_data2.map((d, i) => <TextLink key={i} d={d} />)}
              </div>
            </div>
            <div className="block">
              <div className="block mb-4 text-color-002 text-[0.8125rem] font-medium leading-[1.25rem]">
                Social
              </div>
              <div className="flex flex-col gap-2.5">
                {TextLink_data3.map((d, i) => <TextLink key={i} d={d} />)}
              </div>
            </div>
          </div>
          <div className="flex max-w-275 mx-auto pt-6 flex-wrap justify-between items-center gap-3 text-xs leading-4">
            <span className="block">
              {"© 2026 Jens Polomski · Köln · "}
              <a className="inline text-color-006 cursor-pointer" data-ditto-id="style-a-3" href="https://snipki.de/">
                KI-Enablement by snipKI
              </a>
              <span className="inline ml-3 text-color-007">
                · Made mit zu viel Kaffee · Tipp meinen Namen
              </span>
            </span>
            <span className="block">
              <a className="inline cursor-pointer" href="/datenschutz">
                Datenschutz
              </a>
              {" · "}
              <a className="inline cursor-pointer" href="https://jens.marketing/impressum">
                Impressum
              </a>
              {" · "}
              <a className="inline cursor-pointer" href="https://jens.marketing/uebersicht">
                Sitemap
              </a>
              {" · "}
              <button className="inline-block text-center cursor-default" data-ditto-id="style-button-30" type="button">
                Cookie-Einstellungen
              </button>
            </span>
          </div>
        </footer>
        <div className="h-[11.7875rem] flex fixed bottom-0 inset-x-0 z-50 min-w-0 pb-4 px-4 justify-center max-md:h-[293.1px]" aria-label="Cookie-Einstellungen" aria-modal="true" role="dialog">
          <div className="max-w-160 border border-solid border-color-003 block p-6 rounded-2xl text-color-002 bg-color-005 shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-1)_0px_25px_50px_-12px] w-full max-md:p-5">
            <p className="block text-color-001 text-sm font-light leading-[1.375rem]">
              {"Diese Seite nutzt optional "}
              <b className="inline text-color-002 font-medium">
                Vercel Analytics
              </b>
              {", "}
              <b className="inline text-color-002 font-medium">
                Speed Insights
              </b>
              {" und "}
              <b className="inline text-color-002 font-medium">
                Google Tag Manager
              </b>
              {" zur Reichweiten- und Performance-Messung. Vor deiner Zustimmung wird nichts geladen. "}
              <a className="inline text-color-002 underline cursor-pointer" data-ditto-id="style-a-4" href="/datenschutz">
                Mehr in der Datenschutzerklärung
              </a>
              .
            </p>
            <div className="flex mt-4 flex-wrap items-center gap-2">
              {Tile_data.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
