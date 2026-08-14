import type { Tile39Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile39Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile39({ d, styles }: { d: Tile39Data; styles: Tile39Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-3xl leading-[2.375rem] [overflow-wrap:break-word] md:max-lg:text-4xl md:max-lg:leading-[2.875rem]", styles.className)}>
          Wie baut man ein AI-First Unternehmen auf?
        </span>
      </span>
    </div>
  );
}
