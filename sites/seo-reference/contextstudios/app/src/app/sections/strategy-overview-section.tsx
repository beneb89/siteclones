import Icon16 from "../svgs/svg-icon16";
import MediaTile, { type MediaTileData } from "../components/media-tile";
import { MediaTile_styles } from "../_styles";
const MediaTile_data: MediaTileData[] = [
    { text: "1", href: "https://schema.org/", label: "Structured Data & Schema Markup", text2: "Entity definition, relationship mapping, fact extraction", text3: "JSON-LD, Schema.org vocabulary, Google Rich Results Test", text4: "1-2 developers, 1-2 weeks initial setup", text5: "€2,000 – €15,000", icon: <>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
          </> },
    { text: "2", href: "https://llmstxt.org/", label: "llms.txt & AI Discovery Files", text2: "AI crawler guidance, capability discovery, context provision", text3: "Plain text files, MCP JSON specification, well-known URIs", text4: "1 developer, 1-2 days", text5: "€500 – €2,000", icon: <>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
          </> },
    { text: "3", href: "/.well-known/brand-facts.json", label: "Brand-Facts JSON", text2: "Brand accuracy, fact verification, hallucination prevention", text3: "JSON schema, well-known URI, companion HTML page", text4: "1 developer, 1-2 days", text5: "€500 – €2,000", icon: <>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
          </> },
    { text: "4", href: "/en/guides", label: "Answer Hub Pages (Direct-Quote Content)", text2: "Direct answer provision, quotability, topic authority", text3: "Semantic HTML, FAQ schema, TL;DR blocks, cross-links", text4: "1 content strategist, 2-4 weeks for hub setup", text5: "€3,000 – €15,000", icon: <>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
          </> },
    { text: "5", href: "https://cloud.google.com/natural-language", label: "NLP Entity Optimization", text2: "Entity prominence, semantic optimization, NLP scoring", text3: "Google Cloud NLP API, custom scripts, CI/CD pipeline gates", text4: "1-2 developers, ongoing optimization", text5: "€5,000 – €20,000 setup + €500/month", icon: <>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
          </> },
    { text: "6", href: "https://arxiv.org/abs/2311.09735", label: "GEO Content Enrichment (Princeton 9)", text2: "Content quality signals, citation density, statistical backing", text3: "Content analysis scripts, automated enrichment, cron jobs", text4: "1 developer + 1 content editor, ongoing", text5: "€3,000 – €10,000 setup + editorial time", icon: <>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
          </> },
    { text: "7", href: "/en/guides", label: "Cross-Linking & Internal Link Graph", text2: "Topic clustering, content relationships, site authority", text3: "Cross-link mapping files, TypeScript config, automated validation", text4: "1 content strategist, 1-2 weeks setup + maintenance", text5: "€2,000 – €8,000", icon: <>
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
          </> },
    { text: "8", href: "https://developers.google.com/search/docs/specialty/international/localized-versions", label: "Multilingual & Hreflang Implementation", text2: "International reach, language-specific recommendations", text3: "hreflang tags, translationGroupId system, i18n routing", text4: "1 developer + translation resources", text5: "€5,000 – €25,000 + translation costs", icon: <>
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
          </> },
    { text: "9", href: "/robots.txt", label: "AI Crawler Access & Permissions", text2: "Crawler access, AI indexing, discoverability", text3: "robots.txt rules, User-Agent directives, meta tags", text4: "1 developer, 1 day", text5: "€200 – €500", icon: <>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
          </> },
    { text: "10", href: "/en/blog", label: "Content Freshness & Automated Pipelines", text2: "Content velocity, freshness signals, automated publishing", text3: "Cron jobs, CMS webhooks, GSC API, automated QA scripts", text4: "1-2 developers, 2-4 weeks setup", text5: "€5,000 – €20,000 setup + operational costs", icon: <>
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
          </> }
];
/** Strategy Overview section. */
export default function StrategyOverviewSection({ mediaTileData = MediaTile_data } = {}) {
  return (
    <div className="block" id="comparison">
      <section className="block mb-12">
        <h2 className="flex mb-6 items-center gap-2 [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_system-ui,_sans-serif] text-2xl font-bold leading-[1.625rem] tracking-[-0.6px]" data-component="heading">
          <Icon16 />
          Strategy Overview
        </h2>
        <div className="block overflow-auto max-md:-mx-4 max-md:px-4">
          <div className="w-224 block max-md:w-175 max-md:min-w-175 md:max-lg:w-184">
            <table className="table [border-collapse:collapse] [border-spacing:2px] w-full">
              <thead className="table-header-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                <tr className="border-b border-solid border-b-surface table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
                  <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                    Name
                  </th>
                  <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                    Key Techniques
                  </th>
                  <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                    {"Tools & Formats"}
                  </th>
                  <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                    {"Effort & Timeline"}
                  </th>
                  <th className="table-cell py-3 px-4 align-middle font-semibold text-left [border-collapse:collapse] [border-spacing:2px]">
                    Investment
                  </th>
                  <th className="table-cell py-3 px-4 align-middle font-semibold text-center [border-collapse:collapse] [border-spacing:2px]">
                    AI-Specific
                  </th>
                </tr>
              </thead>
              <tbody className="table-row-group align-middle [border-collapse:collapse] [border-spacing:2px]">
                {mediaTileData.map((d, i) => <MediaTile key={i} d={d} styles={MediaTile_styles[i]} />)}
              </tbody>
            </table>
          </div>
        </div>
        <p className="hidden mt-4 text-muted-foreground text-sm leading-5 max-md:block">
          ← Scroll horizontally to see all columns
        </p>
      </section>
    </div>
  );
}
