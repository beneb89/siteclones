import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative mb-4 pl-8.5 text-lg leading-[1.6875rem]", styles.className)}>
      {d.text}
    </li>
  );
}
