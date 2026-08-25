import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative pl-8 text-color-031 text-[1.0625rem] leading-[1.625rem]", styles.className)}>
      {d.text}
    </li>
  );
}
