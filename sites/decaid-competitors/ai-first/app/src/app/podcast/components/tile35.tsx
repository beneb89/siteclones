import type { Tile35Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile35Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile35({ d, styles }: { d: Tile35Data; styles: Tile35Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.8125rem] leading-[2.375rem] [overflow-wrap:break-word] md:max-lg:text-3xl md:max-lg:leading-[2.4375rem]", styles.className)}>
          KI-Hackathons: Wie die Otto Group ihre KI-Reise beschleunigt
        </span>
      </span>
    </div>
  );
}
