import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  label: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <button className={cn("border border-solid border-border block pt-3.5 pb-2.5 px-5.5 rounded-xl text-border [font-family:'League_Spartan',_sans-serif] font-semibold tracking-[0.16px] text-center cursor-pointer", styles.className)} data-component="button" type="button">
      {d.label}
    </button>
  );
}
