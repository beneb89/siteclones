import type { Tile41Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile41Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile41({ d, styles }: { d: Tile41Data; styles: Tile41Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.625rem] leading-[2.0625rem] [overflow-wrap:break-word] md:max-lg:text-[2rem] md:max-lg:leading-[2.5625rem]", styles.className)}>
          Was passiert mit einer Kommunikationsagentur durch Large Language Models?
        </span>
      </span>
    </div>
  );
}
