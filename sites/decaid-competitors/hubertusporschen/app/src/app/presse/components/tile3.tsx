import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("block py-6 px-[1.8625rem] bg-background max-md:px-7 2xl:hidden", styles.className)}>
      <div className="block mb-[0.4rem] text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.6px] uppercase max-md:mb-1.5 max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      <div className={cn("block 2xl:hidden", styles.className2)}>
        {d.text2}
      </div>
    </div>
  );
}
