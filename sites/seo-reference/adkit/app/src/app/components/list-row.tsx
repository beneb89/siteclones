import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item min-w-0 py-2", styles.className)}>
      <a className={cn("h-8 flex relative py-1.5 px-2.5 items-center gap-1.5 text-muted text-sm font-medium leading-5 cursor-pointer w-full before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-px before:-z-1 before:h-8 before:rounded-tl-md max-lg:before:w-auto max-lg:before:h-auto hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)]", styles.className2)} data-component="link" href={d.href}>
        <span className="block overflow-hidden whitespace-nowrap text-nowrap">
          {d.label}
        </span>
      </a>
    </li>
  );
}
