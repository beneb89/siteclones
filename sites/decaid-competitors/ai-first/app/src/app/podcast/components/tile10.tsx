import type { Tile10Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile10Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile10({ d, styles }: { d: Tile10Data; styles: Tile10Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.8125rem] leading-[2.375rem] [overflow-wrap:break-word] md:max-lg:text-[2.1875rem] md:max-lg:leading-[2.8125rem]", styles.className)}>
          Wie ein Full AI Studio Filme (fast) ohne Menschen produziert
        </span>
      </span>
    </div>
  );
}
