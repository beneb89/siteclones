import type { Tile47Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile47Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile47({ d, styles }: { d: Tile47Data; styles: Tile47Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.5625rem] leading-[2.0625rem] [overflow-wrap:break-word] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.375rem]", styles.className)}>
          Generative KI trifft auf Automobilentwicklung: Die KI-Reise der IAV
        </span>
      </span>
    </div>
  );
}
