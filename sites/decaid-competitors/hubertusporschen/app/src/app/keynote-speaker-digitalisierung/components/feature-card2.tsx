import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard2Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <div className={cn("block p-6 bg-background 2xl:hidden", styles.className)}>
      <div className={cn("block mb-2 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden", styles.className2)}>
        {d.text}
      </div>
      <h3 className="block mb-1 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-base font-medium leading-[1.3125rem] max-md:[font-size:inherit] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      <p className="block text-muted-foreground text-sm leading-[1.3125rem] 2xl:hidden">
        {d.description}
      </p>
    </div>
  );
}
