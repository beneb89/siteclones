import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <p className={cn("block", styles.className)}>
      <strong className="inline font-bold">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
