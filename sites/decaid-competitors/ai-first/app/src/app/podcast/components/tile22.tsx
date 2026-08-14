import type { Tile22Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile22Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile22({ d, styles }: { d: Tile22Data; styles: Tile22Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.8125rem] leading-[2.375rem] [overflow-wrap:break-word] md:max-lg:text-[2.1875rem] md:max-lg:leading-[2.8125rem]", styles.className)}>
          AI for the rest of us: Wie KI endlich für alle zugänglich wird
        </span>
      </span>
    </div>
  );
}
