import type { Tile27Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile27Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile27({ d, styles }: { d: Tile27Data; styles: Tile27Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[2.5625rem] leading-[3.3125rem] [overflow-wrap:break-word] md:max-lg:text-[3.0625rem] md:max-lg:leading-[4rem]", styles.className)}>
          KI-Prognosen 2026
        </span>
      </span>
    </div>
  );
}
