import type { Tile46Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile46Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile46({ d, styles }: { d: Tile46Data; styles: Tile46Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.3125rem] leading-[1.6875rem] [overflow-wrap:break-word] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.875rem]", styles.className)}>
          Vom 1. Leuchtturmprojekt zum KI-Kompetenzzentrum: Nachhaltige KI-Wertschöpfung bei Dachser
        </span>
      </span>
    </div>
  );
}
