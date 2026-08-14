import type { Tile2Styles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type Tile2Data = {
  href: string;
  label: string;
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <tr className={cn("box-content table-row align-middle [border-collapse:collapse] [border-spacing:2px]", styles.className)}>
      <td className="box-content border border-solid border-clr-22 table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        <a className="box-content inline text-primary underline cursor-pointer [border-collapse:collapse] [border-spacing:2px]" data-component="link" href={d.href}>
          {d.label}
        </a>
      </td>
      <td className="box-content border border-solid border-clr-22 table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text}
      </td>
      <td className="box-content border border-solid border-clr-22 table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text2}
      </td>
      <td className="box-content border border-solid border-clr-22 table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text3}
      </td>
      <td className="box-content border border-solid border-clr-22 table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text4}
      </td>
    </tr>
  );
}
