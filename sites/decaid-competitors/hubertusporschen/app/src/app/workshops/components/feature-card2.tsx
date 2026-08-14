import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard2Data = {
  text: string;
  text2: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <div className={cn("block py-[38.3px] bg-color-002 max-md:py-9 2xl:border-l-primary 2xl:py-[1.8625rem] 2xl:px-5 2xl:text-center 2xl:bg-surface-2", styles.className)}>
      <div className="block mb-3 text-accent [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-5xl font-medium italic leading-12 tracking-[-1.2px] 2xl:mb-2 2xl:text-primary 2xl:text-[2.625rem] 2xl:leading-10.5 2xl:tracking-[-0.84px] 2xl:[font-weight:inherit]">
        {d.text}
      </div>
      <div className="hidden 2xl:block 2xl:text-muted-foreground 2xl:[font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] 2xl:text-[0.625rem] 2xl:leading-3.5 2xl:tracking-[1.4px] 2xl:uppercase">
        {d.text2}
      </div>
      {" "}
      <h3 className="block mb-3 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-semibold leading-[1.5625rem] 2xl:hidden" data-component="heading">
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
