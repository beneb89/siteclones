import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="inline cursor-pointer hover:underline" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
