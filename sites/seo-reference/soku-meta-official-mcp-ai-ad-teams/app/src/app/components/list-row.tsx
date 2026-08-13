import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item text-muted-foreground", styles.className)}>
      <strong className="inline text-foreground font-semibold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
