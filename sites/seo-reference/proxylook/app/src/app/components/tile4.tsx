import type { Tile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile4Data = {
  text: string;
  style: string;
  text2: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className="grid items-center gap-3 text-[0.8125rem] leading-[1.375rem] grid-cols-[96px_1fr_34px] max-md:gap-2 max-md:grid-cols-[80px_167px_30px] md:max-lg:grid-cols-[96px_528px_34px]">
      <span className="block text-muted-foreground text-xs font-semibold leading-[1.25rem]">
        {d.text}
      </span>
      <span className="h-2 block rounded-[999px] overflow-hidden bg-surface-3">
        <span className={cn("h-full block rounded-[999px]", styles.className)} style={d.style} />
      </span>
      <span className={cn("block [font-family:'JetBrains_Mono',_ui-monospace,_monospace] font-bold text-right", styles.className2)}>
        {d.text2}
      </span>
    </div>
  );
}
