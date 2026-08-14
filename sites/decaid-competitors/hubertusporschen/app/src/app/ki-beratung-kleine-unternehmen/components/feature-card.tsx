import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("block py-6 px-[1.8625rem] bg-background max-md:px-7", styles.className)}>
      <div className="block mb-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      <h3 className="block mb-[0.4rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] font-medium leading-[1.375rem] max-md:mb-1.5 max-md:text-[1.0625rem] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      <p className="block text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
    </div>
  );
}
