import FeatureCard from "../components/feature-card";
import { FeatureCard_styles } from "../_styles";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="block py-24 bg-surface">
      <div className="block max-w-330 px-8 mx-auto max-md:px-4">
        <div className="block mb-10">
          <div className="inline-flex mb-3.5 items-center gap-2.5 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
            <span className="block bg-primary h-px w-5" />
            Related dispatches
          </div>
          <h2 className="block text-[2.75rem] leading-[2.875rem] tracking-[-1.1px] max-lg:text-3xl max-lg:leading-[2rem] max-lg:tracking-[-0.75px]" data-component="heading">
            {"Continue exploring "}
            <em className="inline [font-family:'Instrument_Serif',_Georgia,_Cambria,_'Times_New_Roman',_Times,_serif] italic">
              agent-connected stacks.
            </em>
          </h2>
        </div>
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3">
          {features.map((d, i) => <FeatureCard key={i} d={d} styles={FeatureCard_styles[i]} />)}
        </div>
      </div>
    </section>
  );
}
