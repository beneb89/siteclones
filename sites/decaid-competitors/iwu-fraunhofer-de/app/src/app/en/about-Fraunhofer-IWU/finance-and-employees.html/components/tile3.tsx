import type { Tile3Styles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <tr className="hidden max-md:h-8 max-md:table-row max-md:align-middle max-md:bg-surface max-md:[border-spacing:0px_1px]">
      <td className={cn("hidden max-md:table-cell max-md:relative max-md:py-[0.4375rem] max-md:px-[0.9375rem] max-md:overflow-hidden max-md:align-middle max-md:whitespace-nowrap max-md:text-nowrap max-md:[border-spacing:0px_1px]", styles.className)}>
        {d.text}
      </td>
      <td className="hidden">
        {d.text2}
      </td>
      <td className="hidden">
        {d.text3}
      </td>
      <td className="hidden">
        {d.text4}
      </td>
      <td className="hidden">
        {d.text5}
      </td>
      <td className="hidden">
        {d.text6}
      </td>
    </tr>
  );
}
