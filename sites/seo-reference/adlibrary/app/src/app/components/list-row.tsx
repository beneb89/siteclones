import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item pl-1 text-muted leading-7", styles.className)}>
      <strong className="inline font-normal">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
