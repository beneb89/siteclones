import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("flex relative items-start", styles.className)}>
      <span className="flex relative top-[0.3125rem] -bottom-[0.3125rem] pr-[0.3125rem]">
        {" "}
        <i className="w-[17.5px] block text-primary [font-family:'Font_Awesome_5_Free'] text-sm font-black leading-3.5 max-md:w-[0.9375rem] max-md:text-xs max-md:leading-3 before:content-[''] before:text-primary before:text-sm before:font-black before:leading-3.5 max-md:before:text-xs max-md:before:leading-3" aria-hidden="true" />
        {" "}
      </span>
      {" "}
      <span className="block pl-[0.3125rem] self-center text-muted text-[0.9375rem] leading-[1.4375rem] max-md:text-sm max-md:leading-5">
        {d.text}
      </span>
      {" "}
    </li>
  );
}
