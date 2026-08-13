import Icon19 from "../svgs/svg-icon19";
import MediaLink, { type MediaLinkData } from "../components/media-link";
const MediaLink_data: MediaLinkData[] = [
    { href: "https://developers.google.com/search/docs/appearance/ai-features", description: "Google Search Central: AI features and your website", description2: "Google Search Central" },
    { href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide", description: "Google Search Central: Optimizing for generative AI features", description2: "Google Search Central" },
    { href: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports", description: "Google Search Central: Search Generative AI performance reports", description2: "Google Search Central" },
    { href: "https://developers.openai.com/api/docs/bots", description: "Overview of OpenAI crawlers", description2: "OpenAI Developers" },
    { href: "https://llmstxt.org/", description: "llms.txt Specification", description2: "llmstxt.org" },
    { href: "https://schema.org/", description: "Schema.org Vocabulary", description2: "Schema.org" },
    { href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data", description: "Google Structured Data Documentation", description2: "Google Search Central" },
    { href: "https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers", description: "Google Crawlers and Fetchers Overview", description2: "Google Developers" },
    { href: "https://cloud.google.com/natural-language/docs/analyzing-entities", description: "Google Cloud Natural Language: Entity Analysis", description2: "Google Cloud" },
    { href: "https://arxiv.org/abs/2311.09735", description: "GEO: Generative Engine Optimization", description2: "arXiv" },
    { href: "https://otterly.ai/blog/the-ai-citations-report-2026/", description: "The AI Citation Economy Report", description2: "OtterlyAI" },
    { href: "https://www.semrush.com/blog/ai-overviews-study/", description: "Semrush AI Overviews Study", description2: "Semrush" },
    { href: "/en/brand-facts", description: "Context Studios Brand Facts", description2: "Context Studios" },
    { href: "/llms.txt", description: "Context Studios llms.txt", description2: "Context Studios" }
];
/** Sources Further Reading section. */
export default function SourcesFurtherReadingSection({ mediaLinkData = MediaLink_data } = {}) {
  return (
    <section className="block mb-12">
      <h2 className="flex mb-6 items-center gap-2 [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_system-ui,_sans-serif] text-2xl font-bold leading-[1.625rem] tracking-[-0.6px]" data-component="heading">
        <Icon19 />
        {"Sources & Further Reading"}
      </h2>
      <div className="grid gap-3 grid-cols-[896px] max-md:grid-cols-[569px] md:max-lg:grid-cols-[736px]">
        {mediaLinkData.map((d, i) => <MediaLink key={i} d={d} />)}
      </div>
    </section>
  );
}
