import type { Tile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile4Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className={cn("flex justify-between items-center text-xs leading-4", styles.className)}>
      <span className="block text-muted-foreground">
        {d.text}
      </span>
      <span className="block text-color-006 font-bold">
        {d.text2}
      </span>
    </div>
  );
}
