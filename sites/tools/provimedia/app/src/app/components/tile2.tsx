import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  description: string;
  description2: string;
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("border border-solid block p-4 rounded-2xl", styles.className)}>
      <div className="flex justify-between items-start gap-3">
        <div className="block min-w-0">
          <p className={cn("block font-semibold text-pretty", styles.className2)}>
            {d.description}
          </p>
          <p className="block text-muted-foreground text-xs leading-4 text-pretty">
            {d.description2}
          </p>
        </div>
        <span className={cn("block min-w-0 shrink-0", styles.className3)}>
          {d.text}
        </span>
      </div>
      <div className="flex mt-3 items-baseline gap-4">
        <span className="block min-w-0 text-lg font-bold leading-7">
          {d.text2}
        </span>
        <span className="block min-w-0 text-muted-foreground">
          {d.text3}
        </span>
      </div>
    </div>
  );
}
