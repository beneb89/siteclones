import Icon10 from "../svgs/svg-icon10";
import MediaCard, { type MediaCardData } from "../components/media-card";
import Icon11 from "../svgs/svg-icon11";
import Icon12 from "../svgs/svg-icon12";
import Icon13 from "../svgs/svg-icon13";
import Icon14 from "../svgs/svg-icon14";
import Icon15 from "../svgs/svg-icon15";
import { MediaCard_styles } from "../_styles";
const MediaCard_data: MediaCardData[] = [
    { id: "rank-1", text: "1", href: "https://schema.org/", title: "Structured Data & Schema Markup", description: "Structured data is the technical base layer for AEO because it gives search and AI systems explicit entities, relationships, offers, articles, FAQs, breadcrumbs, and local-business facts. In 2026 the practical goal is not to add every possible schema type, but to keep Organization, LocalBusiness or ProfessionalService, Article, FAQPage, BreadcrumbList, Service and speakable content markup valid, consistent, and aligned with visible page copy. Google's own AI feature guidance still starts from the same crawlable, indexable, high-quality content foundations as Search, so JSON-LD should support the answer rather than hide facts from users.", text2: "Entity definition, relationship mapping, fact extraction", text3: "€2,000 – €15,000" },
    { id: "rank-2", text: "2", href: "https://llmstxt.org/", title: "llms.txt & AI Discovery Files", description: "llms.txt is now best treated as an agent briefing file: a concise, human-readable map of the site, key pages, services, pricing ranges, and canonical facts that AI agents can ingest quickly. It is not a replacement for XML sitemaps, robots.txt or normal crawlability, and it is not an official ranking factor. The strongest implementation pairs /llms.txt with /llms-full.txt, a public brand facts page, and optional /.well-known/mcp.json capabilities so retrieval systems and agents can choose the right source without scraping the entire site blindly.", text2: "AI crawler guidance, capability discovery, context provision", text3: "€500 – €2,000" },
    { id: "rank-3", text: "3", href: "/.well-known/brand-facts.json", title: "Brand-Facts JSON", description: "brand-facts.json is a practical AEO pattern for publishing verified company facts in a machine-readable place: legal name, locations, founders, services, price ranges, canonical URLs, policies, and contact points. Unlike Schema.org markup, it is not a universal public standard; its value comes from being internally consistent, linked from a human-readable brand-facts page, and mirrored in Organization schema, Google Business Profile, Bing Places, LinkedIn, GitHub, press profiles, and citations. The goal is to reduce ambiguity when AI systems compare multiple sources about the same entity.", text2: "Brand accuracy, fact verification, hallucination prevention", text3: "€500 – €2,000" },
    { id: "rank-4", text: "4", href: "/en/guides", title: "Answer Hub Pages (Direct-Quote Content)", description: "Answer Hub pages are still the highest-leverage content layer for AEO because they package concise answers, comparison tables, definitions, examples, FAQs, and source-backed claims in one crawlable page. In 2026 they must also be citation-ready: every important claim should have a source URL nearby, every TL;DR should be neutral enough to quote, and every table should answer a buyer question without relying on JavaScript-only rendering. This fits Google AI Overviews and AI Mode as well as ChatGPT Search and Perplexity, where links and citations decide whether the brand is visible inside the answer.", text2: "Direct answer provision, quotability, topic authority", text3: "€3,000 – €15,000" },
    { id: "rank-5", text: "5", href: "https://cloud.google.com/natural-language", title: "NLP Entity Optimization", description: "NLP Entity Optimization means making the primary entity unmistakable to crawlers, search indexes, and retrieval systems. Use the full brand or product name in the title, H1, first paragraph, schema, image alt text, internal links, and citations; keep names, addresses, founders, and service labels consistent across first-party and third-party profiles; and test entity extraction with tools such as Google Cloud Natural Language. Wikipedia and Wikidata help only when the entity is genuinely eligible, so most companies should start with consistent schema, brand facts, local profiles, and repeated source-backed mentions.", text2: "Entity prominence, semantic optimization, NLP scoring", text3: "€5,000 – €20,000 setup + €500/month" },
    { id: "rank-6", text: "6", href: "https://arxiv.org/abs/2311.09735", title: "GEO Content Enrichment (Princeton 9)", description: "The original GEO research remains useful because the winning patterns are durable: cite sources, add statistics, include quotations or expert framing, use clear technical terms, and make the answer easy to understand. What changed in 2026 is measurement. Teams now run citation panels across Google AI Overviews and AI Mode, ChatGPT Search, Perplexity and Claude, then refresh pages where competitors are cited instead. Avoid keyword stuffing and synthetic expert quotes; AI systems reward evidence density and topical clarity more than repeated keywords.", text2: "Content quality signals, citation density, statistical backing", text3: "€3,000 – €10,000 setup + editorial time" }
];
/** Aeo Geo Strategies section. */
export default function AeoGeoStrategiesSection({ mediaCardData = MediaCard_data } = {}) {
  return (
    <div className="block" id="ranking">
      <section className="block mb-12">
        <h2 className="flex mb-6 items-center gap-2 [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_system-ui,_sans-serif] text-2xl font-bold leading-[1.625rem] tracking-[-0.6px]" data-component="heading">
          <Icon10 />
          {"AEO & GEO Strategies"}
        </h2>
        <div className="block">
          {mediaCardData.map((d, i) => <MediaCard key={i} d={d} styles={MediaCard_styles[i]} />)}
          <div className="border border-solid border-border block mb-4 p-5 rounded-[14px] bg-color-004" id="rank-7">
            <div className="flex items-start gap-4">
              <div className="flex rounded-full justify-center items-center shrink-0 bg-surface-2 w-10 h-10">
                <span className="block text-color-002 text-lg font-bold leading-7">
                  7
                </span>
              </div>
              <div className="w-199.5 block min-w-0 flex-1 max-md:w-[15.3125rem] md:max-lg:w-159.5">
                <div className="flex mb-2 flex-wrap items-center gap-2">
                  <h3 className="block text-lg font-semibold leading-7" data-component="heading">
                    <a className="inline-flex items-center gap-1 cursor-pointer hover:text-color-002" data-component="link" href="/en/guides" rel="noopener noreferrer" target="_blank">
                      {"Cross-Linking & Internal Link Graph"}
                      <Icon11 />
                    </a>
                  </h3>
                </div>
                <p className="block mb-3 text-muted-foreground">
                  Dense internal linking helps AI systems reconstruct the site's knowledge graph. A useful AEO link graph connects guides, service pages, comparisons, blog posts, glossaries, and case studies with descriptive anchors, not generic 'learn more' links. The practical target is coverage and clarity: every strategic entity should have a canonical page, every supporting article should link back to it, and every comparison or guide should point to adjacent buyer-intent pages. This makes retrieval more likely to find the right page and cite the right claim.
                </p>
                <div className="flex flex-wrap gap-2 text-sm leading-5">
                  <span className="block py-1 px-2 rounded-lg text-muted-foreground bg-color-005">
                    Topic clustering, content relationships, site authority
                  </span>
                  <span className="block py-1 px-2 rounded-lg text-muted-foreground bg-color-005">
                    €2,000 – €8,000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-solid border-border block mb-4 p-5 rounded-[14px] bg-color-004" id="rank-8">
            <div className="flex items-start gap-4">
              <div className="flex rounded-full justify-center items-center shrink-0 bg-surface-2 w-10 h-10">
                <span className="block text-color-002 text-lg font-bold leading-7">
                  8
                </span>
              </div>
              <div className="w-199.5 block min-w-0 flex-1 max-md:w-[15.3125rem] md:max-lg:w-159.5">
                <div className="flex mb-2 flex-wrap items-center gap-2">
                  <h3 className="block text-lg font-semibold leading-7" data-component="heading">
                    <a className="inline-flex items-center gap-1 cursor-pointer hover:text-color-002" data-component="link" href="https://developers.google.com/search/docs/specialty/international/localized-versions" rel="noopener noreferrer" target="_blank">
                      {"Multilingual & Hreflang Implementation"}
                      <Icon12 />
                    </a>
                  </h3>
                </div>
                <p className="block mb-3 text-muted-foreground">
                  AI assistants answer global users in their own language, so multilingual AEO needs both correct hreflang and language-specific entity signals. A German KI-Beratung page should not be a literal clone of the English AI consulting page; it needs German terminology, local proof, local citations, and links to German service pages. Keep translation groups, canonical URLs, Organization schema and local-business data aligned so AI systems understand that the pages describe the same entity in different languages, not duplicate or conflicting brands.
                </p>
                <div className="flex flex-wrap gap-2 text-sm leading-5">
                  <span className="block py-1 px-2 rounded-lg text-muted-foreground bg-color-005">
                    International reach, language-specific recommendations
                  </span>
                  <span className="block py-1 px-2 rounded-lg text-muted-foreground bg-color-005">
                    €5,000 – €25,000 + translation costs
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-solid border-border block mb-4 p-5 rounded-[14px] bg-color-004" id="rank-9">
            <div className="flex items-start gap-4">
              <div className="flex rounded-full justify-center items-center shrink-0 bg-surface-2 w-10 h-10">
                <span className="block text-color-002 text-lg font-bold leading-7">
                  9
                </span>
              </div>
              <div className="w-199.5 block min-w-0 flex-1 max-md:w-[15.3125rem] md:max-lg:w-159.5">
                <div className="flex mb-2 flex-wrap items-center gap-2">
                  <h3 className="block text-lg font-semibold leading-7" data-component="heading">
                    <a className="inline-flex items-center gap-1 cursor-pointer hover:text-color-002" data-component="link" href="/robots.txt" rel="noopener noreferrer" target="_blank">
                      {"AI Crawler Access & Permissions"}
                      <Icon13 />
                    </a>
                  </h3>
                  <span className="flex py-0.5 px-2 rounded-full items-center gap-1 text-primary text-xs font-medium leading-4 bg-color-007">
                    <Icon14 />
                    AI-Native
                  </span>
                </div>
                <p className="block mb-3 text-muted-foreground">
                  AEO now requires deliberate crawler policy, not a blanket allow or block. Google AI features depend on normal Search crawling and indexing controls, while OpenAI documents separate controls for GPTBot, OAI-SearchBot and ChatGPT-User; those settings affect training, ChatGPT Search discovery, and user-triggered browsing differently. Audit robots.txt, CDN bot rules, paywalls and anti-scraping middleware so desired AI search crawlers can reach public answer pages while private or proprietary sections stay blocked. Log user agents and check server responses, because a 403 at the edge can make a page invisible even when robots.txt looks correct.
                </p>
                <div className="flex flex-wrap gap-2 text-sm leading-5">
                  <span className="block py-1 px-2 rounded-lg text-muted-foreground bg-color-005">
                    Crawler access, AI indexing, discoverability
                  </span>
                  <span className="block py-1 px-2 rounded-lg text-muted-foreground bg-color-005">
                    €200 – €500
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-solid border-border block p-5 rounded-[14px] bg-color-004" id="rank-10">
            <div className="flex items-start gap-4">
              <div className="flex rounded-full justify-center items-center shrink-0 bg-surface-2 w-10 h-10">
                <span className="block text-color-002 text-lg font-bold leading-7">
                  10
                </span>
              </div>
              <div className="w-199.5 block min-w-0 flex-1 max-md:w-[15.3125rem] md:max-lg:w-159.5">
                <div className="flex mb-2 flex-wrap items-center gap-2">
                  <h3 className="block text-lg font-semibold leading-7" data-component="heading">
                    <a className="inline-flex items-center gap-1 cursor-pointer hover:text-color-002" data-component="link" href="/en/blog" rel="noopener noreferrer" target="_blank">
                      {"Content Freshness & Automated Pipelines"}
                      <Icon15 />
                    </a>
                  </h3>
                </div>
                <p className="block mb-3 text-muted-foreground">
                  Freshness is now a measurable AEO operating loop. Google has documentation for AI features and Search Console generative-AI performance reporting, while external tools track citations in ChatGPT, Perplexity, Google AI Overviews and other answer engines. Production teams should refresh high-value pages when model releases, product pricing, regulations or source citations change; run schema and citation checks in CI; and keep change logs visible through updatedAt metadata. Static evergreen pages without current sources lose trust quickly in AI answers.
                </p>
                <div className="flex flex-wrap gap-2 text-sm leading-5">
                  <span className="block py-1 px-2 rounded-lg text-muted-foreground bg-color-005">
                    Content velocity, freshness signals, automated publishing
                  </span>
                  <span className="block py-1 px-2 rounded-lg text-muted-foreground bg-color-005">
                    €5,000 – €20,000 setup + operational costs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
