import type { Tile53Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile53Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile53({ d, styles }: { d: Tile53Data; styles: Tile53Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.5625rem] leading-[2.0625rem] [overflow-wrap:break-word]", styles.className)}>
          KI bei Otto skalieren: Wie 60 Ambassadoren 6.000 Mitarbeitende mitnehmen
        </span>
      </span>
    </div>
  );
}
