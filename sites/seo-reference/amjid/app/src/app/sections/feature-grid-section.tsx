import FeatureCard from "../components/feature-card";
import { FeatureCard_meta } from "../ditto-meta";
import { FeatureCard_styles } from "../_styles";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="block relative py-24 px-12 max-lg:py-16 max-md:px-4 md:max-lg:px-[30.7px]" aria-labelledby="related-insights-title">
      <div className="block max-w-350 mx-auto">
        <div className="w-full max-w-240 block mb-16">
          <div className="inline-flex mb-3 items-center gap-3 text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem] tracking-[2.37px] uppercase max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[2.2px] md:max-lg:tracking-[2.27px] 2xl:tracking-[2.4px] before:content-[''] before:block before:w-6 before:h-px before:bg-primary before:opacity-60">
            Related
          </div>
          {" "}
          <h2 className="block [font-family:'DM_Serif_Display',_Georgia,_serif] text-[3.5rem] leading-[3.875rem] tracking-[-1.12px] text-balance max-md:text-[2.5rem] max-md:leading-11 max-md:tracking-[-0.8px] md:max-lg:text-[2.9375rem] md:max-lg:leading-[3.25rem] md:max-lg:tracking-[-0.95px]" data-component="heading" id="related-insights-title">
            {"Further "}
            <em className="inline text-primary italic">
              reading
            </em>
            .
          </h2>
          {" "}
          <p className="block max-w-187 mt-4 text-muted text-lg leading-[1.6875rem] max-md:max-w-170 max-md:text-base max-md:leading-[1.5rem] md:max-lg:text-[1.0625rem] md:max-lg:leading-[1.5625rem]">
            Picked by shared topic. The through-line is agentic AI shipped into production, not the pilot theatre.
          </p>
          {" "}
        </div>
        <ul className="w-full grid gap-6 [list-style-type:none] list-outside grid-cols-3 max-md:grid-cols-1 md:max-lg:grid-cols-2 2xl:grid-cols-[450.656px_450.672px_450.656px_0px]" role="list">
          {features.map((d, i) => <FeatureCard key={i} d={d} meta={FeatureCard_meta[i]} styles={FeatureCard_styles[i]} />)}
        </ul>
        <div className="flex mt-8 justify-center">
          <a className="h-[3.025rem] min-h-11 border border-solid border-accent flex py-3 px-8 rounded-[999px] justify-center items-center gap-2 text-sm font-semibold leading-[1.375rem] whitespace-nowrap text-nowrap cursor-pointer max-md:h-[46.9px] max-md:text-[0.8125rem] max-md:leading-[1.3125rem] md:max-lg:h-12 hover:bg-border hover:border-foreground hover:transform-[matrix(1,0,0,1,0,-4)] focus:bg-clr-8 focus:border-clr-9" data-component="button" href="/insights">
            See all insights
          </a>
        </div>
      </div>
    </section>
  );
}
