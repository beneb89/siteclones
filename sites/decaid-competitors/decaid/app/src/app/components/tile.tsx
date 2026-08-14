import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  kind?: string;
  imgSrc: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <img className={cn("block overflow-clip align-middle", styles.className)} data-component={d.kind} alt="" src={d.imgSrc} />
  );
}
