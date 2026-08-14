import type { FeatureCard3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard3Data = {
  text: string;
  text2: string;
  text3: string;
  title: string;
  description: string;
  text4: string;
};
/** A feature card. */
export default function FeatureCard3({ d, styles }: { d: FeatureCard3Data; styles: FeatureCard3Styles }) {
  return (
    <article className={cn("border border-solid flex py-9 px-8 flex-col bg-color-002 2xl:hidden", styles.className)}>
      <div className={cn("block mb-[14.9px] [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[2px] uppercase max-md:mb-3.5 max-md:leading-4 2xl:hidden", styles.className2)}>
        {d.text}
      </div>
      {" "}
      <div className="block mb-5.5 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-5xl font-medium italic leading-12 tracking-[-1.2px] 2xl:hidden">
        {d.text2}
        <small className="inline ml-[0.4rem] text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.8125rem] not-italic leading-[0.8125rem] tracking-[normal] max-md:ml-1.5 2xl:hidden">
          {d.text3}
        </small>
      </div>
      {" "}
      <h3 className="block mb-[0.6625rem] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-semibold leading-[1.625rem] max-md:mb-2.5 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <div className={cn("border-t border-solid border-t-border block pt-4.5 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden", styles.className3)}>
        {d.text4}
      </div>
      {" "}
    </article>
  );
}
