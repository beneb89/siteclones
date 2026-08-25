import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <th className={cn("table-cell py-4.5 px-6 align-middle text-[0.9375rem] font-semibold leading-[1.4375rem] text-left [border-collapse:collapse] [border-spacing:2px]", styles.className)}>
        <span className={cn("border-b border-dotted border-b-color-030 inline relative cursor-help [border-collapse:collapse] [border-spacing:2px] before:content-[''] before:block before:absolute before:-top-4 before:bottom-6.5 before:left-5.5 before:z-10 before:w-3 before:h-3 before:opacity-0 max-lg:before:bottom-[calc(100%_+_4px)] max-lg:before:top-auto max-lg:before:right-auto max-lg:before:w-auto max-lg:before:h-auto after:block after:absolute after:bottom-8 after:left-0 after:z-10 after:w-62.5 after:py-[0.6875rem] after:px-[0.8125rem] after:text-background after:text-[0.8125rem] after:leading-[1.1875rem] after:text-left after:bg-border after:shadow-[var(--clr-46)_0px_10px_28px_-8px] after:opacity-0 after:transform-[matrix(1,0,0,1,0,4)] after:rounded-tl-lg max-lg:after:bottom-[calc(100%_+_10px)] max-lg:after:top-auto max-lg:after:right-auto max-lg:after:h-auto max-lg:after:transform-[none] max-lg:after:origin-[initial]", styles.className2)}>
          {d.text}
        </span>
      </th>
      <td className={cn("table-cell py-4.5 px-6 align-middle text-[0.9375rem] leading-[1.4375rem] text-center [border-collapse:collapse] [border-spacing:2px]", styles.className3)}>
        <span className="inline text-color-050 text-lg leading-[1.6875rem] [border-collapse:collapse] [border-spacing:2px]">
          –
        </span>
      </td>
      <td className={cn("table-cell py-4.5 px-6 align-middle text-[0.9375rem] leading-[1.4375rem] text-center [border-collapse:collapse] [border-spacing:2px]", styles.className4)}>
        <span className={cn("inline text-lg leading-[1.6875rem] [border-collapse:collapse] [border-spacing:2px]", styles.className5)}>
          {d.text2}
        </span>
      </td>
      <td className={cn("table-cell py-4.5 px-6 align-middle text-[0.9375rem] font-semibold leading-[1.4375rem] text-center bg-color-038 [border-collapse:collapse] [border-spacing:2px]", styles.className6)}>
        <span className="inline text-color-001 text-lg font-bold leading-[1.6875rem] [border-collapse:collapse] [border-spacing:2px]">
          ✓
        </span>
      </td>
      <td className={cn("table-cell py-4.5 px-6 align-middle text-[0.9375rem] leading-[1.4375rem] text-center [border-collapse:collapse] [border-spacing:2px]", styles.className7)}>
        <span className="inline text-color-001 text-lg font-bold leading-[1.6875rem] [border-collapse:collapse] [border-spacing:2px]">
          ✓
        </span>
      </td>
    </tr>
  );
}
