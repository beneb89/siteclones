import FeatureCard from "../components/feature-card";
import { FeatureCard_styles } from "../_styles";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="block py-20 max-md:py-12">
      <div className="block max-w-320 px-[2.4rem] mx-auto max-md:px-4 md:max-lg:px-[1.4375rem] 2xl:px-12">
        <div className="flex mb-10 flex-col gap-8">
          <h2 className="block text-color-001 text-[2.125rem] font-bold leading-[2.3125rem] text-center max-md:mb-7 max-md:text-2xl max-md:leading-[1.625rem]" data-component="heading">
            Fast-track your AI training: gather data at scale without interruption
          </h2>
          {" "}
        </div>
        {" "}
        <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((d, i) => <FeatureCard key={i} d={d} styles={FeatureCard_styles[i]} />)}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
