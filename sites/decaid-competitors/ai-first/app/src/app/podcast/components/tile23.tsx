import type { Tile23Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile23Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile23({ d, styles }: { d: Tile23Data; styles: Tile23Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.8125rem] leading-[2.375rem] [overflow-wrap:break-word] md:max-lg:text-3xl md:max-lg:leading-[2.4375rem]", styles.className)}>
          KI-Transformation bei REWE: Was funktioniert wirklich?
        </span>
      </span>
    </div>
  );
}
