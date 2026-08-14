import type { Tile13Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile13Data = {
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile13({ d, styles }: { d: Tile13Data; styles: Tile13Styles }) {
  return (
    <option className={cn("min-h-6 block min-w-6 pb-px px-0.5 items-center gap-2 whitespace-nowrap 2xl:hidden", styles.className)} value={d.value}>
      {d.text}
    </option>
  );
}
