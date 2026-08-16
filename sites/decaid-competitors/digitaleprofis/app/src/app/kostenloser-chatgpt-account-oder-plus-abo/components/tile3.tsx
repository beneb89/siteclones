import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <tr className="table-row align-middle">
      <td className={cn("table-cell py-4 px-[1.05rem] align-top text-muted max-md:sticky max-md:left-0 max-md:z-1 max-md:py-[13.1px] max-md:px-[0.9rem] max-md:font-semibold max-md:bg-background max-md:shadow-[var(--border)_1px_0px_0px_0px] max-md:text-[color:inherit]", styles.className)}>
        {d.text}
      </td>
      <td className={cn("border-solid border-l border-l-border table-cell py-4 px-[1.05rem] align-top text-muted max-md:py-[13.1px] max-md:px-[0.9rem]", styles.className2)}>
        {d.text2}
      </td>
      <td className={cn("border-solid border-l border-l-border table-cell py-4 px-[1.05rem] align-top text-muted max-md:py-[13.1px] max-md:px-[0.9rem]", styles.className3)}>
        {d.text3}
      </td>
      <td className={cn("border-solid border-l border-l-border table-cell py-4 px-[1.05rem] align-top text-muted max-md:py-[13.1px] max-md:px-[0.9rem]", styles.className4)}>
        {d.text4}
      </td>
    </tr>
  );
}
