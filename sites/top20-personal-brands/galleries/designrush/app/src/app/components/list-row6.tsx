import type { ListRow6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow6Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline-flex cursor-pointer hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
