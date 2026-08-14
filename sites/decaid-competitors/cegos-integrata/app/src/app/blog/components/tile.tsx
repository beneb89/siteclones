import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  disabled?: boolean;
  label: string;
  ariacurrent?: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <button className={cn("flex rounded-full justify-center items-center [font-family:Raleway,_sans-serif] text-xs leading-3 text-center h-10 w-10 max-md:text-[0.6875rem] max-md:leading-[0.6875rem] md:max-lg:leading-[0.75rem]", styles.className)} data-component="button" disabled={d.disabled} type="button" aria-current={d.ariacurrent}>
      {d.label}
    </button>
  );
}
