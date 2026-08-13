import type { ListRow8Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow8Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow8({ d, styles }: { d: ListRow8Data; styles: ListRow8Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline-block text-background text-sm font-medium leading-[1.375rem] cursor-pointer hover:border-color-002 hover:text-color-002 hover:outline-color-002 hover:[text-decoration-color:var(--color-002)]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
