import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard2Data = {
  title: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className)}>
      <h5 className={cn("block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-2xl leading-[1.8125rem]", styles.className2)} data-component="heading">
        {d.title}
      </h5>
    </div>
  );
}
