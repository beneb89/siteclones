import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="block">
      {d.text}
      <span className={cn("block mt-1 text-background text-xs leading-4.5 tracking-[0.48px]", styles.className)}>
        {d.text2}
      </span>
    </div>
  );
}
