import type { FeatureCard3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard3Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard3({ d, styles }: { d: FeatureCard3Data; styles: FeatureCard3Styles }) {
  return (
    <div className="block p-6 bg-background 2xl:hidden">
      <div className="block mb-2 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      <h3 className={cn("block mb-1 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] font-medium leading-[1.3125rem] 2xl:hidden", styles.className)} data-component="heading">
        {d.title}
      </h3>
      <p className="block text-muted-foreground text-[0.8125rem] leading-[1.25rem] 2xl:hidden">
        {d.description}
      </p>
    </div>
  );
}
