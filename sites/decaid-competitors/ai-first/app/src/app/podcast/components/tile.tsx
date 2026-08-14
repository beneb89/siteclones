import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="block min-w-0 col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.6875rem] leading-[2.1875rem] [overflow-wrap:break-word]", styles.className)}>
          Agentic AI im ERP: Wie BLP 300 Agenten in Kernprozesse bringt
        </span>
      </span>
    </div>
  );
}
