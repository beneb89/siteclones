import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
  description: string;
  description2: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("border-t-[3px] border-solid border-t-accent block p-[1.8625rem] bg-surface-2 max-md:p-7 2xl:hidden", styles.className)}>
      <h3 className="block mb-3 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-medium leading-[1.5rem] tracking-[-0.19px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block mb-3 text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <p className="block text-color-025 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-sm italic leading-[1.5rem] max-md:leading-[1.375rem] 2xl:hidden">
        {d.description2}
      </p>
      {" "}
    </div>
  );
}
