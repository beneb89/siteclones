import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  id: string;
  ariacurrent?: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("box-content list-item py-1.5 [list-style-type:none] list-outside", styles.className)} id={d.id}>
      <a className={cn("box-content inline font-semibold cursor-pointer", styles.className2)} data-component="link" aria-current={d.ariacurrent} href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
