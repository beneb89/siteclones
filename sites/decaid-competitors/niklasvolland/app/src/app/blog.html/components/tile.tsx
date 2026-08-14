import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  label: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <button className={cn("border border-solid block py-2 px-4.5 rounded-[999px] text-[0.8125rem] font-medium leading-[1.0625rem] tracking-[0.13px] text-center cursor-pointer", styles.className)} data-component="button" type="button">
      {d.label}
    </button>
  );
}
