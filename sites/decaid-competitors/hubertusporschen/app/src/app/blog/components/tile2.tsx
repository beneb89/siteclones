import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  label: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <button className={cn("border border-solid block py-2 px-4 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.6px] text-center uppercase cursor-pointer max-md:leading-4 2xl:hidden", styles.className)} data-component="button">
      {d.label}
    </button>
  );
}
