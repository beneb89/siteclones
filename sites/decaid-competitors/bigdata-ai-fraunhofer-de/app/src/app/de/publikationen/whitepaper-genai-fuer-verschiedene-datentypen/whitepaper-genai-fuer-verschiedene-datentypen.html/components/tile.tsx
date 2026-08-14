import type { TileStyles } from "../_styles";
import { cn } from "../../../../../../lib/utils";
export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <p className={cn("block", styles.className)}>
      <b className="inline font-normal">
        {d.description}
      </b>
      <br className="inline" />
      {d.description2}
    </p>
  );
}
