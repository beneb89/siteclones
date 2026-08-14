import type { FeatureCard7Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard7Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard7({ d, styles }: { d: FeatureCard7Data; styles: FeatureCard7Styles }) {
  return (
    <li className={cn("grid py-6 items-start gap-6 grid-cols-[100px_1fr] max-md:gap-2 max-md:grid-cols-1 2xl:hidden", styles.className)}>
      <span className="block pt-1 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden">
        {d.text}
      </span>
      <div className="block 2xl:hidden">
        <h3 className="block mb-1 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-lg font-medium leading-[1.4375rem] tracking-[-0.18px] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        <p className="block text-muted-foreground text-[0.9375rem] leading-6 2xl:hidden">
          {d.description}
        </p>
      </div>
    </li>
  );
}
