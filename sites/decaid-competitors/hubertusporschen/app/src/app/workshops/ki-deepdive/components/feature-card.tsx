import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("block 2xl:hidden", styles.className)}>
      <h3 className="block mb-3 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-semibold leading-6 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
