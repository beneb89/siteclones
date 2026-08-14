import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative pl-4.5 text-muted-foreground text-[0.9375rem] leading-[1.375rem] max-md:text-sm max-md:leading-[1.3125rem] before:content-['·'] before:block before:absolute before:right-[290.7px] before:left-1 before:w-1 before:h-[22.3px] before:text-primary before:text-[0.9375rem] before:font-bold before:leading-[1.375rem] max-md:before:right-[15.9375rem] max-md:before:h-[1.3125rem] max-md:before:text-sm max-md:before:leading-[1.3125rem] md:max-lg:before:right-[8.5625rem]", styles.className)}>
      {d.text}
    </li>
  );
}
