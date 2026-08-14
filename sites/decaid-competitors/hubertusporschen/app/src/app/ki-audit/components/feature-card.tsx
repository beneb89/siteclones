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
    <article className={cn("border-t-[3px] border-solid block p-[1.8625rem] bg-background max-md:p-7 2xl:hidden", styles.className)}>
      <div className={cn("block mb-2 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden", styles.className2)}>
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-2 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-medium leading-[1.5rem] tracking-[-0.19px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </article>
  );
}
