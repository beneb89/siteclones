import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <th className="border-b border-solid border-b-surface-4 table-cell py-4.5 px-6 align-middle text-[0.9375rem] font-semibold leading-[1.4375rem] text-left [border-collapse:collapse] [border-spacing:2px]">
        <span className={cn("border-b border-dotted border-b-color-030 inline relative cursor-help [border-collapse:collapse] [border-spacing:2px] before:content-[''] before:block before:absolute before:-top-4 before:bottom-6.5 before:left-5.5 before:z-10 before:w-3 before:h-3 before:opacity-0 max-lg:before:bottom-[calc(100%_+_4px)] max-lg:before:top-auto max-lg:before:right-auto max-lg:before:w-auto max-lg:before:h-auto after:block after:absolute after:bottom-8 after:left-0 after:z-10 after:w-62.5 after:py-[0.6875rem] after:px-[0.8125rem] after:text-background after:text-[0.8125rem] after:leading-[1.1875rem] after:text-left after:bg-border after:shadow-[var(--clr-46)_0px_10px_28px_-8px] after:opacity-0 after:transform-[matrix(1,0,0,1,0,4)] after:rounded-tl-lg max-lg:after:bottom-[calc(100%_+_10px)] max-lg:after:top-auto max-lg:after:right-auto max-lg:after:h-auto max-lg:after:transform-[none] max-lg:after:origin-[initial]", styles.className)}>
          {d.text}
        </span>
      </th>
      <td className="border-b border-solid border-b-surface-4 table-cell py-4.5 px-6 align-middle text-[0.9375rem] leading-[1.4375rem] text-center [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="border-b border-solid border-b-surface-4 table-cell py-4.5 px-6 align-middle text-[0.9375rem] leading-[1.4375rem] text-center [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
      <td className="border-b border-solid border-b-surface-4 table-cell py-4.5 px-6 align-middle text-[0.9375rem] font-semibold leading-[1.4375rem] text-center bg-color-038 [border-collapse:collapse] [border-spacing:2px]">
        {d.text4}
      </td>
      <td className="border-b border-solid border-b-surface-4 table-cell py-4.5 px-6 align-middle text-[0.9375rem] leading-[1.4375rem] text-center [border-collapse:collapse] [border-spacing:2px]">
        {d.text5}
      </td>
    </tr>
  );
}
