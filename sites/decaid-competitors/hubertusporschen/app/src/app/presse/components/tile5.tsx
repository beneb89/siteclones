import type { Tile5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile5Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile5({ d, styles }: { d: Tile5Data; styles: Tile5Styles }) {
  return (
    <div className="block 2xl:hidden">
      <div className="block mb-1 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.6px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      <div className={cn("block 2xl:hidden", styles.className)}>
        {d.text2}
      </div>
    </div>
  );
}
