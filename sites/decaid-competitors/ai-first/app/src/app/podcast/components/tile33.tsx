import type { Tile33Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile33Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile33({ d, styles }: { d: Tile33Data; styles: Tile33Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-3xl leading-[2.375rem] [overflow-wrap:break-word] md:max-lg:text-4xl md:max-lg:leading-[2.875rem]", styles.className)}>
          Wie komme ich auf Platz 1 in den KI-Suchergebnissen?
        </span>
      </span>
    </div>
  );
}
