import type { Tile43Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile43Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile43({ d, styles }: { d: Tile43Data; styles: Tile43Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[2.125rem] leading-[2.75rem] [overflow-wrap:break-word] md:max-lg:text-[2.5625rem] md:max-lg:leading-[3.3125rem]", styles.className)}>
          Wie funktioniert KI-Governance in einer Bank?
        </span>
      </span>
    </div>
  );
}
