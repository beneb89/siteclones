import type { FeatureCard4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard4Data = {
  href: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard4({ d, styles }: { d: FeatureCard4Data; styles: FeatureCard4Styles }) {
  return (
    <div className={cn("h-6 block absolute top-2.5 shrink-0", styles.className)}>
      <a className="h-6 flex relative justify-center items-center content-center gap-0.5 text-primary cursor-pointer" data-component="link" href={d.href}>
        <div className="w-1 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
          <h6 className="block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem]" data-component="heading">
            [
          </h6>
        </div>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className2)}>
          <h6 className="block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem]" data-component="heading">
            {d.title}
          </h6>
        </div>
        <div className="w-1 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap">
          <h6 className="block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem]" data-component="heading">
            ]
          </h6>
        </div>
      </a>
    </div>
  );
}
