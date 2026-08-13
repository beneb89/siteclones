import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item">
      <a className={cn("inline text-primary cursor-pointer", styles.className)} data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
