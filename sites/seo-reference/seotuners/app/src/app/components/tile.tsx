import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <tr className="table-row align-middle [border-collapse:collapse]">
      <td className={cn("border border-solid border-border table-cell p-[0.9375rem] align-top leading-[1.5rem] [border-collapse:collapse]", styles.className)}>
        <p className="block [border-collapse:collapse]">
          {d.description}
        </p>
      </td>
      <td className={cn("border border-solid border-border table-cell p-[0.9375rem] align-top leading-[1.5rem] [border-collapse:collapse]", styles.className2)}>
        <p className="block [border-collapse:collapse]">
          {d.description2}
        </p>
      </td>
    </tr>
  );
}
