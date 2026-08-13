import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  title: string;
  title2: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("contents min-w-0 transform-[none] 2xl:h-3.5 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap 2xl:transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)]", styles.className)}>
      <h2 className={cn("hidden 2xl:block 2xl:text-color-001 2xl:[font-family:'Geist_Regular',_'Geist_Regular_Placeholder',_sans-serif] 2xl:text-[0.875rem] 2xl:uppercase", styles.className2)}>
        {d.title}
      </h2>
      <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)] 2xl:hidden", styles.className3)}>
        <h2 className={cn("block text-color-001 [font-family:'Geist_Regular',_'Geist_Regular_Placeholder',_sans-serif] text-[0.875rem] uppercase max-lg:text-[0.625rem] max-lg:leading-[0.8125rem] max-lg:[text-align:inherit] 2xl:hidden", styles.className4)} data-component="heading">
          {d.title2}
        </h2>
      </div>
    </div>
  );
}
