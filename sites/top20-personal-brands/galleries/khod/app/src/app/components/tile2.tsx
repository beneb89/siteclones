import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  kind?: string;
  imgSrc: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <img className={cn("w-42 block max-w-42 overflow-clip align-middle", styles.className)} data-component={d.kind} alt="" src={d.imgSrc} />
  );
}
