import type { Tile4Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Tile4Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.6875rem] leading-[2.1875rem] [overflow-wrap:break-word] md:max-lg:text-xs md:max-lg:leading-[0.9375rem]", styles.className)}>
          Von CompanyGPT zur KI-Plattform – wie die Helaba KI konzernweit skaliert
        </span>
      </span>
    </div>
  );
}
