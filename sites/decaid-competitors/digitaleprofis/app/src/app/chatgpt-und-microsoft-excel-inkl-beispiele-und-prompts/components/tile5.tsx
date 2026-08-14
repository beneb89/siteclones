import type { Tile5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile5Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile5({ d, styles }: { d: Tile5Data; styles: Tile5Styles }) {
  return (
    <tr className="table-row align-middle">
      <td className={cn("table-cell py-4 px-[1.05rem] align-top text-muted max-md:sticky max-md:left-0 max-md:z-1 max-md:py-[13.1px] max-md:px-[0.9rem] max-md:font-semibold max-md:bg-background max-md:shadow-[var(--border)_1px_0px_0px_0px] max-md:text-[color:inherit]", styles.className)}>
        {d.text}
      </td>
      <td className={cn("border-solid border-l border-l-border table-cell py-4 px-[1.05rem] align-top text-muted max-md:py-[13.1px] max-md:px-[0.9rem]", styles.className2)}>
        {d.text2}
      </td>
    </tr>
  );
}
