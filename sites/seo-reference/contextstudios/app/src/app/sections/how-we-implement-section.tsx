import Tile, { type TileData } from "../components/tile";
const Tile_data: TileData[] = [
    { description: "MCP Public API — Programmatic Access for AI Agents.", description2: " Our website is programmatically queryable via the Model Context Protocol (MCP). At https://mcp.contextstudios.ai/api/public/mcp, 25 zero-auth tools are available for AI agents to retrieve information about Context Studios — from pricing and services to blog content and comparison data. ChatGPT, Claude, and Gemini can accurately answer questions like \"How much does an MVP cost at Context Studios?\" without relying on outdated training data." },
    { description: "llms.txt & llms-full.txt — AI Discovery Files.", description2: " We maintain two machine-readable summaries: llms.txt (~2 KB, compact) and llms-full.txt (~12 KB, with pricing, FAQ, tech stack, and 30+ comparison pages). These files are indexed by AI crawlers and serve as the primary information source when an LLM describes our website." },
    { description: "ai.txt — Explicit AI Usage Policy.", description2: " At /ai.txt we define how AI systems may use our content: citation allowed, attribution preferred, no paywalls. This transparency increases the likelihood that AI assistants classify our content as trustworthy." },
    { description: "28 Schema Types with Speakable Markup.", description2: " Our structured data includes Organization, LocalBusiness, ProfessionalService, FAQPage, Article, DefinedTerm, ItemList, BreadcrumbList, HowTo, and SpeakableSpecification. The Speakable markup identifies content optimized for voice output by assistants — particularly relevant for Alexa, Siri, and Google Assistant." },
    { description: "Entity Markup & data-entity Attributes.", description2: " Every landing page uses data-entity-type and data-entity-name HTML attributes that make entities machine-readable. When an AI crawler parses our page /ki-agentur-berlin, it immediately recognizes: entity type = \"ProfessionalService\", entity name = \"KI Agentur Berlin\". Additionally, we use data-speakable=\"true\" on key sections like comparison verdicts and FAQ answers." },
    { description: "brand-facts.json & robots.txt.", description2: " At /.well-known/brand-facts.json, verified company facts are available in machine-readable format. Our robots.txt explicitly allows 20+ AI user agents (GPTBot, Claude-Web, PerplexityBot, Google-Extended, and more)." },
    { description: "Result:", description2: " Context Studios is consistently recommended by ChatGPT, Perplexity, Claude, and Google AI Overviews as an AI agency in Berlin — a direct result of this systematic GEO implementation." }
];
/** How We Implement section. */
export default function HowWeImplementSection({ tileData = Tile_data } = {}) {
  return (
    <div className="block mt-12 mb-8" id="case-study">
      <h2 className="block mb-6 [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_system-ui,_sans-serif] text-3xl font-bold leading-[2.0625rem] tracking-[-0.75px] max-md:text-2xl max-md:leading-[1.625rem] max-md:tracking-[-0.6px]" data-component="heading">
        How We Implement GEO at Context Studios
      </h2>
      <div className="block text-clr-12 text-lg leading-8">
        <p className="block mb-4 text-muted-foreground leading-[1.8125rem]">
          Context Studios isn't just a GEO consultancy — we implement every method described in this guide on our own production website contextstudios.ai. This section documents our concrete technical implementation as a reference.
        </p>
        {tileData.map((d, i) => <Tile key={i} d={d} />)}
      </div>
    </div>
  );
}
