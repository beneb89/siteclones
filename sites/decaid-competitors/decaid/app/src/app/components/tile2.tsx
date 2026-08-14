import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  imgSrc: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <img className={cn("block overflow-clip align-middle", styles.className)} alt="" src={d.imgSrc} />
  );
}
