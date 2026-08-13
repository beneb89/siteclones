import FeatureCard2 from "../components/feature-card2";
import { FeatureCard2_meta } from "../ditto-meta";
import { FeatureCard2_styles } from "../_styles";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <div className="block pt-15 overflow-hidden">
      <div className="w-320 block relative max-w-full pb-45 px-[0.9375rem] max-md:w-[23.4375rem] max-md:pb-[55.5px] max-md:px-5 max-md:max-w-none md:max-lg:w-162.5 md:max-lg:max-w-162.5 md:max-lg:mx-[3.6875rem] md:max-lg:pb-27 2xl:w-327.5 2xl:mx-[19.0625rem] after:content-[''] after:block after:absolute after:top-[696.5px] after:bottom-0 after:inset-x-0 after:z-2 after:h-px after:mx-[0.9375rem] max-md:after:top-[86.3875rem] max-md:after:inset-x-[1.95rem] max-md:after:mx-0 md:max-lg:after:top-[71.8625rem] 2xl:after:top-[43.8875rem]">
        <div className="block text-center">
          <h3 className="block [font-family:Poppins,_sans-serif] text-2xl font-semibold leading-9 tracking-[3px] uppercase max-md:text-[1.1875rem] max-md:leading-[1.75rem] max-md:tracking-[2.34px]" data-component="heading">
            More resources
          </h3>
          {" "}
        </div>
        {" "}
        <div className="flex -mb-25 -mx-2.5 pt-17.5 flex-wrap max-md:mb-[-46.9px] max-md:pt-[54.7px] md:max-lg:-mb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((d, i) => <FeatureCard2 key={i} d={d} meta={FeatureCard2_meta[i]} styles={FeatureCard2_styles[i]} />)}
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
