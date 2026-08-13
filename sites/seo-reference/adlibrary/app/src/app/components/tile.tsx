import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <tr className={cn("table-row align-middle", styles.className)}>
      <td className="border-r border-solid border-r-border border-b border-b-border table-cell py-1.5 px-3 align-middle text-muted">
        {d.text}
      </td>
      <td className="border-r border-solid border-r-border border-b border-b-border table-cell py-1.5 px-3 align-middle text-muted">
        {d.text2}
      </td>
      <td className="border-b border-solid border-b-border table-cell py-1.5 px-3 align-middle text-muted">
        {d.text3}
      </td>
    </tr>
  );
}
