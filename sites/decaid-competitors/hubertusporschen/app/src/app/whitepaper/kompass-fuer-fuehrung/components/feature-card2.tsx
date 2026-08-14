import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type FeatureCard2Data = {
  text: string;
  title: string;
  title2: string;
  description: string;
  text2: string;
  text3: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <article className={cn("h-[390.7px] min-h-80 border-r border-solid border-r-border border-b border-b-border flex py-8 flex-col gap-[14.9px] bg-color-002 max-md:gap-3.5 2xl:hidden", styles.className)}>
      <div className={cn("block [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden", styles.className2)}>
        {d.text}
      </div>
      {" "}
      <h3 className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-semibold leading-[1.625rem] tracking-[-0.44px] 2xl:hidden" data-component="heading">
        {d.title}
        <em className="inline text-muted-foreground font-medium italic 2xl:hidden">
          {d.title2}
        </em>
        {" "}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.4375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <div className={cn("border-t border-solid border-t-border block pt-[14.9px] text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.6px] uppercase max-md:pt-3.5 max-md:leading-4 2xl:hidden", styles.className3)}>
        <b className="inline text-primary font-semibold 2xl:hidden">
          {d.text2}
        </b>
        {d.text3}
      </div>
      {" "}
    </article>
  );
}
