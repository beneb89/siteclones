import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("grid py-6 items-baseline gap-8 grid-cols-[auto_1fr] 2xl:hidden", styles.className)}>
      <div className="block 2xl:hidden">
        <h3 className="block mb-[0.4rem] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-semibold leading-[1.75rem] max-md:mb-1.5 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        <p className="w-full max-w-144 block text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
          {d.description}
        </p>
      </div>
    </div>
  );
}
