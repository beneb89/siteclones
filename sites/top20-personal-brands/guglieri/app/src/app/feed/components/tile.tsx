import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  dir?: string;
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("relative shrink-0", styles.className)}>
      <p className={cn("block text-color-003 text-[1.375rem] leading-6.5", styles.className2)} dir={d.dir}>
        {d.description}
      </p>
    </div>
  );
}
