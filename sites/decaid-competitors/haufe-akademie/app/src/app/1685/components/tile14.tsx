import type { Tile14Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile14Data = {
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile14({ d, styles }: { d: Tile14Data; styles: Tile14Styles }) {
  return (
    <option className={cn("min-h-6 block min-w-6 pb-px px-0.5 items-center gap-[0.4375rem] whitespace-nowrap", styles.className)} value={d.value}>
      {d.text}
    </option>
  );
}
