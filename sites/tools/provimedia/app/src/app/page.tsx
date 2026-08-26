import MediaTile, { type MediaTileData } from "./components/media-tile";
import Icon from "./svgs/svg-icon";
import TextLink, { type TextLinkData } from "./components/text-link";
import Tile, { type TileData } from "./components/tile";
import Logo, { type LogoData } from "./components/logo";
import Tile2, { type Tile2Data } from "./components/tile2";
import Tile3, { type Tile3Data } from "./components/tile3";
import MediaTile2, { type MediaTile2Data } from "./components/media-tile2";
import FeatureCard, { type FeatureCardData } from "./components/feature-card";
import Icon2 from "./svgs/svg-icon2";
import ListRow, { type ListRowData } from "./components/list-row";
import ListRow2, { type ListRow2Data } from "./components/list-row2";
import Icon3 from "./svgs/svg-icon3";
import Icon4 from "./svgs/svg-icon4";
import Icon5 from "./svgs/svg-icon5";
import Icon6 from "./svgs/svg-icon6";
import ListRow3, { type ListRow3Data } from "./components/list-row3";
import TextLink2, { type TextLink2Data } from "./components/text-link2";
import Icon7 from "./svgs/svg-icon7";
import TextLink3, { type TextLink3Data } from "./components/text-link3";
import { MediaTile_styles, TextLink_styles, Logo_styles, Tile2_styles, MediaTile2_styles, FeatureCard_styles, ListRow_styles, ListRow_styles2, ListRow2_styles, ListRow_styles3, ListRow3_styles, TextLink3_styles } from "./_styles";

