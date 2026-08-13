import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  id: string;
  href: string;
  label: string;
  ariacurrent?: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("box-content list-item py-1.5 [list-style-type:none] list-outside", styles.className)} id={d.id}>
      <a className={cn("box-content inline font-semibold cursor-pointer", styles.className2)} data-component="link" href={d.href} aria-current={d.ariacurrent}>
        {d.label}
      </a>
    </li>
  );
}
