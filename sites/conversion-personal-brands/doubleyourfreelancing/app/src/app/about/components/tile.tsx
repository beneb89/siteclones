import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="block max-h-[1e+06px] p-px [overflow-wrap:break-word] 2xl:hidden">
      <p className={cn("block max-h-[1e+06px] 2xl:hidden", styles.className)}>
        {d.description}
      </p>
    </div>
  );
}
