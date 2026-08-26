import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className={cn("inline py-1 text-muted text-sm leading-5 cursor-pointer focus:border-muted focus:outline-muted focus:[text-decoration-color:var(--muted)]", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
