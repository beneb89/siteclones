import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  id: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("block relative float-right ml-2.5 align-middle", styles.className)} id={d.id}>
      <a className={cn("block relative px-2.5 text-muted leading-10 cursor-pointer", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
