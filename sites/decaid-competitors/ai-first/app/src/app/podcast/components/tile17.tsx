import type { Tile17Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile17Data = {
  ariahidden?: string;
};
/** A content tile. */
export default function Tile17({ d, styles }: { d: Tile17Data; styles: Tile17Styles }) {
  return (
    <div className="block col-start-1 row-start-1">
      <span className="inline" aria-hidden={d.ariahidden} lang="de">
        <span className={cn("inline px-0.5 [font-family:'Martina_Plantijn',_serif] text-3xl leading-[2.4375rem] [overflow-wrap:break-word] md:max-lg:text-4xl md:max-lg:leading-[2.9375rem]", styles.className)}>
          Warum KI kein Tool und auch kein Mitarbeiter ist
        </span>
      </span>
    </div>
  );
}
