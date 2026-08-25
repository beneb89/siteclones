import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative after:content-[''] after:absolute after:-right-5 after:w-2 after:h-2 after:-mt-[0.1875rem] after:bg-color-010 after:rounded-tl-[50%] max-md:after:-right-[1.0625rem] max-md:after:w-1 max-md:after:h-1 max-md:after:-mt-0.5", styles.className)}>
      <a className="inline cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
