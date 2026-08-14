import type { Tile8Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile8Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile8({ d, styles }: { d: Tile8Data; styles: Tile8Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-[1.6875rem] leading-[2.1875rem] [overflow-wrap:break-word] md:max-lg:text-[2rem] md:max-lg:leading-[2.625rem]", styles.className)}>
          Agentic Engineering: Wie arbeiten das Tech-Team bei mobile.de mit KI?
        </span>
      </span>
    </div>
  );
}
