import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  id: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item relative max-h-[1e+06px]" id={d.id}>
      <a className={cn("block relative max-h-[1e+06px] py-[0.1875rem] px-[0.9375rem] text-color-022 cursor-pointer 2xl:text-[color:inherit]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
