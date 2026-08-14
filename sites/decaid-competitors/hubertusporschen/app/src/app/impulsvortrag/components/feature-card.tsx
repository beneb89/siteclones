import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  text: string;
  title: string;
  text2: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("border-t-[3px] border-solid block p-8 2xl:hidden", styles.className)}>
      <div className="block mb-2 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <h3 className={cn("block mb-1 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-medium leading-[1.625rem] tracking-[-0.22px] 2xl:hidden", styles.className2)} data-component="heading">
        {d.title}
      </h3>
      {" "}
      <div className={cn("block mb-4 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] leading-[1.125rem] tracking-[1.47px] uppercase max-md:leading-[1.0625rem] 2xl:hidden", styles.className3)}>
        {d.text2}
      </div>
      {" "}
      <p className={cn("block text-[0.9375rem] leading-[1.5625rem] 2xl:hidden", styles.className4)}>
        {d.description}
      </p>
      {" "}
    </div>
  );
}
