import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline-block text-background text-sm font-medium leading-[1.375rem] cursor-pointer focus:text-clr-61 focus:outline-clr-61 focus:[text-decoration-color:var(--clr-61)]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
