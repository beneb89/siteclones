import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.75rem] leading-[2.25rem] [overflow-wrap:break-word] max-md:text-[1.6875rem] max-md:leading-[2.1875rem] md:max-lg:text-[0.8125rem] md:max-lg:leading-[1rem]", styles.className)}>
          Agentic AI im ERP: Wie BLP 300 Agenten in Kernprozesse bringt
        </span>
      </span>
    </div>
  );
}
