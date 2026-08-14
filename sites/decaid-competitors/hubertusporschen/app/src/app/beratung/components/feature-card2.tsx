import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard2Data = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <div className={cn("w-220 grid py-6 items-baseline gap-8 grid-cols-[auto_1fr] max-md:w-[20.9375rem] md:max-lg:w-[43.2rem]", styles.className)}>
      <div className="block">
        <h3 className="block mb-[0.4rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-medium leading-[1.75rem] tracking-[-0.22px] max-md:mb-1.5" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="w-full max-w-144 block text-muted-foreground text-[0.9375rem] leading-[1.5625rem]">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
