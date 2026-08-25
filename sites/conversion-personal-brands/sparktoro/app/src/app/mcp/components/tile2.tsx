import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <span className={cn("border border-solid border-surface flex py-1.5 px-3.5 rounded-[999px] items-center gap-2 text-[0.8125rem] font-medium leading-[1.25rem] bg-background", styles.className)}>
      {d.text}
      <span className="block text-color-001 [font-family:SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace] text-[0.6875rem] leading-[1.0625rem]">
        {d.text2}
      </span>
    </span>
  );
}
