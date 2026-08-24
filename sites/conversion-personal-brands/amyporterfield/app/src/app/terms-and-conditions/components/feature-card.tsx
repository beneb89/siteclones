import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  id: string;
  title: string;
  description: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("box-content block relative pointer-events-none", styles.className)} id={d.id}>
      <div className="box-content h-full block absolute top-0 inset-x-0 bg-background pointer-events-none">
        <div className="box-content w-300 h-full block relative max-h-20000 mx-10 pointer-events-none max-md:w-[23.4375rem] max-lg:mx-0 md:max-lg:w-192 2xl:mx-90">
          <div className={cn("w-[40.5625rem] h-[1.3125rem] block absolute top-2.5 left-[12.6875rem] transform-[none] max-md:top-[0.6875rem] max-md:left-[1.5625rem] md:max-lg:transform-[matrix(0.64,0,0,0.64,-189.9,-7.38)] md:max-lg:origin-[324.5px_10.5px]", styles.className2)}>
            <h2 className="box-content h-full block absolute top-0 inset-x-0 text-color-001 [font-family:Montserrat] text-[0.9375rem] font-bold leading-[1.25rem] tracking-[1.5px] text-left uppercase" data-component="heading">
              {d.title}
            </h2>
          </div>
          <div className={cn("w-198.5 block absolute top-17.5 left-[12.6875rem] transform-[none] max-md:w-67.5 max-md:left-[1.5625rem]", styles.className3)}>
            <p className="box-content h-full block absolute top-0 inset-x-0 text-color-001 [font-family:Montserrat] text-[0.9375rem] leading-[1.6875rem] text-left max-md:leading-6">
              {d.description}
              <br className="box-content inline" />
              <br className="box-content inline" />
              {d.description2}
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
