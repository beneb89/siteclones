import type { Tile24Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile24Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile24({ d, styles }: { d: Tile24Data; styles: Tile24Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[2.3125rem] leading-[3rem] [overflow-wrap:break-word] md:max-lg:text-[2.75rem] md:max-lg:leading-[3.5625rem]", styles.className)}>
          Wie man ein AI-First Startup aufbaut
        </span>
      </span>
    </div>
  );
}
