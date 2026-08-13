import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  href: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("block relative shrink-0 max-lg:hidden", styles.className)}>
      <a className="flex relative justify-center items-center content-center gap-0.5 text-primary cursor-pointer max-lg:hidden" data-component="link" href={d.href}>
        <div className="w-1 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
          <h6 className="block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] max-lg:hidden" data-component="heading">
            [
          </h6>
        </div>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className2)}>
          <h6 className="block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] max-lg:hidden" data-component="heading">
            {d.title}
          </h6>
        </div>
        <div className="w-1 flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
          <h6 className="block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] max-lg:hidden" data-component="heading">
            ]
          </h6>
        </div>
      </a>
    </div>
  );
}
