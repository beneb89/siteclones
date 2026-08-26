// Semantic page content extracted from recognized recipe sections.

export type LogosItem = {
  value: string;
  text: string;
  text2: string;
};
export const logos: LogosItem[] = [
    { value: "claude-opus", text: "Claude Opus 4.8", text2: "Anthropic" },
    { value: "claude-sonnet", text: "Claude Sonnet 5", text2: "Anthropic" },
    { value: "claude-haiku-4-5", text: "Claude Haiku 4.5", text2: "Anthropic" },
    { value: "gpt-5", text: "GPT-5", text2: "OpenAI" },
    { value: "gpt-5-mini", text: "GPT-5 mini", text2: "OpenAI" },
    { value: "gemini-2-5-pro", text: "Gemini 2.5 Pro", text2: "Google" },
    { value: "mistral-large", text: "Mistral Large", text2: "Mistral" }
];

export type FeaturesItem = {
  href: string;
  title: string;
  description: string;
};
export const features: FeaturesItem[] = [
    { href: "/tools/ki-schulungspflicht-check", title: "KI-Schulungspflicht-Check", description: "Sind Ihre Mitarbeiter schulungspflichtig nach dem EU AI Act? In 8 Fragen zur Antwort." },
    { href: "/tools/ki-wissenstest", title: "KI-Wissenstest für Teams", description: "10 Fragen, 3 Minuten: Wie sicher nutzt Ihr Team KI? Mit Sofort-Auswertung und Level-Einstufung." },
    { href: "/tools/compliance-quick-check", title: "Compliance-Quick-Check", description: "Welche gesetzlichen Pflichten gelten für Ihr Unternehmen? 8 Fragen, sofortiges Ergebnis – ohne Anmeldung." }
];

export type ListRowDataItem = {
  href: string;
  label: string;
};
export const listRowData: ListRowDataItem[] = [
    { href: "/leistungen/ki-entwicklung", label: "KI-Entwicklung" },
    { href: "/leistungen/saas-entwicklung", label: "SaaS-Entwicklung" },
    { href: "/leistungen/webdesign", label: "Webdesign" },
    { href: "/leistungen/seo-marketing", label: "SEO & Marketing" },
    { href: "/leistungen/portal-entwicklung", label: "Portal-Entwicklung" },
    { href: "/leistungen/google-ads", label: "Google Ads" }
];

export type ListRowData2Item = {
  href: string;
  label: string;
};
export const listRowData2: ListRowData2Item[] = [
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

export type ListRow2DataItem = {
  href: string;
  label: string;
};
export const listRow2Data: ListRow2DataItem[] = [
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

export type ListRowData3Item = {
  href: string;
  label: string;
};
export const listRowData3: ListRowData3Item[] = [
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

export type ListRow3DataItem = {
  href: string;
  label: string;
};
export const listRow3Data: ListRow3DataItem[] = [
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

export type TextLink2DataItem = {
  href: string;
  label: string;
};
export const textLink2Data: TextLink2DataItem[] = [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/agb", label: "AGB" },
    { href: "/code-guardian/kuendigen", label: "Verträge hier kündigen" },
    { href: "/barrierefreiheit", label: "Barrierefreiheit" },
    { href: "/ki-transparenz", label: "KI-Transparenz" },
    { href: "/widerruf", label: "Widerruf" }
];

export type TextLink3DataItem = {
  label: string;
};
export const textLink3Data: TextLink3DataItem[] = [
    { label: "Nur notwendige" },
    { label: "Einstellungen" },
    { label: "Alle akzeptieren" }
];

