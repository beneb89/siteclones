import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  id?: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item py-1", styles.className)} id={d.id}>
      <a className={cn("flex text-sm font-semibold leading-3.5 cursor-pointer focus:border-clr-42 focus:text-clr-42 focus:outline-clr-42 focus:[text-decoration-color:var(--clr-42)]", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
