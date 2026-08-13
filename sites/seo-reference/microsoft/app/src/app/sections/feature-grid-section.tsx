import FeatureCard from "../components/feature-card";
import { FeatureCard_styles } from "../_styles";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <div className="block clear-both max-w-full pt-12 pb-24 px-20 bg-surface max-md:pt-3 max-md:pb-12 max-md:px-7.5 md:max-lg:pt-6 md:max-lg:pb-15 md:max-lg:px-[1.5625rem]">
      <div className="flex max-w-full flex-wrap 2xl:max-w-360 2xl:mx-40" id="container-7c1a480e41">
        <div className="flex flex-wrap gap-y-15 max-lg:gap-y-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((d, i) => <FeatureCard key={i} d={d} styles={FeatureCard_styles[i]} />)}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
