import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.000833333,0,0,0,1)]", styles.className)}>
      <h1 className={cn("block [font-family:'Raveo_Variable_Variable',_sans-serif] text-[4rem] [font-weight:1000] leading-17 tracking-[-2.56px] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] max-lg:text-[2.5rem] max-lg:leading-11 max-lg:tracking-[-1.6px]", styles.className2)} data-component="heading" dir="auto">
        {d.title}
      </h1>
    </div>
  );
}
