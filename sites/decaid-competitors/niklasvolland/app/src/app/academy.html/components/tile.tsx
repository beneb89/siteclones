import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  kind?: string;
  alt: string;
  imgSrc: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <img className={cn("w-auto block opacity-70 max-w-42.5 shrink-0 overflow-clip object-contain [filter:brightness(0)_invert(1)] max-lg:max-w-32.5", styles.className)} data-component={d.kind} alt={d.alt} src={d.imgSrc} />
  );
}
