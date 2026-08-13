import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item pointer-events-none">
      <a className="h-10 flex py-2 px-3 rounded-sm justify-between items-center font-medium cursor-pointer pointer-events-none" data-component="link" aria-expanded="false" href={d.href}>
        <span className={cn("block pointer-events-none", styles.className)}>
          {d.label}
        </span>
      </a>
    </li>
  );
}
