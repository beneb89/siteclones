import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  title: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <h4 className={cn("table relative rounded-tl-[10px] rounded-tr-[10px] text-clr-17 text-lg font-bold leading-[1.6875rem] bg-clr-28 cursor-pointer [table-layout:fixed] before:content-['_'] before:table before:text-clr-17 before:text-lg before:font-bold before:leading-[1.6875rem] before:text-left max-lg:before:w-0 max-lg:before:h-0 after:content-['_'] after:table after:text-clr-17 after:text-lg after:font-bold after:leading-[1.6875rem] after:text-left max-lg:after:w-0 max-lg:after:h-0", styles.className)}>
      <span className="w-12 block relative rounded-tl-[10px] align-middle text-background leading-12 text-center max-lg:h-12">
        {" "}
        <span className="box-content h-full block relative text-[1.5rem]">
          {" "}
          <span className="box-content w-full h-full block absolute [font-family:ElegantIcons] font-normal max-lg:w-12 max-lg:top-0 before:content-[''] before:text-background before:text-2xl before:leading-12 before:text-center" />
          {"  "}
        </span>
        {" "}
      </span>
      {" "}
      <span className="box-content w-full table-cell relative pr-2.5 pl-17 align-middle text-background text-center max-md:pl-[2.8125rem] max-md:text-base max-md:leading-5.5">
        {" "}
        <span className="box-content inline">
          {d.title}
        </span>
        {" "}
      </span>
      {" "}
    </h4>
  );
}
