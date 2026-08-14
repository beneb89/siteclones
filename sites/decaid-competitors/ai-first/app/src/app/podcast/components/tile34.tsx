import type { Tile34Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile34Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile34({ d, styles }: { d: Tile34Data; styles: Tile34Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.8125rem] leading-[2.375rem] [overflow-wrap:break-word] md:max-lg:text-3xl", styles.className)}>
          Wie setzt HORNBACH KI im Content Marketing ein?
        </span>
      </span>
    </div>
  );
}
