import type { Tile9Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile9Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile9({ d, styles }: { d: Tile9Data; styles: Tile9Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.625rem] leading-[2.125rem] [overflow-wrap:break-word] md:max-lg:text-[2rem] md:max-lg:leading-[2.625rem]", styles.className)}>
          Wie eine Stadt mit 40.000 Einwohnern vormacht, wie KI-Transformation geht.
        </span>
      </span>
    </div>
  );
}
