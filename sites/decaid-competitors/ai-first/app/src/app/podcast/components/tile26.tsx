import type { Tile26Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile26Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile26({ d, styles }: { d: Tile26Data; styles: Tile26Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-2xl leading-[1.9375rem] [overflow-wrap:break-word] md:max-lg:text-[1.4375rem] md:max-lg:leading-[1.875rem]", styles.className)}>
          AI Governance bei Payback: Wie Legal und Data gemeinsam den Weg für KI freimachen
        </span>
      </span>
    </div>
  );
}
