import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="inline text-muted text-sm leading-5 cursor-pointer hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
