import type { FeatureCard5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard5Data = {
  text: string;
  title: string;
  description: string;
  title2: string;
};
/** A feature card. */
export default function FeatureCard5({ d, styles }: { d: FeatureCard5Data; styles: FeatureCard5Styles }) {
  return (
    <div className={cn("block p-5 bg-background 2xl:grid 2xl:py-6 2xl:items-baseline 2xl:gap-8 2xl:grid-cols-[38.25px_809.75px] 2xl:px-0 2xl:bg-[initial]", styles.className)}>
      <div className="block mb-[0.4rem] text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.6px] uppercase max-md:mb-1.5 max-md:leading-4 2xl:mb-0 2xl:text-[color:inherit] 2xl:[font-family:inherit] 2xl:[font-size:inherit] 2xl:[font-weight:inherit] 2xl:leading-[inherit] 2xl:tracking-[inherit] 2xl:[text-transform:inherit]">
        {d.text}
        <h3 className="hidden 2xl:block 2xl:mb-[0.4rem] 2xl:[font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] 2xl:text-[1.375rem] 2xl:font-medium 2xl:leading-[1.75rem] 2xl:tracking-[-0.22px]">
          {d.title}
        </h3>
        <p className="hidden 2xl:block 2xl:max-w-144 2xl:text-muted-foreground 2xl:text-[0.9375rem] 2xl:leading-[1.5625rem]">
          {d.description}
        </p>
      </div>
      <h3 className="block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-base font-medium leading-[1.25rem] 2xl:hidden" data-component="heading">
        {d.title2}
      </h3>
    </div>
  );
}
