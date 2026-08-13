import Icon9 from "../svgs/svg-icon9";
/** Tl Dr section. */
export default function TlDrSection() {
  return (
    <section className="block mb-12">
      <div className="border border-solid border-surface-3 block p-8 rounded-2xl bg-clr-11 max-md:p-6">
        <div className="flex mb-4 items-center gap-2">
          <Icon9 />
          <h2 className="block text-color-002 [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_system-ui,_sans-serif] text-lg font-semibold leading-[1.25rem] tracking-[-0.45px]" data-component="heading">
            TL;DR
          </h2>
        </div>
        <p className="block text-lg leading-[1.8125rem] max-md:leading-6.5 max-md:[font-size:inherit]">
          Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) in 2026 mean making your site easy for AI search systems to understand, quote, cite, and verify. The stack now combines Google AI features readiness, structured data, AI crawler controls, llms.txt, brand-facts.json, citation-backed answer hubs, and Search Console plus AI-citation monitoring. Durable AEO visibility comes from authoritative sources, entity consistency, fresh pages, and measurable citations across Google AI Overviews and AI Mode, ChatGPT Search, Perplexity, Claude, and Gemini.
        </p>
      </div>
    </section>
  );
}
