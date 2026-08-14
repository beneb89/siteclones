import type { Tile16Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile16Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile16({ d, styles }: { d: Tile16Data; styles: Tile16Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[2rem] leading-[2.625rem] [overflow-wrap:break-word] md:max-lg:text-[2.375rem] md:max-lg:leading-[3.0625rem]", styles.className)}>
          Wie wir unser KI-Betriebssystem aufgebaut haben
        </span>
      </span>
    </div>
  );
}