const MediaTile_data: MediaTileData[] = [
    { href: "/leistungen", label: " Leistungen ", ariahaspopup: "true", ariaLabel: "Untermenü Leistungen" },
    { href: "/projekte", label: " Projekte ", ariahaspopup: "true", ariaLabel: "Untermenü Projekte" },
    { href: "/ueber-uns", label: " Unternehmen ", ariahaspopup: "true", ariaLabel: "Untermenü Unternehmen" },
    { href: "/ki-zertifikat", label: "KI-Zertifikat", ariaLabel: "Untermenü KI-Zertifikat" },
    { href: "/dsgvo-schulung", label: "DSGVO-Schulung", ariaLabel: "Untermenü DSGVO-Schulung" },
    { href: "/company-audit", label: "Company Audit", ariaLabel: "Untermenü Company Audit" },
    { href: "/code-guardian", label: "Code Guardian", ariaLabel: "Untermenü Code Guardian" },
    { href: "/community", label: "Community", ariaLabel: "Untermenü Community" }
];
const TextLink_data: TextLinkData[] = [
    { ariapressed: "true", label: "Chatbot-Antwort" },
    { ariapressed: "false", label: "Dokument-Zusammenfassung" },
    { ariapressed: "false", label: "RAG-Suche mit Kontext" },
    { ariapressed: "false", label: "Code-Assistent" }
];
const Tile_data: TileData[] = [
    { htmlFor: "llm-requests", text: " Anfragen pro Monat ", id: "llm-requests", max: "10000000", min: "1" },
    { htmlFor: "llm-input-tokens", text: " Ø Input-Tokens / Anfrage ", id: "llm-input-tokens", max: "1000000", min: "0" },
    { htmlFor: "llm-output-tokens", text: " Ø Output-Tokens / Anfrage ", id: "llm-output-tokens", max: "1000000", min: "0" }
];
const Logo_data: LogoData[] = [
    { value: "claude-opus", text: "Claude Opus 4.8", text2: "Anthropic" },
    { value: "claude-sonnet", text: "Claude Sonnet 5", text2: "Anthropic" },
    { value: "claude-haiku-4-5", text: "Claude Haiku 4.5", text2: "Anthropic" },
    { value: "gpt-5", text: "GPT-5", text2: "OpenAI" },
    { value: "gpt-5-mini", text: "GPT-5 mini", text2: "OpenAI" },
    { value: "gemini-2-5-pro", text: "Gemini 2.5 Pro", text2: "Google" },
    { value: "mistral-large", text: "Mistral Large", text2: "Mistral" }
];
const Tile2_data: Tile2Data[] = [
    { description: "GPT-5 mini", description2: "OpenAI", text: " Günstigstes Modell ", text2: "8,00 $", text3: "7,04 €" },
    { description: "Claude Haiku 4.5", description2: "Anthropic", text: "× 2,9", text2: "23,00 $", text3: "20,24 €" },
    { description: "Mistral Large", description2: "Mistral", text: "× 4,3", text2: "34,00 $", text3: "29,92 €" },
    { description: "GPT-5", description2: "OpenAI", text: "× 5,0", text2: "40,00 $", text3: "35,20 €" },
    { description: "Gemini 2.5 Pro", description2: "Google", text: "× 5,0", text2: "40,00 $", text3: "35,20 €" },
    { description: "Claude Sonnet 5", description2: "Anthropic", text: "× 8,6", text2: "69,00 $", text3: "60,72 €" },
    { description: "Claude Opus 4.8", description2: "Anthropic", text: "× 14,4", text2: "115,00 $", text3: "101,20 €" }
];
const Tile3_data: Tile3Data[] = [
    { text: "Claude Haiku 4.5", text2: "Anthropic", text3: "23,00 $", text4: "20,24 € ", text5: "× 2,9" },
    { text: "Mistral Large", text2: "Mistral", text3: "34,00 $", text4: "29,92 € ", text5: "× 4,3" },
    { text: "GPT-5", text2: "OpenAI", text3: "40,00 $", text4: "35,20 € ", text5: "× 5,0" },
    { text: "Gemini 2.5 Pro", text2: "Google", text3: "40,00 $", text4: "35,20 € ", text5: "× 5,0" },
    { text: "Claude Sonnet 5", text2: "Anthropic", text3: "69,00 $", text4: "60,72 € ", text5: "× 8,6" },
    { text: "Claude Opus 4.8", text2: "Anthropic", text3: "115,00 $", text4: "101,20 € ", text5: "× 14,4" }
];
const MediaTile2_data: MediaTile2Data[] = [
    { text: "Was kostet die ChatGPT-API pro Monat?", description: "Das hängt von Anfragen und Token-Volumen ab. Beispiel: Ein Chatbot mit 10.000 Anfragen pro Monat (durchschnittlich 800 Input- und 300 Output-Tokens je Anfrage) kostet mit GPT-5 (1,25 USD Input / 10 USD Output pro 1 Mio. Tokens) rund 40 US-Dollar im Monat, mit GPT-5 mini rund 8 US-Dollar. Die Formel: Anfragen × (Input-Tokens ÷ 1 Mio. × Input-Preis + Output-Tokens ÷ 1 Mio. × Output-Preis)." },
    { text: "Wie berechnen sich die Kosten einer LLM-API?", description: "Alle großen Anbieter rechnen pro Token ab, getrennt nach Input (Ihr Prompt inklusive Kontext) und Output (die Antwort des Modells). Output-Tokens sind dabei deutlich teurer als Input-Tokens — bei den gängigen Modellen um den Faktor 3 bis 8. Die Monatskosten ergeben sich aus: Anzahl der Anfragen × (Input-Tokens ÷ 1 Mio. × Input-Preis + Output-Tokens ÷ 1 Mio. × Output-Preis). Genau diese Rechnung führt der Rechner oben für alle ausgewählten Modelle gleichzeitig aus." },
    { text: "Was ist ein Token und wie viele Tokens hat ein Text?", description: "Ein Token ist die kleinste Abrechnungseinheit eines Sprachmodells — im Deutschen entspricht ein Token grob 3 bis 4 Zeichen. Eine DIN-A4-Seite Text mit rund 3.000 Zeichen sind etwa 750 bis 1.000 Tokens. 1 Million Tokens — die übliche Preiseinheit der Anbieter — entsprechen damit ungefähr 1.000 bis 1.300 Seiten Text." },
    { text: "Welches LLM ist am günstigsten?", description: "Für einfache, hochvolumige Aufgaben sind Effizienz-Modelle am günstigsten: GPT-5 mini (0,25 USD Input / 2 USD Output pro 1 Mio. Tokens) und Claude Haiku 4.5 (1 USD / 5 USD). Frontier-Modelle wie die Claude-Opus-Klasse (5 USD / 25 USD) lohnen sich nur für komplexes Reasoning oder anspruchsvolle Code-Aufgaben. Beim identischen Chatbot-Workload mit 10.000 Anfragen pro Monat liegt der Unterschied bei 23 US-Dollar (Haiku 4.5) gegenüber 115 US-Dollar (Opus-Klasse) — Faktor 5." },
    { text: "Wie kann ich meine LLM-API-Kosten senken?", description: "Die fünf wirksamsten Hebel: Erstens ein kleineres Modell oder Model-Routing einsetzen — einfache Teilaufgaben ans günstige Modell, nur komplexe ans teure. Zweitens Prompt-Caching nutzen: wiederholte Prompt-Teile werden je nach Anbieter mit bis zu 90 Prozent Rabatt abgerechnet. Drittens Batch-APIs für Nicht-Echtzeit-Jobs verwenden (typischerweise rund 50 Prozent Rabatt). Viertens System-Prompts und mitgeschickten Kontext kürzen, denn Input-Tokens zahlen bei jeder Anfrage erneut ein. Fünftens die Output-Länge begrenzen, weil Output-Tokens am teuersten sind." }
];
const FeatureCard_data: FeatureCardData[] = [
    { href: "/tools/ki-schulungspflicht-check", title: "KI-Schulungspflicht-Check", description: "Sind Ihre Mitarbeiter schulungspflichtig nach dem EU AI Act? In 8 Fragen zur Antwort." },
    { href: "/tools/ki-wissenstest", title: "KI-Wissenstest für Teams", description: "10 Fragen, 3 Minuten: Wie sicher nutzt Ihr Team KI? Mit Sofort-Auswertung und Level-Einstufung." },
    { href: "/tools/compliance-quick-check", title: "Compliance-Quick-Check", description: "Welche gesetzlichen Pflichten gelten für Ihr Unternehmen? 8 Fragen, sofortiges Ergebnis – ohne Anmeldung." }
];
const ListRow_data: ListRowData[] = [
    { href: "/leistungen/ki-entwicklung", label: "KI-Entwicklung" },
    { href: "/leistungen/saas-entwicklung", label: "SaaS-Entwicklung" },
    { href: "/leistungen/webdesign", label: "Webdesign" },
    { href: "/leistungen/seo-marketing", label: "SEO & Marketing" },
    { href: "/leistungen/portal-entwicklung", label: "Portal-Entwicklung" },
    { href: "/leistungen/google-ads", label: "Google Ads" }
];
const ListRow_data2: ListRowData[] = [
    { href: "/projekte", label: "Alle Projekte" },
    { href: "/referenzen", label: "Referenzen" },
    { href: "/blog", label: "Blog" },
    { href: "/wissen", label: "Wissensgraph" },
    { href: "/glossar", label: "Tech-Glossar" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/studien/ki-programmierung-2025", label: "Studie: KI-Programmierung 2025" },
    { href: "/ki-arbeitgeber-token", label: "KI Arbeitgeber Token" },
    { href: "/code-guardian", label: "Code Guardian" },
    { href: "/community", label: "Community" }
];
const ListRow2_data: ListRow2Data[] = [
    { href: "/ki-zertifikat", label: "KI-Zertifikat" },
    { href: "/ki-schulung", label: "KI-Schulung" },
    { href: "/ki-weiterbildung", label: "KI-Weiterbildung" },
    { href: "/ki-fuehrerschein", label: "KI-Führerschein" },
    { href: "/eu-ai-act-schulung", label: "EU AI Act Schulung" },
    { href: "/ki-schulung-mitarbeiter", label: "KI-Schulung Mitarbeiter" },
    { href: "/chatgpt-schulung", label: "ChatGPT Schulung" },
    { href: "/ki-kurs-online", label: "KI-Kurs Online" },
    { href: "/ki-schulung-stuttgart", label: "KI-Schulung Stuttgart" },
    { href: "/ki-compliance", label: "KI-Compliance" },
    { href: "/eu-ai-act-anforderungen", label: "EU AI Act Anforderungen" }
];
const ListRow_data3: ListRowData[] = [
    { href: "/webdesign", label: "Webdesign" },
    { href: "/softwareentwicklung", label: "Softwareentwicklung" },
    { href: "/seo-agentur", label: "SEO Agentur" },
    { href: "/ki-entwicklung", label: "KI-Entwicklung" },
    { href: "/webagentur", label: "Webagentur" },
    { href: "/app-entwicklung", label: "App-Entwicklung" },
    { href: "/online-marketing", label: "Online Marketing" },
    { href: "/consulting", label: "IT-Consulting" },
    { href: "/google-ads-agentur", label: "Google Ads Agentur" },
    { href: "/performance-marketing-agentur", label: "Performance Marketing Agentur" }
];
const ListRow3_data: ListRow3Data[] = [
    { href: "/tools/ki-schulungspflicht-check", label: "KI-Schulungspflicht-Check" },
    { href: "/tools/ki-wissenstest", label: "KI-Wissenstest für Teams" },
    { href: "/tools/google-ads-budget-rechner", label: "Google-Ads-Budget-Rechner" },
    { href: "/tools/roas-rechner", label: "ROAS-Rechner" },
    { href: "/tools/llm-kosten-rechner", label: "LLM-API-Kostenrechner" },
    { href: "/tools/serp-snippet-optimizer", label: "SERP-Snippet-Optimizer" },
    { href: "/tools/compliance-quick-check", label: "Compliance-Quick-Check" },
    { href: "/tools/compliance-fristen-kalender", label: "Compliance-Fristen-Kalender" },
    { href: "/tools/geo-check", label: "GEO-Check (KI-Sichtbarkeit)" },
    { href: "/tools/ki-richtlinie-generator", label: "KI-Richtlinien-Generator" },
    { href: "/tools/diashow-erstellen", label: "Diashow erstellen" },
    { href: "/tools/bilder-komprimieren", label: "Bilder komprimieren" },
    { href: "/tools/video-komprimieren", label: "Video komprimieren" },
    { href: "/tools/utm-builder", label: "UTM-Link-Builder" },
    { href: "/tools/website-kosten-rechner", label: "Website-Kosten-Rechner" },
    { href: "/tools/bfsg-check", label: "BFSG-Check" }
];
const TextLink2_data: TextLink2Data[] = [
    { href: "/impressum", label: " Impressum " },
    { href: "/datenschutz", label: " Datenschutz " },
    { href: "/agb", label: " AGB " },
    { href: "/code-guardian/kuendigen", label: " Verträge hier kündigen " },
    { href: "/barrierefreiheit", label: " Barrierefreiheit " },
    { href: "/ki-transparenz", label: " KI-Transparenz " },
    { href: "/widerruf", label: " Widerruf " }
];
const TextLink3_data: TextLink3Data[] = [
    { label: " Nur notwendige " },
    { label: " Einstellungen " },
    { label: " Alle akzeptieren " }
];

export default function Page() {
  return (
    <>
      <div className="block" id="app">
        <div className="min-h-screen flex flex-col bg-background">
          <a className="w-px h-px block absolute top-0 left-0 min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] cursor-pointer focus:bg-foreground focus:border-background focus:shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-2)_0px_10px_15px_-3px,var(--clr-2)_0px_4px_6px_-4px] focus:text-background focus:outline-background focus:[text-decoration-color:var(--background)]" href="#main-content">
            {" Zum Inhalt springen "}
          </a>
          <div className="block">
            <header className="h-[5.0625rem] border-b border-solid border-b-border block fixed inset-x-0 z-50 bg-clr-0 [backdrop-filter:blur(24px)]">
              <nav className="block px-8 mx-auto max-w-7xl max-md:px-4 md:max-lg:px-6" data-component="nav" aria-label="Hauptnavigation">
                <div className="flex justify-between items-center h-20">
                  <a className="h-7 block shrink-0 cursor-pointer" data-component="link" aria-label="Provimedia Startseite" href="/">
                    <span className="inline text-xl font-bold leading-7 tracking-[-0.5px]">
                      {" PROVIMEDIA "}
                    </span>
                  </a>
                  <div className="flex items-center gap-1 whitespace-nowrap text-nowrap max-lg:hidden">
                    {MediaTile_data.map((d, i) => <MediaTile key={i} d={d} styles={MediaTile_styles[i]} />)}
                  </div>
                  <button className="hidden relative z-50 min-w-0 rounded-xl justify-center items-center text-center cursor-default w-11 h-11 max-lg:flex" aria-expanded="false" aria-label="Menue oeffnen">
                    <div className="flex flex-col gap-[0.3125rem] w-[1.375rem]">
                      <span className="block min-w-0 rounded-full bg-foreground h-[2.5px]" />
                      <span className="block min-w-0 rounded-full bg-foreground h-[2.5px]" />
                      <span className="block min-w-0 rounded-full bg-foreground h-[2.5px]" />
                    </div>
                  </button>
                </div>
              </nav>
            </header>
          </div>
          <main className="block flex-1" id="main-content">
            <div className="block bg-background">
              <section className="block mx-auto pt-12 pb-8 px-8 max-w-4xl max-md:pt-8 max-md:px-4 md:max-lg:px-6">
                <nav className="block mb-6 text-muted-foreground text-sm leading-5" data-component="nav" aria-label="Breadcrumb">
                  <ol className="flex items-center gap-1 overflow-auto whitespace-nowrap text-nowrap [list-style-type:none] list-outside">
                    <li className="flex items-center">
                      <a className="flex items-center gap-1 cursor-pointer hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)] focus:border-muted-foreground focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" href="/">
                        <Icon />
                        <span className="block">
                          Startseite
                        </span>
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="block mx-2 text-color-003">
                        /
                      </span>
                      <a className="block cursor-pointer hover:border-foreground hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)] focus:border-muted-foreground focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]" data-component="link" href="/tools">
                        Tools
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="block mx-2 text-color-003">
                        /
                      </span>
                      <span className="block text-foreground font-medium">
                        LLM-API-Kostenrechner
                      </span>
                    </li>
                  </ol>
                </nav>
                <span className="inline-block py-1 px-3 rounded-full text-primary text-xs font-semibold leading-4 tracking-[0.6px] uppercase bg-surface">
                  {" Kostenloses Tool "}
                </span>
                <h1 className="block mt-4 text-5xl font-bold leading-12 text-balance max-md:text-3xl max-md:leading-9" data-component="heading">
                  LLM-API-Kostenrechner
                </h1>
                <p className="w-full block mt-4 text-muted-foreground text-lg leading-[1.8125rem] text-pretty max-w-2xl">
                  Was kostet die GPT-, Claude- oder Gemini-API? Anfragen und Tokens eingeben, Monatskosten in USD und Euro vergleichen – kostenlos und ohne Anmeldung.
                </p>
              </section>
              <div className="block mx-auto px-8 max-w-4xl max-md:px-4 md:max-lg:px-6">
                <section className="border border-solid border-border block p-8 rounded-2xl bg-color-001 shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-2)_0px_1px_3px_0px,var(--clr-2)_0px_1px_2px_-1px] max-md:p-5">
                  <div className="block">
                    <div className="block mb-8">
                      <p className="block mb-3 text-sm font-semibold leading-5 text-pretty">
                        Anwendungsfall
                      </p>
                      <div className="grid gap-3 grid-cols-4 max-md:grid-cols-2">
                        {TextLink_data.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
                      </div>
                    </div>
                    <div className="grid mb-8 gap-5 grid-cols-3 max-md:grid-cols-1">
                      {Tile_data.map((d, i) => <Tile key={i} d={d} />)}
                    </div>
                    <div className="block mb-8">
                      <p className="block mb-3 text-sm font-semibold leading-5 text-pretty">
                        Modelle vergleichen
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {Logo_data.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                      </div>
                    </div>
                    <div className="block">
                      <div className="hidden max-md:block">
                        {Tile2_data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
                      </div>
                      <div className="block overflow-auto max-md:hidden">
                        <table className="table text-left [border-collapse:collapse] [border-spacing:2px] w-full">
                          <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                            <tr className="border-b border-solid border-b-border table-row align-middle text-muted-foreground text-xs leading-4 tracking-[0.6px] uppercase [border-collapse:collapse] [border-spacing:2px]">
                              <th className="table-cell py-3 pr-4 align-middle font-semibold [border-collapse:collapse] [border-spacing:2px]">
                                Modell
                              </th>
                              <th className="table-cell py-3 pr-4 align-middle font-semibold [border-collapse:collapse] [border-spacing:2px]">
                                Anbieter
                              </th>
                              <th className="table-cell py-3 pr-4 align-middle font-semibold text-right [border-collapse:collapse] [border-spacing:2px]">
                                USD / Monat
                              </th>
                              <th className="table-cell py-3 align-middle font-semibold text-right [border-collapse:collapse] [border-spacing:2px]">
                                EUR / Monat
                              </th>
                            </tr>
                          </thead>
                          <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                            <tr className="border-b border-solid border-b-surface-3 table-row align-middle bg-clr-3 [border-collapse:collapse] [border-spacing:2px]">
                              <td className="table-cell py-3 pr-4 align-middle [border-collapse:collapse] [border-spacing:2px]">
                                <span className="inline text-primary font-semibold [border-collapse:collapse] [border-spacing:2px]">
                                  GPT-5 mini
                                </span>
                                <span className="inline ml-2 py-0.5 px-2 rounded-full align-middle text-primary text-[0.6875rem] font-semibold leading-[1.0625rem] tracking-[0.55px] uppercase bg-surface [border-collapse:collapse] [border-spacing:2px]">
                                  {" Günstigstes Modell "}
                                </span>
                              </td>
                              <td className="table-cell py-3 pr-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
                                OpenAI
                              </td>
                              <td className="table-cell py-3 pr-4 align-middle font-semibold text-right [border-collapse:collapse] [border-spacing:2px]">
                                8,00 $
                              </td>
                              <td className="table-cell py-3 align-middle text-muted-foreground text-right [border-collapse:collapse] [border-spacing:2px]">
                                {"7,04 € "}
                              </td>
                            </tr>
                            {Tile3_data.map((d, i) => <Tile3 key={i} d={d} />)}
                          </tbody>
                        </table>
                      </div>
                      <p className="block mt-4 text-muted-foreground text-xs leading-[1.25rem] text-pretty">
                        Listenpreise der Anbieter, Stand: 14. Juli 2026 · EUR-Umrechnung ≈ Kurs 0,88 (Stand: 14. Juli 2026) · ohne Rabatte durch Caching oder Batch-Verarbeitung · alle Angaben ohne Gewähr.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div className="block mx-auto pb-20 px-8 max-w-4xl max-md:pb-16 max-md:px-4 md:max-lg:px-6">
                <section className="block mt-16 max-md:mt-14">
                  <h2 className="block mt-8 mb-3 text-2xl font-bold leading-[1.9375rem] [overflow-wrap:break-word] text-balance" data-component="heading">
                    Was sind Tokens?
                  </h2>
                  <p className="block mb-4 text-muted-foreground leading-[1.6875rem] text-pretty">
                    Ein Token ist die kleinste Abrechnungseinheit eines Sprachmodells – im Deutschen entspricht ein Token grob 3 bis 4 Zeichen. Eine DIN-A4-Seite Text mit rund 3.000 Zeichen sind damit etwa 750 bis 1.000 Tokens.
                  </p>
                  <p className="block mb-4 text-muted-foreground leading-[1.6875rem] text-pretty">
                    Wichtig für die Kostenrechnung: Input-Tokens (Ihr Prompt inklusive Kontext) und Output-Tokens (die Antwort des Modells) werden getrennt gezählt und unterschiedlich bepreist. Wer die Kosten einer LLM-Anwendung realistisch einschätzen will, muss deshalb beide Seiten im Blick behalten – nicht nur die eigene Anfrage, sondern auch die erwartete Antwortlänge.
                  </p>
                  <h2 className="block mt-8 mb-3 text-2xl font-bold leading-[1.9375rem] [overflow-wrap:break-word] text-balance" data-component="heading">
                    Preismodelle der Anbieter
                  </h2>
                  <p className="block mb-4 text-muted-foreground leading-[1.6875rem] text-pretty">
                    Alle großen Anbieter rechnen in US-Dollar pro 1 Million Tokens ab, und bei jedem Modell ist der Output deutlich teurer als der Input – bei den verglichenen Modellen um den Faktor 3 bis 8. Drei Modellklassen stehen zur Wahl: Frontier-Modelle wie die Claude-Opus-Klasse (5 USD Input / 25 USD Output), Mittelklasse-Modelle wie die Claude-Sonnet-Klasse (3 / 15 USD) oder GPT-5.x (1,25 / 10 USD), und Effizienz-Modelle wie Claude Haiku 4.5 (1 / 5 USD) oder GPT-5 mini (0,25 / 2 USD).
                  </p>
                  <p className="block mb-4 text-muted-foreground leading-[1.6875rem] text-pretty">
                    Der Vergleichsrechner oben zeigt alle Modelle nebeneinander samt aktuellem Preisstand – so sehen Sie auf einen Blick, welches Modell für Ihren konkreten Anwendungsfall am wirtschaftlichsten ist.
                  </p>
                  <h2 className="block mt-8 mb-3 text-2xl font-bold leading-[1.9375rem] [overflow-wrap:break-word] text-balance" data-component="heading">
                    {"Versteckte Kostenfaktoren: Caching, Batch & Co."}
                  </h2>
                  <p className="block mb-4 text-muted-foreground leading-[1.6875rem] text-pretty">
                    Die reine Token-Rechnung ist nur die halbe Wahrheit. Prompt-Caching rabattiert wiederholte Prompt-Teile teils erheblich, und Batch-APIs bieten bei asynchroner Verarbeitung typischerweise rund 50 % Rabatt gegenüber Echtzeit-Anfragen. Ohne diese Hebel zahlen Sie oft mehr als nötig.
                  </p>
                  <p className="block mb-4 text-muted-foreground leading-[1.6875rem] text-pretty">
                    Umgekehrt treiben lange System-Prompts und RAG-Kontexte die Kosten in die Höhe, weil sie bei jeder einzelnen Anfrage erneut abgerechnet werden. Agenten-Workflows mit mehreren Tool-Aufrufen multiplizieren den Tokenverbrauch pro Nutzeranfrage zusätzlich, und auch Wiederholungsversuche bei Fehlern schlagen auf die Rechnung durch.
                  </p>
                  <h2 className="block mt-8 mb-3 text-2xl font-bold leading-[1.9375rem] [overflow-wrap:break-word] text-balance" data-component="heading">
                    Wann lohnt sich welches Modell?
                  </h2>
                  <p className="block mb-4 text-muted-foreground leading-[1.6875rem] text-pretty">
                    Die Grundregel lautet: einfache, hochvolumige Aufgaben wie Klassifikation, FAQ-Chat oder Textextraktion gehören auf ein Effizienz-Modell, komplexes Reasoning oder anspruchsvolle Code-Aufgaben auf ein Frontier-Modell. Der Unterschied ist erheblich: Bei einem identischen Chatbot-Workload mit 10.000 Anfragen pro Monat kostet Claude Haiku 4.5 rund 23 US-Dollar, die Claude-Opus-Klasse dagegen rund 115 US-Dollar – Faktor 5 für dieselbe Aufgabe.
                  </p>
                  <p className="block mb-4 text-muted-foreground leading-[1.6875rem] text-pretty">
                    Wer nicht sauber routet und alles über ein teures Modell laufen lässt, zahlt also ein Vielfaches, ohne einen entsprechenden Qualitätsgewinn zu erhalten.
                  </p>
                  <h2 className="block mt-8 mb-3 text-2xl font-bold leading-[1.9375rem] [overflow-wrap:break-word] text-balance" data-component="heading">
                    Kostenoptimierung im KI-Projekt
                  </h2>
                  <p className="block mb-4 text-muted-foreground leading-[1.6875rem] text-pretty">
                    Optimieren Sie erst, nachdem Sie gemessen haben – der Rechner oben liefert dafür die Ausgangszahlen. Die wirksamsten Hebel in der Reihenfolge ihres Effekts: ein kleineres Modell oder Model-Routing einsetzen, Prompt-Caching für wiederkehrende Inhalte nutzen, System-Prompts kürzen, die Output-Länge begrenzen und Batch-Verarbeitung für alles, was nicht in Echtzeit laufen muss.
                  </p>
                  <p className="block mb-4 text-muted-foreground leading-[1.6875rem] text-pretty">
                    Wer eine KI-Integration von Anfang an mit diesen Hebeln plant, spart oft einen zweistelligen Prozentsatz der laufenden API-Kosten. Bei der kosteneffizienten Konzeption solcher Integrationen unterstützt Sie eine erfahrene Beratung.
                  </p>
                </section>
                <section className="block mt-16 max-md:mt-14">
                  <h2 className="block mb-2 text-3xl font-bold leading-9 text-balance max-md:text-2xl max-md:leading-8" data-component="heading">
                    {" Häufige Fragen "}
                  </h2>
                  <div className="block mt-4">
                    {MediaTile2_data.map((d, i) => <MediaTile2 key={i} d={d} styles={MediaTile2_styles[i]} />)}
                  </div>
                </section>
                <section className="block mt-20 max-md:mt-16">
                  <div className="block py-14 px-12 rounded-2xl text-center bg-foreground max-md:py-12 max-md:px-6">
                    <p className="block text-accent text-sm font-semibold leading-5 tracking-[0.7px] uppercase text-pretty">
                      Provimedia
                    </p>
                    <h2 className="block mt-3 text-background text-3xl font-bold leading-9 text-balance max-md:text-2xl max-md:leading-8" data-component="heading">
                      Sprechen wir über Ihr Projekt
                    </h2>
                    <p className="block mt-4 mx-auto text-color-003 leading-6.5 text-pretty max-w-2xl">
                      Sie wollen aus dem Ergebnis mehr machen? Wir zeigen Ihnen unverbindlich, wie — mit einem konkreten Angebot statt Verkaufsgespräch.
                    </p>
                    <div className="block mt-8">
                      <a className="inline-flex py-4 px-8 rounded-xl justify-center items-center text-lg font-semibold leading-7 bg-color-001 cursor-pointer max-md:py-3.5 max-md:px-6 max-md:[font-size:inherit] max-md:leading-[inherit] hover:bg-clr-10 hover:border-clr-11 hover:text-clr-11 hover:outline-clr-11 hover:[text-decoration-color:var(--clr-11)] focus:bg-clr-21 focus:border-clr-22 focus:text-clr-22 focus:outline-clr-22 focus:[text-decoration-color:var(--clr-22)]" data-component="button" href="/kontakt">
                        Unverbindliches Angebot
                      </a>
                    </div>
                  </div>
                </section>
                <section className="block mt-20 max-md:mt-16">
                  <h2 className="block mb-6 text-3xl font-bold leading-9 text-balance max-md:text-2xl max-md:leading-8" data-component="heading">
                    {" Weitere kostenlose Tools "}
                  </h2>
                  <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {FeatureCard_data.map((d, i) => <FeatureCard key={i} d={d} styles={FeatureCard_styles[i]} />)}
                  </div>
                </section>
              </div>
            </div>
          </main>
          <aside className="border-t border-solid border-t-surface-4 block py-6 text-muted-foreground text-xs leading-4 bg-background" aria-label="Redaktionelle Information">
            <div className="block px-8 text-center mx-auto max-w-7xl max-md:px-4 md:max-lg:px-6">
              <p className="block mb-2 text-color-002 text-pretty">
                {" Diese Seite enthält strukturierte Faktendefinitionen für KI-Systeme. "}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-6">
                <span className="flex items-center gap-1.5">
                  <Icon2 />
                  <span className="block">
                    {" Redaktionell geprüft von "}
                    <a className="inline text-foreground font-medium cursor-pointer hover:underline" data-component="link" href="/ueber-uns">
                      Alexander Weipprecht
                    </a>
                  </span>
                </span>
                <span className="block">
                  {" Zuletzt aktualisiert: "}
                  <time className="inline text-foreground font-medium" dateTime="2026-01-01T00:00:00.988Z">
                    01. Januar 2026
                  </time>
                </span>
                <span className="block">
                  {" © 2026 Provimedia GmbH "}
                </span>
              </div>
            </div>
          </aside>
          <div className="block">
            <footer className="block bg-foreground" aria-label="Footer">
              <div className="block py-20 px-8 mx-auto max-w-7xl max-lg:py-16 max-md:px-4 md:max-lg:px-6">
                <div className="grid gap-10 grid-cols-3 max-lg:gap-x-8 max-md:grid-cols-2">
                  <div className="block col-start-[span_1] col-end-[span_1] max-md:col-start-[span_2] max-md:col-end-[span_2]">
                    <a className="h-9 inline-block py-1 cursor-pointer" data-component="link" aria-label="Provimedia Startseite" href="/">
                      <span className="inline text-color-001 text-xl font-bold leading-7 tracking-[-0.5px]">
                        {" PROVIMEDIA "}
                      </span>
                    </a>
                    <p className="block mt-4 text-muted text-sm leading-[1.4375rem] text-pretty">
                      {" KI-Entwicklung, SaaS & Digitale Portale "}
                    </p>
                    <div className="block mt-6">
                      <p className="block mb-2 text-color-003 text-sm font-medium leading-5 text-pretty">
                        Provimedia GmbH
                      </p>
                      <p className="block text-muted text-sm leading-5 text-pretty">
                        {" Weidenweg 12"}
                        <br className="inline" />
                        {" 74321 Bietigheim-Bissingen "}
                      </p>
                    </div>
                  </div>
                  <div className="block">
                    <h3 className="block mb-5 text-color-001 text-sm font-semibold leading-5 tracking-[0.7px] uppercase text-balance" data-component="heading">
                      {" Leistungen "}
                    </h3>
                    <ul className="block [list-style-type:none] list-outside">
                      {ListRow_data.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                    </ul>
                  </div>
                  <div className="block">
                    <h3 className="block mb-5 text-color-001 text-sm font-semibold leading-5 tracking-[0.7px] uppercase text-balance" data-component="heading">
                      {" Mehr entdecken "}
                    </h3>
                    <ul className="block [list-style-type:none] list-outside">
                      {ListRow_data2.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles2[i]} />)}
                    </ul>
                  </div>
                  <div className="block">
                    <h3 className="block mb-5 text-color-001 text-sm font-semibold leading-5 tracking-[0.7px] uppercase text-balance" data-component="heading">
                      {" KI-Zertifikat "}
                    </h3>
                    <ul className="block [list-style-type:none] list-outside">
                      {ListRow2_data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
                    </ul>
                  </div>
                  <div className="block">
                    <h3 className="block mb-5 text-color-001 text-sm font-semibold leading-5 tracking-[0.7px] uppercase text-balance" data-component="heading">
                      {" Regional "}
                    </h3>
                    <ul className="block [list-style-type:none] list-outside">
                      {ListRow_data3.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles3[i]} />)}
                    </ul>
                  </div>
                  <div className="block">
                    <h3 className="block mb-5 text-color-001 text-sm font-semibold leading-5 tracking-[0.7px] uppercase text-balance" data-component="heading">
                      {" Kontakt "}
                    </h3>
                    <ul className="block [list-style-type:none] list-outside">
                      <li className="list-item mb-3">
                        <a className="h-7 inline-flex py-1 items-center gap-2 text-muted text-sm leading-5 cursor-pointer hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)] focus:border-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]" data-component="link" href="mailto:info@provimedia.de">
                          <Icon3 />
                          {" info@provimedia.de "}
                        </a>
                      </li>
                      <li className="list-item mb-3">
                        <a className="inline-flex py-1 items-center gap-2 text-muted text-sm leading-5 cursor-pointer hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)] focus:border-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]" data-component="link" href="tel:+4971429170511">
                          <Icon4 />
                          {" +49 (0)7142-9170511 "}
                        </a>
                      </li>
                      <li className="list-item mb-3">
                        <a className="h-7 inline-flex py-1 items-center gap-2 text-muted text-sm leading-5 cursor-pointer hover:border-accent hover:text-accent hover:outline-accent hover:[text-decoration-color:var(--accent)] focus:border-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]" data-component="link" href="https://wa.me/4971429170511?text=Hallo%20Provimedia%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Leistungen%20und%20habe%20eine%20Frage%3A" rel="noopener noreferrer" target="_blank">
                          <Icon5 />
                          {" WhatsApp "}
                        </a>
                      </li>
                      <li className="list-item pt-2">
                        <a className="h-7 inline-flex py-1 items-center gap-2 text-accent text-sm font-medium leading-5 cursor-pointer" data-component="link" href="/kontakt">
                          {" Kontaktformular "}
                          <Icon6 />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-solid border-t-surface-5 block mt-12 pt-10">
                  <h3 className="block mb-5 text-color-001 text-sm font-semibold leading-5 tracking-[0.7px] uppercase text-balance" data-component="heading">
                    {" Kostenlose Tools "}
                  </h3>
                  <ul className="flex flex-wrap gap-y-3 gap-x-6 [list-style-type:none] list-outside">
                    {ListRow3_data.map((d, i) => <ListRow3 key={i} d={d} styles={ListRow3_styles[i]} />)}
                  </ul>
                </div>
                <div className="border-t border-solid border-t-surface-5 block mt-12 pt-10">
                  <div className="flex items-center gap-8 max-lg:flex-col max-lg:gap-6 max-lg:[align-items:initial]">
                    <div className="flex items-center flex-1 gap-8 max-md:flex-col max-md:gap-4 max-md:[align-items:initial]">
                      <div className="w-[17.25rem] block shrink-0 max-md:w-[21.4375rem]">
                        <h3 className="block text-color-001 text-sm font-semibold leading-5 tracking-[0.7px] uppercase text-balance" data-component="heading">
                          Newsletter
                        </h3>
                        <p className="block mt-1 text-muted text-sm leading-5 text-pretty">
                          Über KI auf dem neusten Stand bleiben
                        </p>
                      </div>
                      <div className="w-full block flex-1 max-w-sm">
                        <form className="block relative">
                          <div className="w-50 h-6 block absolute top-0 left-0 opacity-0 pointer-events-none" aria-hidden="true">
                            <input className="w-full h-6 inline-block overflow-clip cursor-text pointer-events-none" data-component="input" name="website_url" type="text" />
                          </div>
                          <div className="block">
                            <div className="flex gap-2">
                              <input className="w-[16.5625rem] h-9.5 border border-solid border-surface-6 block min-w-0 py-2 px-3 rounded-lg flex-1 overflow-clip text-color-001 text-sm leading-5 bg-surface-5 cursor-text max-md:w-56 focus:border-clr-24 focus:shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-24)_0px_0px_0px_2px,var(--clr-1)_0px_0px_0px_0px]" data-ditto-id="style-input" data-component="input" placeholder="E-Mail-Adresse" type="email" />
                              <button className="block py-2 px-4 rounded-lg shrink-0 text-color-001 text-sm font-semibold leading-5 text-center bg-primary cursor-default hover:bg-clr-14" data-component="button" type="submit">
                                <span className="inline">
                                  Anmelden
                                </span>
                              </button>
                            </div>
                            <p className="block mt-2 text-muted text-xs leading-[1.25rem] text-pretty">
                              {" Abmeldung jederzeit möglich. Es gilt unsere "}
                              <a className="inline underline cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-component="link" href="/datenschutz">
                                Datenschutzerklärung
                              </a>
                              {". "}
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                    <a className="h-27 block py-1 shrink-0 cursor-pointer" data-component="link" href="/ki-zertifikat/siegel/Kj1JViJdA43np7zF" rel="noopener" target="_blank">
                      <img className="w-70 h-25 block max-w-full rounded-xl overflow-clip aspect-[auto_280/100] align-middle" data-component="image" alt="KI-Kompetenz verifiziert" height="100" src="/assets/cloned/svg/55cc8438f538.svg" width="280" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-solid border-t-surface-5 block">
                <div className="flex py-6 px-8 justify-between items-center gap-4 mx-auto max-w-7xl max-md:px-4 max-md:flex-col md:max-lg:px-6">
                  <p className="block text-muted text-sm leading-5 text-pretty">
                    {" © 2026 Provimedia GmbH. Alle Rechte vorbehalten. "}
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-6">
                    {TextLink2_data.map((d, i) => <TextLink2 key={i} d={d} />)}
                    <button className="block py-1 text-muted text-sm leading-5 text-center cursor-pointer hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)] focus:border-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]" data-component="button">
                      {" Cookie-Einstellungen "}
                    </button>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <div className="block">
            <a className="w-14 h-14 flex fixed right-5.5 bottom-8 z-50 rounded-full items-center text-color-001 bg-clr-4 shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-2)_0px_10px_15px_-3px,var(--clr-2)_0px_4px_6px_-4px] cursor-pointer hover:shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-2)_0px_20px_25px_-5px,var(--clr-2)_0px_8px_10px_-6px]" data-component="link" aria-label="Kontakt über WhatsApp aufnehmen" href="https://wa.me/4971429170511?text=Hallo%20Provimedia%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Leistungen%20und%20habe%20eine%20Frage%3A" rel="noopener noreferrer" target="_blank">
              <span className="w-0 h-5 block opacity-0 max-w-0 overflow-hidden text-sm font-semibold leading-5 whitespace-nowrap text-nowrap">
                {" Schreiben Sie uns "}
              </span>
              <span className="flex justify-center items-center shrink-0 h-14 w-14">
                <Icon7 />
              </span>
            </a>
          </div>
        </div>
      </div>
      {" "}
      <div className="h-61 block fixed bottom-0 inset-x-0 z-100 p-6 pointer-events-none max-md:h-[320.3px] max-md:p-4 md:max-lg:h-74">
        <div className="h-full border border-solid border-surface-4 block mx-auto p-8 rounded-2xl bg-clr-5 shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-6)_0px_8px_40px_0px] [backdrop-filter:blur(24px)] max-w-3xl max-md:p-6" aria-label="Cookie-Einstellungen" role="region">
          <div className="h-full flex flex-col gap-4">
            <div className="h-full flex items-center gap-6 max-md:flex-col max-md:gap-4 max-md:[align-items:initial]">
              <div className="w-[10.875rem] block min-w-0 flex-1 max-md:w-[18.3125rem] md:max-lg:w-[7.875rem]">
                <p className="block text-clr-7 [font-family:Inter] leading-6.5 text-pretty max-md:text-sm max-md:leading-[1.4375rem]">
                  {" Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. "}
                  <a className="inline text-foreground font-medium underline cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href="/datenschutz">
                    {" Mehr erfahren "}
                  </a>
                </p>
              </div>
              <div className="w-[31.5rem] flex items-center shrink-0 gap-3 max-md:w-[18.3125rem] max-md:flex-col max-md:items-stretch">
                {TextLink3_data.map((d, i) => <TextLink3 key={i} d={d} styles={TextLink3_styles[i]} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
