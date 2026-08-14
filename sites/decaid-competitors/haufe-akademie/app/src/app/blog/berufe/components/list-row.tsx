import type { ListRowStyles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRowData = {
  id: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("box-content border-solid border-b border-b-border list-item py-[0.4375rem]", styles.className)} id={d.id}>
      <a className="box-content inline text-color-001 cursor-pointer" data-component="link" href="/blog/berufe/verwaltungsassistenz">
        {d.label}
      </a>
    </li>
  );
}
