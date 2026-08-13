import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  imgSrc: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <img className={cn("w-42 block max-w-42 overflow-clip align-middle", styles.className)} alt="" src={d.imgSrc} />
  );
}
