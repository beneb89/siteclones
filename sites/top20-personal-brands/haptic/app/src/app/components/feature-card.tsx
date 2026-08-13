import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className)}>
      <h3 className="block [font-family:'GT_Standard_L_Medium',_'GT_Standard_L_Medium_Placeholder',_sans-serif] text-[2.625rem] font-medium leading-10.5 tracking-[-0.63px] max-lg:text-[2rem] max-lg:leading-8 max-lg:tracking-[-0.48px]" data-component="heading" dir="auto">
        <a className="inline cursor-pointer" data-component="link" href="/">
          {d.title}
        </a>
      </h3>
    </div>
  );
}
