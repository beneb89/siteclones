import type { FeatureCard5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard5Data = {
  name: string;
  height: string;
  src: string;
  width: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard5({ d, styles }: { d: FeatureCard5Data; styles: FeatureCard5Styles }) {
  return (
    <div className={cn("w-full block relative rounded-2xl [align-self:start] shrink-0 gap-10 overflow-hidden aspect-square bg-surface transform-[matrix3d(1,0,0,0,0,1,0,0,0,0,1,-0.00125,0,0,0,1)] max-lg:gap-6 max-md:origin-[87.75px_87.75px] md:max-lg:origin-[186px_186px] 2xl:origin-[182.398px_182.398px]", styles.className)}>
      <div className={cn("block absolute top-8 shrink-0", styles.className2)} name={d.name}>
        <div className="h-full block">
          <div className="h-full block">
            <img className={cn("inline overflow-clip align-top 2xl:w-55", styles.className3)} height={d.height} src={d.src} width={d.width} alt="" />
          </div>
        </div>
      </div>
      <div className={cn("h-[1.4rem] flex absolute bottom-10 left-[clamp(87.8px,_50%,_calc(100%_-_87.8px))] z-1 flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className4)}>
        <h6 className="block text-color-001 [font-family:'Neue_Haas_Grotesk_Display_Pro_55_Roman',_'Neue_Haas_Grotesk_Display_Pro_55_Roman_Placeholder',_sans-serif] text-base leading-[1.375rem] text-center" data-component="heading">
          {d.title}
        </h6>
      </div>
    </div>
  );
}
