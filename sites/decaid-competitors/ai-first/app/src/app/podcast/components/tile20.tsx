import type { Tile20Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile20Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile20({ d, styles }: { d: Tile20Data; styles: Tile20Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[2.0625rem] leading-[2.625rem] [overflow-wrap:break-word] md:max-lg:text-[2.4375rem] md:max-lg:leading-[3.125rem]", styles.className)}>
          Wie du ein CEO-Office aus KI-Agenten aufbaust
        </span>
      </span>
    </div>
  );
}
