import type { FeatureCard4Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type FeatureCard4Data = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard4({ d, styles }: { d: FeatureCard4Data; styles: FeatureCard4Styles }) {
  return (
    <div className={cn("hidden grid-cols-[auto_1fr] 2xl:w-220 2xl:grid 2xl:py-6 2xl:items-baseline 2xl:gap-8", styles.className)}>
      <div className="hidden 2xl:block">
        <h3 className="hidden 2xl:block 2xl:mb-[0.4rem] 2xl:[font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] 2xl:text-[1.375rem] 2xl:font-medium 2xl:leading-[1.75rem] 2xl:tracking-[-0.22px]">
          {d.title}
        </h3>
        {" "}
        <p className="hidden 2xl:block 2xl:max-w-144 2xl:text-muted-foreground 2xl:text-[0.9375rem] 2xl:leading-[1.5625rem]">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
