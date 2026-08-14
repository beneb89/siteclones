import type { FeatureCard4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard4Data = {
  title: string;
  description: string;
  text: string;
};
/** A feature card. */
export default function FeatureCard4({ d, styles }: { d: FeatureCard4Data; styles: FeatureCard4Styles }) {
  return (
    <div className="flex p-6 items-start gap-5 bg-background max-md:flex-col 2xl:hidden">
      <div className={cn("block shrink-0 2xl:hidden", styles.className)}>
        <h3 className={cn("block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-medium leading-[1.9375rem] tracking-[-0.18px] max-md:leading-[1.8125rem] 2xl:hidden", styles.className2)} data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className={cn("block mt-1 text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden", styles.className3)}>
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
      <div className="block mt-1 shrink-0 text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.5625rem] leading-[0.9375rem] tracking-[1.08px] uppercase max-md:leading-[0.875rem] 2xl:hidden">
        {d.text}
      </div>
      {" "}
    </div>
  );
}
