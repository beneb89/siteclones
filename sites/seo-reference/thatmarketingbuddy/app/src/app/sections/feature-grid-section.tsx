import FeatureCard from "../components/feature-card";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="border-b border-solid border-b-color-005 block mb-10 pb-10" id="features">
      <p className="block mb-2 text-muted-foreground [font-family:ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1px] uppercase">
        Features
      </p>
      <h2 className="block mb-4 text-color-001 text-2xl font-black leading-8 tracking-[-0.6px]" data-component="heading">
        What can DataForSEO do?
      </h2>
      <div className="block mb-6">
        <p className="block mb-6 text-color-004 leading-6.5">
          The SERP API is DataForSEO's flagship offering, providing access to search results from Google, Bing, Yahoo, and other search engines. This includes organic results, paid ads, featured snippets, and local pack data across different locations and languages. The system processes hundreds of millions of queries monthly and delivers results in real-time or through batch processing.
        </p>
        <p className="block mb-6 text-color-004 leading-6.5">
          The Backlinks API taps into one of the industry's largest link databases with over 2 trillion backlinks and 8.4 billion links crawled daily. This provides comprehensive backlink profiles, referring domain analysis, and historical link data that powers professional backlink analysis tools. The data includes anchor text, link context, and quality metrics that help identify valuable link opportunities.
        </p>
        <p className="block mb-6 text-color-004 leading-6.5">
          Keyword research capabilities span 7.9 billion keywords with search volume, competition metrics, and related keyword suggestions. The platform updates billions of keywords monthly and provides historical trend data that helps identify seasonal patterns and emerging opportunities. Location-specific data supports local SEO analysis across hundreds of countries and cities.
        </p>
        <p className="block mb-6 text-color-004 leading-6.5">
          Technical SEO features include website crawling and analysis through the On-Page API, which evaluates page speed, mobile usability, schema markup, and other technical factors. The Content Analysis API adds semantic analysis and content optimization suggestions across web and social mentions.
        </p>
        <p className="block mb-6 text-color-004 leading-6.5">
          {"The newest layer is the AI Optimization API, and specifically its LLM Mentions API, which DataForSEO extended in July 2026. It tracks how often a brand, its competitors, and individual pages get mentioned or cited inside ChatGPT and Google AI Overviews, with historical trends and side-by-side competitor benchmarking. For anyone building generative engine optimization (GEO) reporting, this turns DataForSEO into a data source for AI answer visibility, not just classic search rankings. "}
        </p>
        <p className="block text-color-004 leading-6.5">
          It runs pay-as-you-go at roughly $1 per 1,000 rows with no monthly commitment.
        </p>
      </div>
      <div className="w-full grid mb-6 gap-4 grid-cols-1 md:grid-cols-2">
        {features.map((d, i) => <FeatureCard key={i} d={d} />)}
      </div>
    </section>
  );
}
