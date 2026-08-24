import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("flex relative items-center", styles.className)}>
      <span className="flex relative mt-2.5 pr-5 text-left">
        {" "}
        <i className="w-[11.3px] block [font-family:'Font_Awesome_5_Free'] text-[0.5625rem] font-black leading-[0.5625rem] max-md:w-[12.5px] max-md:text-[0.625rem] max-md:leading-2.5 before:content-[''] before:text-foreground before:text-[0.5625rem] before:font-black before:leading-[0.5625rem] before:text-left max-md:before:text-[0.625rem] max-md:before:leading-2.5" aria-hidden="true" />
        {" "}
      </span>
      {" "}
      <span className="block pl-[0.3125rem] self-center">
        <b className="inline font-bold">
          Even if...
        </b>
        {d.text}
      </span>
      {" "}
    </li>
  );
}
