import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  ariapressed: string;
  label: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <button className={cn("block relative p-6 text-left cursor-default", styles.className)} data-component="button" aria-pressed={d.ariapressed} type="button">
      <span className={cn("inline text-foreground text-xl font-bold leading-[1.5625rem]", styles.className2)}>
        {d.label}
      </span>
    </button>
  );
}
