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
      <a className="block text-muted-foreground text-[0.8125rem] font-light leading-[1.25rem] cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
