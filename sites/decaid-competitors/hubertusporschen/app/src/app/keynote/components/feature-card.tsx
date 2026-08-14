import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  text: string;
  text2: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="block relative z-1 px-5 text-center">
      <div className={cn("border-2 border-solid flex mb-6 mx-auto rounded-full justify-center items-center [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[2.625rem] italic leading-[4.4375rem] tracking-[-0.84px] bg-background w-24 h-24 max-md:leading-[4.1875rem]", styles.className)}>
        {d.text}
      </div>
      {" "}
      <div className={cn("block mb-[0.6625rem] [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:mb-2.5 max-md:leading-4", styles.className2)}>
        {d.text2}
      </div>
      {" "}
      <h3 className="block mb-3 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-medium leading-6 tracking-[-0.2px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.4375rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
