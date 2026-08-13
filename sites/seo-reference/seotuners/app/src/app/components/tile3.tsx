import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  description: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
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
      <td className={cn("border border-solid border-border table-cell p-[0.9375rem] align-top leading-[1.5rem] [border-collapse:collapse]", styles.className3)}>
        <p className="block [border-collapse:collapse]">
          {d.description3}
        </p>
      </td>
    </tr>
  );
}
