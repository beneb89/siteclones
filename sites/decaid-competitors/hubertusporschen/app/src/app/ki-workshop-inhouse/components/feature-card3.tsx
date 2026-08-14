import type { FeatureCard3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard3Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard3({ d, styles }: { d: FeatureCard3Data; styles: FeatureCard3Styles }) {
  return (
    <li className={cn("grid py-[1.8625rem] items-start gap-[1.8625rem] grid-cols-[auto_1fr] max-md:py-7 max-md:gap-2 max-md:grid-cols-1 2xl:hidden", styles.className)}>
      <span className="block pt-1 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </span>
      {" "}
      <div className="block 2xl:hidden">
        <h3 className="block mb-[0.4rem] [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-medium leading-[1.5625rem] tracking-[-0.19px] max-md:mb-1.5 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        <p className="block text-muted-foreground text-[0.9375rem] leading-6 2xl:hidden">
          {d.description}
        </p>
      </div>
      {" "}
    </li>
  );
}
