import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className={cn("block py-[1.8625rem] px-6 bg-background max-md:py-7", styles.className)}>
      <div className="block mb-2 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block mb-1 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[2.625rem] italic leading-10.5 tracking-[-0.84px] 2xl:hidden">
        {d.text2}
      </div>
      {" "}
      <div className="block mb-3 text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-3.5 tracking-[1.4px] uppercase 2xl:hidden">
        {d.text3}
      </div>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.3125rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
