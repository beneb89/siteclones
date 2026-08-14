import type { FeatureCard5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard5Data = {
  text: string;
  title: string;
  description: string;
  text2: string;
};
/** A feature card. */
export default function FeatureCard5({ d, styles }: { d: FeatureCard5Data; styles: FeatureCard5Styles }) {
  return (
    <article className={cn("border-t-[3px] border-solid flex py-8 px-[1.8625rem] flex-col bg-surface-2 max-md:px-7 2xl:hidden", styles.className)}>
      <div className={cn("block mb-3 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden", styles.className2)}>
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-3 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-medium italic leading-[1.625rem] tracking-[-0.33px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block grow text-muted-foreground text-sm leading-[1.4375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <div className={cn("border-t border-solid border-t-border block mt-4 pt-4 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.6px] uppercase max-md:leading-4 2xl:hidden", styles.className3)}>
        {d.text2}
      </div>
      {" "}
    </article>
  );
}
