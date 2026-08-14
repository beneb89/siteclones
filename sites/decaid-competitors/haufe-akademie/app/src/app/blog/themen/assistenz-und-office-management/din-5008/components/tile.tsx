import type { TileStyles } from "../_styles";
import { cn } from "../../../../../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <tr className="box-content table-row [border-collapse:collapse]">
      <td className={cn("box-content border border-solid border-color-005 table-cell p-2.5 [border-collapse:collapse]", styles.className)}>
        {d.text}
      </td>
      <td className={cn("box-content border border-solid border-color-005 table-cell p-2.5 [border-collapse:collapse]", styles.className2)}>
        {d.text2}
      </td>
    </tr>
  );
}
