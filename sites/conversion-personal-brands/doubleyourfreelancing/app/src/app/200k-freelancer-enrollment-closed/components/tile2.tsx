import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("block max-h-[1e+06px] p-px [overflow-wrap:break-word] 2xl:hidden", styles.className)}>
      <p className={cn("block max-h-[1e+06px] 2xl:hidden", styles.className2)}>
        {d.description}
      </p>
    </div>
  );
}
