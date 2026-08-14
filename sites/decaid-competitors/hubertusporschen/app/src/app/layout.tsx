import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Keynote Speaker KI Mittelstand | Dr. Hubertus Porschen",
  "description": "Keynote Speaker für Künstliche Intelligenz im Mittelstand. 600+ Vorträge, 11-facher Gründer, eigene Umsetzungs-GmbH. Jetzt Keynote anfragen.",
  "robots": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Keynote Speaker KI Mittelstand | Dr. Hubertus Porschen",
    "description": "Keynote Speaker für Künstliche Intelligenz im Mittelstand. 600+ Vorträge, 11-facher Gründer, eigene Umsetzungs-GmbH. Jetzt Keynote anfragen.",
    "type": "website",
    "siteName": "Dr. Hubertus Porschen",
    "url": "/",
    "images": [
      "https://hubertusporschen.com/og/startseite.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Keynote Speaker KI Mittelstand | Dr. Hubertus Porschen",
    "description": "Keynote Speaker für Künstliche Intelligenz im Mittelstand. 600+ Vorträge, 11-facher Gründer, eigene Umsetzungs-GmbH. Jetzt Keynote anfragen.",
    "images": [
      "https://hubertusporschen.com/og/startseite.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/d40001c27aaf.png",
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
    <html lang={"de"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebSite\",\"@id\":\"", "/#website\",\"url\":\"", "/\",\"name\":\"Dr. Hubertus Porschen\",\"description\":\"Keynote Speaker für KI im deutschen Mittelstand\",\"inLanguage\":\"de-DE\",\"publisher\":{\"@id\":\"", "/#organization\"}},{\"@type\":\"Person\",\"@id\":\"", "/#person\",\"name\":\"Dr. Hubertus Porschen\",\"givenName\":\"Hubertus\",\"familyName\":\"Porschen\",\"honorificPrefix\":\"Dr.\",\"jobTitle\":[\"Keynote Speaker\",\"KI-Experte\",\"Unternehmer\",\"Autor\"],\"description\":\"Dr. Hubertus Porschen ist seit 2013 Keynote Speaker für Künstliche Intelligenz im deutschen Mittelstand. Über 600 Vorträge in 20+ Branchen DACH-weit. 11-facher Unternehmensgründer, promovierter Ökonom. Autor des Buches 'Digitaler Suizid'. Sitz in Köln.\",\"url\":\"", "/ueber-hubertus-porschen/\",\"image\":\"", "/images/portrait/hubertus_2022_69.jpg\",\"worksFor\":{\"@id\":\"", "/#organization\"},\"founder\":[{\"@id\":\"", "/#organization\"},{\"@id\":\"https://ai-transformation-partners.com/#organization\"}],\"alumniOf\":{\"@type\":\"CollegeOrUniversity\",\"name\":\"Philipps-Universität Marburg\"},\"homeLocation\":{\"@type\":\"Place\",\"name\":\"Köln, Deutschland\"},\"knowsAbout\":[\"Künstliche Intelligenz\",\"Generative KI\",\"ChatGPT\",\"KI im Mittelstand\",\"KI-Strategie\",\"KI-Beratung\",\"KI-Workshops\",\"Digitale Transformation\",\"Digitalisierung\",\"Unternehmertum\",\"Change Management\",\"Leadership\",\"Verhandlungsführung\",\"Mittelstand\"],\"award\":[\"Top 100 Speakers Excellence 2026\"],\"sameAs\":[\"https://www.linkedin.com/in/hubertus-porschen/\",\"https://www.instagram.com/hubertusporschen\",\"https://www.youtube.com/@HubertusPorschen\",\"https://www.facebook.com/hubertusp\",\"https://www.tiktok.com/@hubertus.porschen\",\"https://www.amazon.de/stores/author/B07HY3HN72\",\"https://www.provenexpert.com/de-de/dr-hubertus-porschen-gmbh/\"],\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Schönhauser Str. 21\",\"postalCode\":\"50968\",\"addressLocality\":\"Köln\",\"addressCountry\":\"DE\"}},{\"@type\":\"Organization\",\"@id\":\"", "/#organization\",\"name\":\"Dr. Hubertus Porschen GmbH\",\"url\":\"", "/\",\"founder\":{\"@id\":\"", "/#person\"},\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Schönhauser Str. 21\",\"postalCode\":\"50968\",\"addressLocality\":\"Köln\",\"addressCountry\":\"DE\"},\"email\":\"info@hubertusporschen.com\",\"telephone\":\"+49 177 6105244\",\"areaServed\":[{\"@type\":\"Country\",\"name\":\"Deutschland\"},{\"@type\":\"Country\",\"name\":\"Österreich\"},{\"@type\":\"Country\",\"name\":\"Schweiz\"}],\"hasOfferCatalog\":{\"@type\":\"OfferCatalog\",\"name\":\"Leistungen\",\"itemListElement\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@id\":\"", "/#service-keynote\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@id\":\"", "/#service-workshop\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@id\":\"", "/#service-beratung\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@id\":\"", "/#service-crashkurs\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@id\":\"", "/#service-audit\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@id\":\"", "/#service-schulung\"}}]}},{\"@type\":\"Organization\",\"@id\":\"https://ai-transformation-partners.com/#organization\",\"name\":\"AI Transformation Partners GmbH\",\"alternateName\":\"AITP\",\"url\":\"https://ai-transformation-partners.com/\",\"founder\":[{\"@id\":\"", "/#person\"},{\"@type\":\"Person\",\"name\":\"Kai Michael Schäfer\"}],\"description\":\"Strategische und operative KI-Beratung für den deutschen Mittelstand. 30 Prozent Technologie, 70 Prozent Kultur.\",\"areaServed\":[{\"@type\":\"Country\",\"name\":\"Deutschland\"},{\"@type\":\"Country\",\"name\":\"Österreich\"},{\"@type\":\"Country\",\"name\":\"Schweiz\"}]},{\"@type\":\"Service\",\"@id\":\"", "/#service-keynote\",\"name\":\"KI-Keynote\",\"serviceType\":\"Keynote-Vortrag\",\"provider\":{\"@id\":\"", "/#person\"},\"areaServed\":[{\"@type\":\"Country\",\"name\":\"Deutschland\"},{\"@type\":\"Country\",\"name\":\"Österreich\"},{\"@type\":\"Country\",\"name\":\"Schweiz\"}],\"audience\":{\"@type\":\"BusinessAudience\",\"audienceType\":\"Mittelstand, Vorstände, Inhaber, Familienunternehmen\"},\"description\":\"Keynote-Vorträge zu Künstlicher Intelligenz im Mittelstand. Individuell zugeschnitten auf Branche, Publikum und Format. 30 bis 180 Minuten, deutsch oder englisch. Über 600 Keynotes seit 2013.\",\"url\":\"", "/keynote-speaker/\"},{\"@type\":\"Service\",\"@id\":\"", "/#service-workshop\",\"name\":\"KI-Workshops\",\"serviceType\":\"Inhouse-Workshop\",\"provider\":{\"@id\":\"", "/#person\"},\"areaServed\":[{\"@type\":\"Country\",\"name\":\"Deutschland\"},{\"@type\":\"Country\",\"name\":\"Österreich\"},{\"@type\":\"Country\",\"name\":\"Schweiz\"}],\"audience\":{\"@type\":\"BusinessAudience\",\"audienceType\":\"Geschäftsführung, Führungskräfte, Mitarbeiter im Mittelstand\"},\"description\":\"Inhouse-KI-Workshops vom halbtägigen Impuls bis zum mehrmonatigen Deep-Dive. Vom Azubi bis zur Geschäftsleitung KI-fit, mit Branchenzuschnitt.\",\"url\":\"", "/workshops/\"},{\"@type\":\"Service\",\"@id\":\"", "/#service-beratung\",\"name\":\"KI-Beratung und Umsetzung\",\"serviceType\":\"Strategische KI-Beratung und Implementierung\",\"provider\":{\"@id\":\"", "/#person\"},\"areaServed\":[{\"@type\":\"Country\",\"name\":\"Deutschland\"},{\"@type\":\"Country\",\"name\":\"Österreich\"},{\"@type\":\"Country\",\"name\":\"Schweiz\"}],\"audience\":{\"@type\":\"BusinessAudience\",\"audienceType\":\"Mittelständische Unternehmen mit 50 bis 3.000 Mitarbeitern\"},\"description\":\"Strategische KI-Beratung und operative Implementierung für den Mittelstand. 30 Prozent Technologie, 70 Prozent Kultur.\",\"url\":\"", "/beratung/\"},{\"@type\":\"Service\",\"@id\":\"", "/#service-crashkurs\",\"name\":\"C-Level KI-Crashkurs\",\"serviceType\":\"Online-Crashkurs\",\"provider\":{\"@id\":\"", "/#person\"},\"areaServed\":[{\"@type\":\"Country\",\"name\":\"Deutschland\"},{\"@type\":\"Country\",\"name\":\"Österreich\"},{\"@type\":\"Country\",\"name\":\"Schweiz\"}],\"audience\":{\"@type\":\"BusinessAudience\",\"audienceType\":\"Geschäftsführer, Unternehmer, Selbstständige\"},\"description\":\"Kompakter KI-Einstieg für Geschäftsführer und Selbstständige. Selbstlernformat mit Community, direkt umsetzbare Use-Cases.\",\"url\":\"", "/c-level-crashkurs/\"},{\"@type\":\"Service\",\"@id\":\"", "/#service-audit\",\"name\":\"KI-Audit\",\"serviceType\":\"KI-Reifegrad-Analyse\",\"provider\":{\"@id\":\"", "/#organization\"},\"areaServed\":[{\"@type\":\"Country\",\"name\":\"Deutschland\"},{\"@type\":\"Country\",\"name\":\"Österreich\"},{\"@type\":\"Country\",\"name\":\"Schweiz\"}],\"audience\":{\"@type\":\"BusinessAudience\",\"audienceType\":\"Mittelständische Unternehmen\"},\"description\":\"KI-Reifegrad-Analyse für den Mittelstand. Standortbestimmung, Use-Case-Identifikation, Datenlage-Bewertung und Handlungsempfehlung.\",\"url\":\"", "/ki-audit/\"},{\"@type\":\"Service\",\"@id\":\"", "/#service-schulung\",\"name\":\"KI-Schulung für Führungskräfte\",\"serviceType\":\"Führungskräfte-Schulung\",\"provider\":{\"@id\":\"", "/#person\"},\"areaServed\":[{\"@type\":\"Country\",\"name\":\"Deutschland\"},{\"@type\":\"Country\",\"name\":\"Österreich\"},{\"@type\":\"Country\",\"name\":\"Schweiz\"}],\"audience\":{\"@type\":\"BusinessAudience\",\"audienceType\":\"Führungskräfte, C-Level, Abteilungsleiter\"},\"description\":\"Gezielte KI-Schulung für Führungskräfte im Mittelstand. Strategisches Verständnis, Entscheidungsraster, Governance-Kompetenz.\",\"url\":\"", "/workshops/\"},{\"@type\":\"Book\",\"@id\":\"", "/#book\",\"name\":\"Digitaler Suizid\",\"author\":{\"@id\":\"", "/#person\"},\"isbn\":\"978-3-942924-30-6\",\"datePublished\":\"2018\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"Status Verlag\"},\"inLanguage\":\"de-DE\",\"description\":\"Dr. Hubertus Porschen zeigt, weshalb der deutsche Wohlstand am seidenen Faden hängt, wenn die Digitalisierung weiter verschlafen wird.\",\"url\":\"", "/buch/\"},{\"@type\":\"VideoObject\",\"@id\":\"", "/#video-keynote-impuls\",\"name\":\"Dr. Hubertus Porschen — Keynote-Impuls KI im Mittelstand\",\"description\":\"Impuls-Ausschnitt einer Keynote von Dr. Hubertus Porschen zu Künstlicher Intelligenz im deutschen Mittelstand.\",\"thumbnailUrl\":\"https://i.ytimg.com/vi/K61hvH8lRUQ/maxresdefault.jpg\",\"uploadDate\":\"2025-01-01\",\"contentUrl\":\"https://www.youtube.com/watch?v=K61hvH8lRUQ\",\"embedUrl\":\"https://www.youtube-nocookie.com/embed/K61hvH8lRUQ\",\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"de-DE\"},{\"@type\":\"VideoObject\",\"@id\":\"", "/#video-keynote-full\",\"name\":\"Dr. Hubertus Porschen — Komplette Keynote\",\"description\":\"Vollständige Keynote von Dr. Hubertus Porschen zu Künstlicher Intelligenz im Mittelstand. Praxisorientierte Impulse für Vorstände, Geschäftsführer und Inhaber.\",\"thumbnailUrl\":\"https://i.ytimg.com/vi/jQWBU9-9fQk/maxresdefault.jpg\",\"uploadDate\":\"2025-01-01\",\"contentUrl\":\"https://www.youtube.com/watch?v=jQWBU9-9fQk\",\"embedUrl\":\"https://www.youtube-nocookie.com/embed/jQWBU9-9fQk\",\"publisher\":{\"@id\":\"", "/#organization\"},\"inLanguage\":\"de-DE\"}]}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="cn0">
        <div className="border-b border-solid border-b-border flex py-[0.6625rem] px-16 justify-between items-center text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.8px] uppercase bg-color-002 h-[2.375rem] max-md:py-2.5 max-md:px-5 max-md:leading-4 max-lg:h-11 md:max-lg:px-[2.4rem]" id="topBanner">
          <span className="block">
            <b className="inline text-primary font-semibold">
              MMXXVI
            </b>
            {" · Köln · Dr. Hubertus Porschen GmbH"}
          </span>
          {" "}
          <a className="flex items-center gap-[0.4rem] cursor-pointer max-md:gap-1.5" href="https://www.provenexpert.com/de-de/dr-hubertus-porschen-gmbh/" rel="noopener" target="_blank">
            {" "}
            <span className="block text-accent tracking-[normal]" aria-hidden="true">
              ★★★★★
            </span>
            {" "}
            <span className="block text-primary font-semibold">
              4.88
            </span>
            {" "}
            <span className="block max-md:hidden">
              · 377 Bewertungen
            </span>
            {" "}
          </a>
          {" "}
        </div>
        {children}
        <div className="w-0 h-0 block fixed top-[854.2625rem] left-0 z-2147480000 text-base leading-[1.125rem]" id="cc-main">
          <div className="inline">
            <div className="h-[21.1rem] border border-solid border-color-003 flex fixed right-209.5 bottom-[1.0625rem] left-[1.0625rem] z-1 max-w-102 mr-[1.0625rem] flex-col overflow-hidden bg-color-002 shadow-[var(--clr-0)_0px_8px_24px_0px] max-md:h-[25.525rem] max-md:right-0 max-md:bottom-2 max-md:left-2 max-md:mr-2 max-md:max-w-none md:max-lg:right-81.5 2xl:right-369.5" aria-describedby="cm__desc" aria-hidden="false" aria-labelledby="cm__title" aria-modal="true" role="dialog">
              <div className="block" />
              <div className="h-full flex relative flex-col justify-between">
                <div className="flex pt-[1.0625rem] flex-col justify-center flex-1 max-md:pt-4">
                  <h2 className="block px-[22.1px] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.0625rem] font-semibold leading-[1.1875rem] tracking-[-0.17px] max-md:px-[1.1rem]" id="cm__title">
                    Wir nutzen Cookies
                  </h2>
                  <p className="block max-h-80 mt-[0.9625rem] pb-3.5 px-[22.1px] overflow-auto text-muted-foreground text-sm leading-[1.4375rem] max-md:max-h-[20.3rem] max-md:px-[1.1rem] md:max-lg:max-h-[25.6rem] 2xl:max-h-108" id="cm__desc">
                    {"Wir verwenden Cookies und ähnliche Technologien, um die Nutzung unserer Website zu analysieren und Werbung gezielt auszuspielen. Unter „Einstellungen\" kannst du einzelne Kategorien an- oder abwählen. Weitere Informationen findest du in unserer "}
                    <a className="inline relative overflow-hidden text-primary font-semibold leading-[1.0625rem] underline [background-size:0px_1px] [background-position:0px_100%] bg-no-repeat cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--primary), var(--primary))" }} data-ditto-id="style-a-9" href="/datenschutz">
                      Datenschutzerklärung
                    </a>
                    .
                  </p>
                </div>
                <div className="border-t border-solid border-t-color-003 flex py-[1.0625rem] px-[22.1px] flex-col justify-center max-md:py-4 max-md:px-[1.1rem]">
                  <div className="grid [grid-auto-flow:column] [grid-auto-columns:minmax(0px,_1fr)] grid-cols-2 max-md:flex max-md:flex-col max-md:grid-cols-[initial]">
                    <button className="h-[2.8125rem] min-h-10.5 border border-solid border-primary block py-3.5 px-5.5 overflow-hidden text-color-002 text-xs font-semibold leading-[0.9375rem] tracking-[0.48px] text-center uppercase bg-primary cursor-pointer max-md:grow" data-ditto-id="style-button-7" type="button">
                      <span className="inline pointer-events-none">
                        Alle akzeptieren
                      </span>
                    </button>
                    <button className="h-[2.8125rem] min-h-10.5 border border-solid border-primary block ml-[0.4rem] py-3.5 px-5.5 overflow-hidden text-color-002 text-xs font-semibold leading-[0.9375rem] tracking-[0.48px] text-center uppercase bg-primary cursor-pointer max-md:mt-1.5 max-md:grow max-md:ml-0" data-ditto-id="style-button-8" type="button">
                      <span className="inline pointer-events-none">
                        Nur notwendige
                      </span>
                    </button>
                  </div>
                  <div className="grid mt-[0.4rem] [grid-auto-flow:column] [grid-auto-columns:minmax(0px,_1fr)] grid-cols-[minmax(0,_1fr)] max-md:flex max-md:mt-1.5 max-md:flex-col max-md:grid-cols-[initial]">
                    <button className="h-[2.8125rem] min-h-10.5 border border-solid border-primary block py-3.5 px-5.5 overflow-hidden text-primary text-xs font-semibold leading-[0.9375rem] tracking-[0.48px] text-center uppercase cursor-pointer max-md:grow" data-ditto-id="style-button-9" type="button">
                      <span className="inline pointer-events-none">
                        Einstellungen
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
