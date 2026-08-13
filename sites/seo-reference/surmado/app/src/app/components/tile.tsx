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
      <td className="table-cell py-4 px-5 align-top font-bold leading-[1.625rem] max-lg:py-3 max-lg:px-4 max-lg:leading-[1.375rem]">
        {d.text}
      </td>
      <td className="table-cell py-4 px-5 align-top leading-[1.625rem] max-lg:py-3 max-lg:px-4 max-lg:leading-[1.375rem]">
        {d.text2}
      </td>
      <td className="table-cell py-4 px-5 align-top leading-[1.625rem] max-lg:py-3 max-lg:px-4 max-lg:leading-[1.375rem]">
        {d.text3}
      </td>
    </tr>
  );
}
