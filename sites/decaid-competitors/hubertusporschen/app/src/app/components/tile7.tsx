import type { Tile7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile7Data = {
  label: string;
};
/** A content tile. */
export default function Tile7({ d, styles }: { d: Tile7Data; styles: Tile7Styles }) {
  return (
    <button className={cn("border border-solid block py-[0.6625rem] px-4 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.54px] text-center uppercase cursor-pointer 2xl:hidden", styles.className)} data-component="button" type="button">
      {d.label}
    </button>
  );
}
