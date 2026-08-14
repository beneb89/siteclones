import type { Tile55Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile55Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile55({ d, styles }: { d: Tile55Data; styles: Tile55Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.75rem] leading-[2.25rem] [overflow-wrap:break-word] md:max-lg:text-[2.0625rem] md:max-lg:leading-[2.6875rem]", styles.className)}>
          Die Agent Economy: Wie KI-Teams die Arbeitswelt verändern
        </span>
      </span>
    </div>
  );
}
