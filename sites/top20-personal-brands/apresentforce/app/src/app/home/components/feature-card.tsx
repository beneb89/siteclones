import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("flex relative p-2 rounded-[199px] flex-col justify-center items-center content-center shrink-0 gap-2.5 after:content-[''] after:block after:absolute after:inset-0 after:h-6 after:rounded-tl-[199px]", styles.className)}>
      <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className2)}>
        <h6 className="block text-color-005 [font-family:'ABC_Diatype_Regular',_'ABC_Diatype_Regular_Placeholder',_sans-serif] text-[0.625rem] leading-2 tracking-[1px] uppercase" data-component="heading">
          {d.title}
        </h6>
      </div>
    </div>
  );
}
