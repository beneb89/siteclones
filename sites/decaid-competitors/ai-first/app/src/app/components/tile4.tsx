import type { Tile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile4Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-2xl leading-[1.9375rem] [overflow-wrap:break-word] max-md:text-[1.4375rem] max-md:leading-[1.8125rem] md:max-lg:text-[0.5625rem] md:max-lg:leading-[0.6875rem]", styles.className)}>
          Vom CDO zum Solo-Founder: Wie Carlos Riebeling mit KI ein D2C-Unternehmen allein skaliert
        </span>
      </span>
    </div>
  );
}
