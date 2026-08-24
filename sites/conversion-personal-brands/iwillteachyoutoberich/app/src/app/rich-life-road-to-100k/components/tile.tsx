import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  label: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <button className={cn("border border-solid block py-[0.5625rem] px-4 rounded-[999px] [font-family:Inter,_sans-serif] text-[0.9375rem] font-bold leading-4 text-center cursor-pointer", styles.className)} data-component="button" type="button">
      {d.label}
    </button>
  );
}
