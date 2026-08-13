import type { ListRow11Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow11Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow11({ d, styles }: { d: ListRow11Data; styles: ListRow11Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline cursor-pointer focus:text-muted-foreground focus:outline-muted-foreground focus:[text-decoration-color:var(--muted-foreground)]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
