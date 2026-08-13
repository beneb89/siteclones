import type { ListRow7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d, styles }: { d: ListRow7Data; styles: ListRow7Styles }) {
  return (
    <li className={cn("list-item py-1", styles.className)}>
      <a className="flex text-sm font-semibold leading-3.5 cursor-pointer hover:border-clr-27 hover:text-clr-27 hover:outline-clr-27 hover:[text-decoration-color:var(--clr-27)] focus:border-clr-42 focus:text-clr-42 focus:outline-clr-42 focus:[text-decoration-color:var(--clr-42)]" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
