import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  dir?: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={styles.className}>
      <p className={cn("2xl:text-color-028", styles.className2)} dir={d.dir}>
        {d.description}
      </p>
    </div>
  );
}
