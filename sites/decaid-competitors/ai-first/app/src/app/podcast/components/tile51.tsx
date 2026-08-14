import type { Tile51Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile51Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile51({ d, styles }: { d: Tile51Data; styles: Tile51Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.5625rem] leading-[2rem] [overflow-wrap:break-word] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.375rem]", styles.className)}>
          Schwarze Magie in KI: Cyberangriffe, Deep Fakes und wie wir uns davor schützen können
        </span>
      </span>
    </div>
  );
}
