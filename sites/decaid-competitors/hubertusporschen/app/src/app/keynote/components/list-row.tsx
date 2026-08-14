import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item">
      <a className={cn("border-b border-solid inline pb-1 cursor-pointer", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
