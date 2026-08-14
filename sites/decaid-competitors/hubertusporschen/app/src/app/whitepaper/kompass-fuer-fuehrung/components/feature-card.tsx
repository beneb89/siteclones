import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type FeatureCardData = {
  text: string;
  text2: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("border-r border-solid border-r-border border-b border-b-border block py-[38.3px] bg-color-002 max-md:py-9 2xl:hidden", styles.className)}>
      <div className="block mb-2 text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block mb-3 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[2.375rem] font-semibold italic leading-9.5 tracking-[-0.76px] 2xl:hidden">
        {d.text2}
      </div>
      {" "}
      <h3 className="block mb-[14.9px] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-semibold leading-[1.5625rem] max-md:mb-3.5 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-6 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
