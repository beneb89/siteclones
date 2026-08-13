import type { Tile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile3Data = {
  text: string;
  description: string;
  href: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <div className={cn("w-[406.7px] block float-left max-md:w-[21.5625rem] md:max-lg:w-88.5 2xl:w-[413.3px]", styles.className)}>
      <blockquote className="border-l-[5px] border-solid border-l-foreground block mb-[1.6rem] pl-4 before:content-['“'] before:hidden before:absolute before:text-foreground before:text-base before:leading-[1.625rem]">
        <div className="block mb-[0.8rem] [font-family:'Graphik_Medium',_sans-serif] leading-[1.3125rem] max-lg:text-sm max-lg:leading-[1.125rem]">
          {d.text}
        </div>
        {" "}
        <p className="block max-w-80 mb-[1.6rem] max-md:max-w-none">
          {d.description}
          <a className="border-b-2 border-solid border-b-color-006 inline cursor-pointer hover:border-clr-6 focus:border-clr-6 focus:[outline-style:dotted] focus:outline-1" data-component="link" href={d.href}>
            Keep reading
          </a>
        </p>
        {" "}
      </blockquote>
      {" "}
    </div>
  );
}
