import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("block absolute transform-[none] max-md:hidden", styles.className)}>
      <p className="box-content h-full block absolute top-0 inset-x-0 text-color-001 [font-family:'Belluga_Script'] text-2xl leading-[2.5625rem] text-center">
        {d.description}
      </p>
    </div>
  );
}
