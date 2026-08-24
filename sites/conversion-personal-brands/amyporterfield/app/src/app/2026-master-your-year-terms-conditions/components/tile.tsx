import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("h-[1.4375rem] block absolute transform-[none] max-md:h-7 max-md:left-[1.4375rem]", styles.className)}>
      <nav className="box-content h-full block absolute top-0 inset-x-0 text-primary [font-family:'IvyPresto_Headline_Regular'] text-lg leading-[1.8125rem] text-left max-md:leading-[2rem]" data-component="nav">
        {d.text}
      </nav>
    </div>
  );
}
