import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard2Data = {
  id: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <div className={cn("box-content block relative pointer-events-none", styles.className)} id={d.id}>
      <div className="box-content h-full block absolute top-0 inset-x-0 bg-background pointer-events-none">
        <div className="box-content w-300 h-full block relative max-h-20000 mx-10 pointer-events-none max-md:w-[23.4375rem] max-lg:mx-0 md:max-lg:w-192 2xl:mx-90">
          <div className="w-[40.5625rem] h-[1.3125rem] block absolute top-2.5 left-[12.6875rem] transform-[none] max-md:w-58.5 max-md:h-[1.4375rem] max-md:top-[0.6875rem] max-md:left-[1.5625rem] max-md:transform-[matrix(1.17188,0,0,1.17188,24.4062,3.86719)] max-md:origin-[117px_11.5px] md:max-lg:transform-[matrix(0.64,0,0,0.64,-189.9,-7.38)] md:max-lg:origin-[324.5px_10.5px]">
            <h2 className="box-content h-full block absolute top-0 inset-x-0 text-color-001 [font-family:Montserrat] text-[0.9375rem] font-bold leading-[1.25rem] tracking-[1.5px] text-left uppercase" data-component="heading">
              {d.title}
              <br className="box-content inline" />
            </h2>
          </div>
          <div className={cn("w-198.5 block absolute top-17.5 left-[12.6875rem] transform-[none] max-md:w-67.5 max-md:top-[4.3125rem] max-md:left-[1.5625rem]", styles.className2)}>
            <p className="box-content h-full block absolute top-0 inset-x-0 text-color-001 [font-family:Montserrat] text-[0.9375rem] leading-[1.6875rem] text-left max-md:leading-6">
              {d.description}
              <br className="box-content inline" />
              <br className="box-content inline" />
              <br className="box-content inline" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
