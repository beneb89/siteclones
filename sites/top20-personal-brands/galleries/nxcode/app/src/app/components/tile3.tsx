import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <tr className={cn("table-row align-middle [border-collapse:collapse] [border-spacing:2px]", styles.className)}>
      <td className="border border-solid border-border table-cell py-2 px-4 text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </td>
      <td className="border border-solid border-border table-cell py-2 px-4 text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
    </tr>
  );
}
