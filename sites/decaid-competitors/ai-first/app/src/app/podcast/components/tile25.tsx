import type { Tile25Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile25Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile25({ d, styles }: { d: Tile25Data; styles: Tile25Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.6875rem] leading-[2.1875rem] [overflow-wrap:break-word] md:max-lg:text-[2.0625rem] md:max-lg:leading-[2.625rem]", styles.className)}>
          Wie man eine Daten- und KI-Organisation als Profit Center aufbaut
        </span>
      </span>
    </div>
  );
}
