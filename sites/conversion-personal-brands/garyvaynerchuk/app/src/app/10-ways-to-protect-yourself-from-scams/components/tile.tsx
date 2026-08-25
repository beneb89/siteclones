import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = Record<string, never>;
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <span className="flex pl-7 items-center shrink-0 gap-7 max-md:pl-5 max-md:gap-5">
      <span className={cn("block", styles.className)}>
        Check out VeeFriends Cartoons!
      </span>
      <span className="w-[0.3125rem] h-[0.3125rem] block rounded-[50%] shrink-0 bg-color-002" />
    </span>
  );
}
