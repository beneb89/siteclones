import type { ListRowStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRowData = {
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <button className="flex py-1.5 pl-4 items-center gap-1.5 text-muted text-sm font-semibold leading-[1.1875rem] text-left cursor-default w-full" data-component="button" type="button">
        <span className="block">
          {d.label}
        </span>
      </button>
    </li>
  );
}
