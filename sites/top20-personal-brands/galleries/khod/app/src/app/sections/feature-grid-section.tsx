import FeatureCard from "../components/feature-card";
import { FeatureCard_styles } from "../_styles";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="block">
      <div className="flex max-w-316 mx-auto py-16 px-8 flex-col justify-start items-stretch gap-8 text-left max-md:px-4 md:max-lg:px-6">
        <h2 className="block text-color-001 [font-family:'Pp_Neue_Machina_Inktrap',_Arial,_sans-serif] text-[3.375rem] leading-[4.0625rem] tracking-[-1.08px] max-md:text-2xl max-md:leading-[1.8125rem] md:max-lg:text-[2.5rem] md:max-lg:leading-12" data-component="heading">
          Explore Related Articles
        </h2>
        <div className="block">
          <div className="w-full grid gap-y-6 gap-x-8 [grid-auto-columns:1fr] max-lg:gap-x-4 grid-cols-1 md:grid-cols-3" role="list">
            {features.map((d, i) => <FeatureCard key={i} d={d} styles={FeatureCard_styles[i]} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
