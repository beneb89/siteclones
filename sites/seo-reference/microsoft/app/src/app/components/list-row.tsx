import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  id: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item">
      <a className={cn("h-[1.5625rem] flex cursor-pointer hover:border-clr-7 hover:text-clr-7 hover:outline-clr-7 hover:[text-decoration-color:var(--clr-7)] hover:underline focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]", styles.className)} data-component="link" href={d.href} id={d.id}>
        {d.label}
      </a>
    </li>
  );
}
