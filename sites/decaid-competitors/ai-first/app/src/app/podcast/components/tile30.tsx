import type { Tile30Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile30Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile30({ d, styles }: { d: Tile30Data; styles: Tile30Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.8125rem] leading-[2.375rem] [overflow-wrap:break-word] md:max-lg:text-[2.1875rem] md:max-lg:leading-[2.875rem]", styles.className)}>
          Unser KI-Tool Stack für maximale Produktivität
        </span>
      </span>
    </div>
  );
}
