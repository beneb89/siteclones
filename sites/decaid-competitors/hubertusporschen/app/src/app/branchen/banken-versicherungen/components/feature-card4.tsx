import type { FeatureCard4Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type FeatureCard4Data = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard4({ d, styles }: { d: FeatureCard4Data; styles: FeatureCard4Styles }) {
  return (
    <li className={cn("list-item relative py-6 pl-18 2xl:hidden", styles.className)}>
      <h3 className="block mb-1.5 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-semibold leading-6.5 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      <p className="w-full max-w-139.5 block text-muted-foreground text-[0.9375rem] leading-6 2xl:hidden">
        {d.description}
      </p>
    </li>
  );
}
