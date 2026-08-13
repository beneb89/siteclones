import type { FeatureCard7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard7Data = {
  title: string;
};
/** A feature card. */
export default function FeatureCard7({ d, styles }: { d: FeatureCard7Data; styles: FeatureCard7Styles }) {
  return (
    <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className)}>
      <h6 className="block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] 2xl:hidden" data-component="heading">
        {d.title}
      </h6>
    </div>
  );
}
