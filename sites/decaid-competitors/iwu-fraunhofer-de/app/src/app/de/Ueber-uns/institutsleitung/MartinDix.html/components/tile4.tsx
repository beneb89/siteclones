import type { Tile4Styles } from "../_styles";
import { cn } from "../../../../../../lib/utils";
export type Tile4Data = {
  text: string;
  href: string;
  label: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <tr className={cn("table-row align-middle bg-surface [border-spacing:0px_1px] max-md:hidden", styles.className)}>
      <td className="h-full table-cell py-[0.4375rem] px-[0.9375rem] align-middle [border-spacing:0px_1px] max-md:hidden 2xl:py-[0.525rem] 2xl:px-4.5">
        {d.text}
      </td>
      <td className="h-full table-cell py-[0.4375rem] px-[0.9375rem] align-middle [border-spacing:0px_1px] max-md:hidden 2xl:py-[0.525rem] 2xl:px-4.5">
        <a className="inline text-primary underline cursor-pointer [border-spacing:0px_1px] max-md:hidden after:content-[''] after:inline-block after:w-[0.8125rem] after:h-[13.3px] after:mx-[3.5px] after:text-primary after:text-[0.8125rem] after:leading-[0.8125rem] max-md:after:hidden 2xl:after:w-4 2xl:after:h-4 2xl:after:mx-1 2xl:after:text-base 2xl:after:leading-4" data-component="link" href={d.href} target="_blank">
          {d.label}
        </a>
        <br className="inline [border-spacing:0px_1px] max-md:hidden" />
        {d.text2}
      </td>
      <td className="h-full table-cell py-[0.4375rem] px-[0.9375rem] align-middle [border-spacing:0px_1px] max-md:hidden 2xl:py-[0.525rem] 2xl:px-4.5">
        {d.text3}
        <br className="inline [border-spacing:0px_1px] max-md:hidden" />
        {d.text4}
        <div className="w-4/5 block leading-5.5 [border-spacing:0px_1px] max-md:hidden 2xl:leading-[1.625rem]" />
        {" "}
      </td>
    </tr>
  );
}
