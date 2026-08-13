import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <tr className={cn("table-row align-middle", styles.className)}>
      <td className="table-cell py-4 px-5 align-top font-bold leading-[1.625rem] max-lg:py-3 max-lg:px-4 max-lg:leading-[1.375rem]">
        <strong className="inline">
          {d.text}
        </strong>
      </td>
      <td className="table-cell py-4 px-5 align-top leading-[1.625rem] max-lg:py-3 max-lg:px-4 max-lg:leading-[1.375rem]">
        {d.text2}
      </td>
      <td className="table-cell py-4 px-5 align-top leading-[1.625rem] max-lg:py-3 max-lg:px-4 max-lg:leading-[1.375rem]">
        {d.text3}
      </td>
      <td className="table-cell py-4 px-5 align-top leading-[1.625rem] max-lg:py-3 max-lg:px-4 max-lg:leading-[1.375rem]">
        {d.text4}
      </td>
    </tr>
  );
}
