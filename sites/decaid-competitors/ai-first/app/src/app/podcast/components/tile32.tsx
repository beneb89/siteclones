import type { Tile32Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile32Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile32({ d, styles }: { d: Tile32Data; styles: Tile32Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.3125rem] leading-[1.6875rem] [overflow-wrap:break-word] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.875rem]", styles.className)}>
          SIGNAL IDUNA: Einblicke in den KI-Rollout auf 10.000 Mitarbeiter und die Skalierung von KI-Agenten
        </span>
      </span>
    </div>
  );
}
