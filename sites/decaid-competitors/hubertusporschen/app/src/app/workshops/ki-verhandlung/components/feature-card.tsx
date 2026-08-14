import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <article className={cn("h-65 min-h-65 flex py-[38.3px] flex-col gap-3 bg-color-002 max-md:py-9 2xl:hidden", styles.className)}>
      <div className="block mb-2 text-accent [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-5xl font-medium italic leading-12 tracking-[-1.2px] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-semibold leading-[1.625rem] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-6 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </article>
  );
}
