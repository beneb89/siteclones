import Icon17 from "../svgs/svg-icon17";
import MediaTile2, { type MediaTile2Data } from "../components/media-tile2";
import { MediaTile2_styles } from "../_styles";
const MediaTile2_data: MediaTile2Data[] = [
    { text: "Start with eligibility and access: make sure strategic pages are indexable, server-rendered, not blocked by robots.txt or CDN rules, and reachable by the crawlers you actually want. Separate training controls from search/retrieval controls where vendors provide separate user agents." },
    { text: "Build a reliable entity layer: Organization, LocalBusiness or ProfessionalService, Service, Article, FAQPage and BreadcrumbList schema; a human-readable brand facts page; and a compact brand-facts.json or equivalent machine-readable source that matches public profiles." },
    { text: "Create answer hubs before chasing tricks: write 60–90 word TL;DRs, comparison tables, FAQs, definitions, examples, and sourced claims. AI search systems need facts they can quote and links they can cite." },
    { text: "Use llms.txt as a navigation aid, not magic: keep /llms.txt short and canonical, put detailed context in /llms-full.txt, and link to the real pages where claims can be verified." },
    { text: "Measure with panels and first-party data: Search Console generative-AI reports where available, server logs for AI crawler user agents, referral analytics, and repeated prompt panels across Google AI Mode, ChatGPT Search, Perplexity, Claude, and Gemini." },
    { text: "Refresh when the market changes: model releases, AI search product changes, crawler documentation, regulations, pricing, and competitor citations should trigger updates. Treat AEO as an operating cadence, not a one-time checklist." }
];
/** Implementation Roadmap section. */
export default function ImplementationRoadmapSection({ mediaTile2Data = MediaTile2_data } = {}) {
  return (
    <div className="block" id="how-to-choose">
      <section className="block mb-12">
        <h2 className="flex mb-6 items-center gap-2 [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_system-ui,_sans-serif] text-2xl font-bold leading-[1.625rem] tracking-[-0.6px]" data-component="heading">
          <Icon17 />
          Implementation Roadmap
        </h2>
        <div className="border border-solid border-border block p-6 rounded-[14px] bg-color-004">
          <ul className="block [list-style-type:none] list-outside">
            {mediaTile2Data.map((d, i) => <MediaTile2 key={i} d={d} styles={MediaTile2_styles[i]} />)}
          </ul>
        </div>
      </section>
    </div>
  );
}
