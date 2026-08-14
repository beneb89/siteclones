import type { Tile31Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile31Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile31({ d, styles }: { d: Tile31Data; styles: Tile31Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.75rem] leading-[2.25rem] [overflow-wrap:break-word] md:max-lg:text-[2.125rem] md:max-lg:leading-[2.75rem]", styles.className)}>
          13 Jahre in der Daten- und KI-Welt: Was funktioniert wirklich?
        </span>
      </span>
    </div>
  );
}
