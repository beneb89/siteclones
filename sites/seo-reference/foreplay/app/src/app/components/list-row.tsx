import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  ariaLabel: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item">
      <a className={cn("border-l border-solid inline-block max-w-full p-3 justify-center items-center cursor-pointer", styles.className)} data-component="link" aria-label={d.ariaLabel} href={d.href}>
        <div className="block text-sm leading-5 tracking-[-0.09px]">
          {d.label}
        </div>
      </a>
    </li>
  );
}
