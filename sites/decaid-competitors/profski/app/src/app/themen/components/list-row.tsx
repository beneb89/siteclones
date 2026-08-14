import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative -mb-1.5 pl-7 [list-style-type:none] max-md:-mb-[0.3375rem] max-md:pl-[1.575rem] before:content-[''] before:block before:absolute before:top-1.5 before:right-[33.025rem] before:left-0 before:w-5 before:h-5 before:bg-border max-md:before:top-[0.3375rem] max-md:before:right-[17.3125rem] max-md:before:w-4.5 max-md:before:h-4.5 md:max-lg:before:right-167 2xl:before:right-[52.45rem]", styles.className)}>
      {d.text}
    </li>
  );
}
