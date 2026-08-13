import type { Tile4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile4Data = {
  disabled?: boolean;
  selected?: boolean;
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <option className={cn("min-h-6 block min-w-6 pb-px px-0.5 items-center gap-[9.5px]", styles.className)} disabled={d.disabled} selected={d.selected} value={d.value}>
      {d.text}
    </option>
  );
}
