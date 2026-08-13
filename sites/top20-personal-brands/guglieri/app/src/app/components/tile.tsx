import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  dir?: string;
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("relative shrink-0 2xl:hidden", styles.className)}>
      <p className={cn("block text-color-027 text-[1.375rem] leading-6.5 2xl:hidden", styles.className2)} dir={d.dir}>
        {d.description}
      </p>
    </div>
  );
}
