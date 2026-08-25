import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item min-w-0", styles.className)}>
      <a className={cn("text-sm font-semibold cursor-pointer", styles.className2)} href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
