import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("box-content list-item", styles.className)}>
      <a className={cn("box-content block cursor-pointer", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
