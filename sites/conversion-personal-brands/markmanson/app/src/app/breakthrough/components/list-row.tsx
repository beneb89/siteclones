import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
  target?: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item relative">
      <a className={cn("block py-2.5 px-5 uppercase cursor-pointer", styles.className)} data-component="link" href={d.href} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
