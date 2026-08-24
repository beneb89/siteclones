import type { TileStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type TileData = {
  disabled?: boolean;
  selected?: boolean;
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <option className={cn("box-content min-h-6 block min-w-6 pb-px px-0.5 items-center gap-[7.5px] font-normal whitespace-nowrap", styles.className)} disabled={d.disabled} selected={d.selected} value={d.value}>
      {d.text}
    </option>
  );
}
