import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  imgSrc: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <img className={cn("block opacity-70 max-w-42.5 shrink-0 overflow-clip object-contain [filter:brightness(0)_invert(1)] max-lg:max-w-32.5", styles.className)} alt="" src={d.imgSrc} />
  );
}
