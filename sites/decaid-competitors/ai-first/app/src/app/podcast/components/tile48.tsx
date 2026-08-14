import type { Tile48Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile48Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile48({ d, styles }: { d: Tile48Data; styles: Tile48Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.8125rem] leading-[2.375rem] [overflow-wrap:break-word] md:max-lg:text-[2.1875rem] md:max-lg:leading-[2.8125rem]", styles.className)}>
          {"Human-Centered AI im deutschen Maschinenbau bei W&H"}
        </span>
      </span>
    </div>
  );
}
