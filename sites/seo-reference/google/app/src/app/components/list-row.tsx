import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item leading-4">
      <a className={cn("flex mr-2 py-1 pr-2 pl-6 rounded-tr-xl rounded-br-xl [word-break:break-word] cursor-pointer hover:bg-surface-2 focus:bg-surface-2", styles.className)} data-component="link" href={d.href}>
        <span className="block overflow-x-clip">
          {d.label}
        </span>
      </a>
    </li>
  );
}
