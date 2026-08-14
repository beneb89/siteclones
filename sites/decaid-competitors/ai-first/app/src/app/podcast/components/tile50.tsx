import type { Tile50Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile50Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile50({ d, styles }: { d: Tile50Data; styles: Tile50Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-2xl leading-[1.9375rem] [overflow-wrap:break-word] md:max-lg:text-[1.75rem] md:max-lg:leading-[2.25rem]", styles.className)}>
          KI-Transformation bei RWE: Wie ein Energieriese mit der schnellsten Technologie unserer Zeit umgeht
        </span>
      </span>
    </div>
  );
}
