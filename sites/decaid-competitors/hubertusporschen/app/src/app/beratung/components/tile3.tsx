import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  label: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <button className={cn("border border-solid block py-[0.6625rem] px-4 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.54px] text-center uppercase cursor-pointer max-md:py-2.5 max-md:leading-[1.125rem]", styles.className)} data-component="button" type="button">
      {d.label}
    </button>
  );
}
