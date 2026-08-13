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
      <a className="inline cursor-pointer" data-component="link" href={d.href}>
        <div className={cn("inline-block relative py-2 rounded-sm leading-5 tracking-[-0.2px] text-center", styles.className)} data-component="button" type="button">
          {d.label}
        </div>
      </a>
    </li>
  );
}
