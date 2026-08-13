import type { Tile5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile5Data = {
  id: string;
  text: string;
  text2: string;
  description: string;
};
/** A content tile. */
export default function Tile5({ d, styles }: { d: Tile5Data; styles: Tile5Styles }) {
  return (
    <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id={d.id}>
      <td className={cn("border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-15 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:right-[7.6rem] before:left-12 before:w-px before:bg-border max-md:before:right-31 md:max-lg:before:right-32.5 after:content-[''] after:block after:absolute after:inset-y-4.5 after:right-[7.1625rem] after:left-12 after:w-2 after:h-px after:bg-border max-md:after:right-[7.3125rem] max-md:after:bottom-5.5 md:max-lg:after:right-[7.6875rem] md:max-lg:after:bottom-[1.425rem]", styles.className)}>
        <code className="inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px] hover:bg-clr-26 focus:bg-clr-46">
          {d.text}
        </code>
      </td>
      <td className="border-r border-solid border-r-border table-cell py-2 px-[0.6rem] leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:px-3 md:max-lg:leading-[1.375rem]">
        {d.text2}
      </td>
      <td className="table-cell relative py-2 pr-[0.6rem] pl-5 leading-[1.3125rem] [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem]">
        <p className="block max-w-[90%] leading-[1.0625rem] [border-collapse:collapse] [border-spacing:2px] md:max-lg:leading-[1.125rem]">
          <em className="inline italic [border-collapse:collapse] [border-spacing:2px]">
            {d.description}
          </em>
        </p>
      </td>
    </tr>
  );
}
