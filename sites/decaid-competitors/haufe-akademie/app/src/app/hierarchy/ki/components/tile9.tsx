import type { Tile9Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Tile9Data = {
  value: string;
  text: string;
};
/** A content tile. */
export default function Tile9({ d, styles }: { d: Tile9Data; styles: Tile9Styles }) {
  return (
    <option className={cn("min-h-6 block min-w-6 pb-px px-0.5 items-center gap-2 whitespace-nowrap 2xl:hidden", styles.className)} value={d.value}>
      {d.text}
    </option>
  );
}
