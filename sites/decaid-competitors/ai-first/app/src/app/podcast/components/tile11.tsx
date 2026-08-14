import type { Tile11Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile11Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile11({ d, styles }: { d: Tile11Data; styles: Tile11Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-2xl leading-[1.9375rem] [overflow-wrap:break-word] md:max-lg:text-[1.75rem] md:max-lg:leading-[2.25rem]", styles.className)}>
          Heute entscheiden, morgen testen: KI-Transformation bei der Ostfriesischen Tee Gesellschaft
        </span>
      </span>
    </div>
  );
}
