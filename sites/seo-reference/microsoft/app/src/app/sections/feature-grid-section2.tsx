import FeatureGridItem from "../components/feature-grid-item";
import { features2 as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection2({ features = featuresContent } = {}) {
  return (
    <div className="block clear-both max-w-400 pt-24 pb-12 px-20 bg-background mx-auto max-md:pt-12 max-md:pb-3 max-md:px-7.5 md:max-lg:pt-15 md:max-lg:pb-6 md:max-lg:px-[1.5625rem]">
      <div className="flex max-w-full flex-wrap" id="container-dda2e0f306">
        <div className="flex flex-wrap gap-y-15 max-lg:gap-y-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((d) => <FeatureGridItem key={d.variant} d={d} />)}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
