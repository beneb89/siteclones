import type { Tile4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile4Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className={cn("table-cell py-3 px-4 align-top leading-[1.4375rem] [border-collapse:collapse] [border-spacing:2px]", styles.className)}>
        <strong className="inline font-medium [border-collapse:collapse] [border-spacing:2px]">
          {d.text}
        </strong>
      </td>
      <td className={cn("table-cell py-3 px-4 align-top leading-[1.4375rem] [border-collapse:collapse] [border-spacing:2px]", styles.className2)}>
        {d.text2}
      </td>
      <td className={cn("table-cell py-3 px-4 align-top leading-[1.4375rem] [border-collapse:collapse] [border-spacing:2px]", styles.className3)}>
        {d.text3}
      </td>
      <td className={cn("table-cell py-3 px-4 align-top leading-[1.4375rem] [border-collapse:collapse] [border-spacing:2px]", styles.className4)}>
        {d.text4}
      </td>
    </tr>
  );
}
