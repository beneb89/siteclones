import type { Tile19Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile19Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile19({ d, styles }: { d: Tile19Data; styles: Tile19Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.5625rem] leading-[2rem] [overflow-wrap:break-word] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.875rem]", styles.className)}>
          Von der Geschäftsstelle bis zum Trainingsplatz: KI-Transformation beim VfL Wolfsburg
        </span>
      </span>
    </div>
  );
}
