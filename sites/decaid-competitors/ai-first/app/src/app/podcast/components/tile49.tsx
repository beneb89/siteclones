import type { Tile49Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile49Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile49({ d, styles }: { d: Tile49Data; styles: Tile49Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-2xl leading-[1.9375rem] [overflow-wrap:break-word] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.875rem]", styles.className)}>
          Zentral befähigen, dezentral umsetzen: Das hybride KI-Transformationsmodell von Breuninger
        </span>
      </span>
    </div>
  );
}
