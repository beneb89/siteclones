import type { Tile12Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile12Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile12({ d, styles }: { d: Tile12Data; styles: Tile12Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.1875rem] leading-[1.5625rem] [overflow-wrap:break-word] md:max-lg:text-2xl md:max-lg:leading-[1.9375rem]", styles.className)}>
          Der Nightmare Competitor Ansatz bei Gebr. Dorfner: "Wie würde ein Wettbewerber mit KI unser Geschäftsmodell disruptieren?”
        </span>
      </span>
    </div>
  );
}
