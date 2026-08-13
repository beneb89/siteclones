import type { Tile6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile6Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile6({ d, styles }: { d: Tile6Data; styles: Tile6Styles }) {
  return (
    <div className={cn("grid py-2.5 px-3.5 rounded-lg items-center gap-3.5 text-[0.8125rem] leading-[1.1875rem] bg-surface-2 max-md:gap-1 max-md:grid-cols-1", styles.className)}>
      <b className="block font-semibold [overflow-wrap:break-word]">
        {d.text}
      </b>
      <span className={cn("block min-w-0 text-right [word-break:break-word] max-md:text-left", styles.className2)}>
        {d.text2}
      </span>
    </div>
  );
}
