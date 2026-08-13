import type { Tile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile4Data = {
  id: string;
  text: string;
  text2: string;
  description: string;
};
/** A content tile. */
export default function Tile4({ d, styles }: { d: Tile4Data; styles: Tile4Styles }) {
  return (
    <tr className="table-row relative align-middle [border-collapse:collapse] [border-spacing:2px]" id={d.id}>
      <td className="border-r border-solid border-r-border table-cell relative py-2 pr-[0.6rem] pl-15 leading-[1.3125rem] whitespace-nowrap text-nowrap [border-collapse:collapse] [border-spacing:2px] max-lg:py-2.5 max-lg:pr-3 md:max-lg:leading-[1.375rem] before:content-[''] before:block before:absolute before:inset-y-0 before:right-[7.6rem] before:left-12 before:w-px before:h-[2.3125rem] before:bg-border max-md:before:right-31 max-md:before:h-[2.5625rem] md:max-lg:before:right-32.5 md:max-lg:before:h-[2.6125rem] after:content-[''] after:block after:absolute after:inset-y-4.5 after:right-[7.1625rem] after:left-12 after:w-2 after:h-px after:bg-border max-md:after:right-[7.3125rem] max-md:after:bottom-5.5 md:max-lg:after:right-[7.6875rem] md:max-lg:after:bottom-[1.425rem]">
        <code className={cn("inline py-0.5 px-1 rounded-[3px] bg-border cursor-pointer [border-collapse:collapse] [border-spacing:2px]", styles.className)}>
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
