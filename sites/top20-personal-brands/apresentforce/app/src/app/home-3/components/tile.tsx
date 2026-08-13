import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("flex absolute flex-col justify-start shrink-0 max-lg:hidden 2xl:hidden", styles.className)}>
      <p className={cn("block text-color-010 max-lg:hidden 2xl:hidden", styles.className2)}>
        {d.description}
      </p>
    </div>
  );
}
