import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative py-[14.9px] pl-10 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] leading-[1.5rem] max-md:py-3.5 max-md:text-[1.0625rem] 2xl:hidden", styles.className)}>
      {d.text}
    </li>
  );
}
