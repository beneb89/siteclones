import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  text: string;
  text2: string;
  title: string;
  title2: string;
  description: string;
  text3: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <article className="flex py-[38.3px] px-8 flex-col gap-[14.9px] bg-background max-md:py-9 max-md:gap-3.5 2xl:hidden">
      <div className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[3.25rem] italic leading-13 2xl:hidden">
        {d.text}
      </div>
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden">
        {d.text2}
      </div>
      <h3 className="block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-semibold leading-[1.75rem] 2xl:hidden" data-component="heading">
        {d.title}
        <em className="inline text-muted-foreground font-medium italic 2xl:hidden">
          {d.title2}
        </em>
      </h3>
      <p className="block text-muted-foreground text-[0.9375rem] leading-6 2xl:hidden">
        {d.description}
      </p>
      <div className={cn("border-t border-solid border-t-border block pt-3 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4 2xl:hidden", styles.className)}>
        {d.text3}
      </div>
    </article>
  );
}
