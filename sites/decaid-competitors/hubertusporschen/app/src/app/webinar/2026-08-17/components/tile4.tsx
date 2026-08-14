import type { Tile4Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type Tile4Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <div className="flex items-baseline gap-3 2xl:hidden">
      <span className={cn("block [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.75rem] italic leading-7 2xl:hidden", styles.className)}>
        {d.text}
      </span>
      {" "}
      <span className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-3.5 tracking-[1.4px] uppercase 2xl:hidden">
        {d.text2}
        <br className="inline 2xl:hidden" />
        {d.text3}
      </span>
      {" "}
    </div>
  );
}
