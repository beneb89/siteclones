import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item">
      <a className={cn("block py-2 px-3 rounded-lg text-sm font-medium leading-3.5 cursor-pointer md:max-lg:[font-size:inherit]", styles.className)} data-component="link" href="/1685">
        {d.label}
      </a>
      {" "}
    </li>
  );
}
