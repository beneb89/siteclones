import type { Tile13Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile13Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile13({ d, styles }: { d: Tile13Data; styles: Tile13Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-2xl leading-[1.9375rem] [overflow-wrap:break-word] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.3125rem]", styles.className)}>
          Wie Finanzfluss menschliche Stärken mit KI-Fähigkeiten im Journalismus verbindet
        </span>
      </span>
    </div>
  );
}
