import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("hidden 2xl:flex 2xl:absolute 2xl:flex-col 2xl:justify-start 2xl:shrink-0", styles.className)}>
      <p className={cn("hidden 2xl:block 2xl:text-color-010", styles.className2)}>
        {d.description}
      </p>
    </div>
  );
}
