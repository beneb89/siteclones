import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="inline-flex items-center gap-1.5 text-sm font-medium leading-[1.3125rem] cursor-pointer" data-component="link" href={d.href}>
        <span className="block text-accent" aria-hidden="true">
          →
        </span>
        {d.label}
      </a>
    </li>
  );
}
