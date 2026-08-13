import FeatureGridItem from "../components/feature-grid-item";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="block mb-12">
      <h2 className="block mb-6 [font-family:'Space_Grotesk',_system-ui,_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Arial,_sans-serif,_system-ui,_sans-serif] text-2xl font-semibold leading-[1.625rem] tracking-[-0.6px]" data-component="heading">
        Related Resources
      </h2>
      <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2">
        {features.map((d) => <FeatureGridItem key={d.variant} d={d} />)}
      </div>
    </section>
  );
}
