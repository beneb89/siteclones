import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative -mb-1.5 [list-style-type:none] max-md:-mb-[0.3375rem] before:content-[''] before:inline-block before:relative before:top-1.5 before:-bottom-1.5 before:inset-x-0 before:w-5 before:h-5 before:mr-2.5 before:bg-border max-md:before:top-[0.3375rem] max-md:before:-bottom-[0.3375rem] max-md:before:w-4.5 max-md:before:h-4.5 max-md:before:mr-[0.5625rem]", styles.className)}>
      {d.text}
    </li>
  );
}
