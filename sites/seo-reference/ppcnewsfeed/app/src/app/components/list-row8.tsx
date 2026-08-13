import type { ListRow8Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow8Data = {
  href: string;
  label: string;
  rel?: string;
};
/** A list row. */
export default function ListRow8({ d, styles }: { d: ListRow8Data; styles: ListRow8Styles }) {
  return (
    <li className={cn("list-item py-2", styles.className)}>
      <a className="flex text-sm font-semibold leading-3.5 cursor-pointer whitespace-nowrap hover:border-clr-27 hover:text-clr-27 hover:outline-clr-27 hover:[text-decoration-color:var(--clr-27)] focus:border-clr-42 focus:text-clr-42 focus:outline-clr-42 focus:[text-decoration-color:var(--clr-42)]" data-component="link" href={d.href} rel={d.rel}>
        {d.label}
      </a>
    </li>
  );
}
