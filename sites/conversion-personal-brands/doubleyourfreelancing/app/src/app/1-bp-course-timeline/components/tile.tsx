import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("block max-h-[1e+06px] p-px [overflow-wrap:break-word] 2xl:hidden", styles.className)}>
      <p className={cn("block max-h-[1e+06px] text-color-002 2xl:hidden", styles.className2)}>
        {d.description}
      </p>
    </div>
  );
}
