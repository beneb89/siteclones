import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="border-b-2 border-solid border-b-clr-1 inline text-sm leading-[1.375rem] cursor-pointer hover:border-clr-7 focus:border-clr-7 focus:[outline-style:dotted] focus:outline-1" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
