import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  label: string;
  kind?: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={styles.className}>
      <button className={cn("before:content-[''] before:block before:absolute before:inset-0 before:z-0 before:bg-clr-5 after:content-[''] after:block after:absolute after:inset-0 after:opacity-0", styles.className2)} data-component={d.kind}>
        <span className={styles.className3}>
          {d.label}
        </span>
      </button>
    </li>
  );
}
