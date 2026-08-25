import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item min-w-0", styles.className)}>
      <a className={cn("text-sm font-semibold cursor-pointer", styles.className2)} href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
