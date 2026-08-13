import type { Tile7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile7Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile7({ d, styles }: { d: Tile7Data; styles: Tile7Styles }) {
  return (
    <div className="grid py-2.5 px-3.5 rounded-lg items-center gap-3.5 text-[0.8125rem] leading-[1.1875rem] bg-surface-2 grid-cols-[110px_1fr] max-md:gap-1 max-md:grid-cols-1">
      <b className="block font-semibold [overflow-wrap:break-word]">
        {d.text}
      </b>
      <span className={cn("block min-w-0 text-right [word-break:break-word] max-md:text-left", styles.className)}>
        {d.text2}
      </span>
    </div>
  );
}
