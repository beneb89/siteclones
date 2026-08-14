import type { Tile42Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile42Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile42({ d, styles }: { d: Tile42Data; styles: Tile42Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.625rem] leading-[2.0625rem] [overflow-wrap:break-word] md:max-lg:text-[2rem] md:max-lg:leading-[2.5625rem]", styles.className)}>
          Wie balanciert man KI-Demokratisierung mit strategischem Impact?
        </span>
      </span>
    </div>
  );
}
