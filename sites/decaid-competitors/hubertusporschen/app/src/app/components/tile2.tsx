import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("block py-[14.9px] px-3 text-center bg-background 2xl:hidden", styles.className)}>
      <div className="block mb-1 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-2xl leading-6 tracking-[-0.48px] 2xl:hidden">
        {d.text}
      </div>
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[0.75rem] tracking-[1.33px] uppercase 2xl:hidden">
        {d.text2}
      </div>
    </div>
  );
}
