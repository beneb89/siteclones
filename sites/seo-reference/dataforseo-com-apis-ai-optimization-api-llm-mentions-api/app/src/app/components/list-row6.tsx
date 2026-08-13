import type { ListRow6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow6Data = {
  href: string;
  label: string;
  target?: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline-block text-background text-sm font-medium leading-[1.375rem] cursor-pointer focus:text-clr-61 focus:outline-clr-61 focus:[text-decoration-color:var(--clr-61)]", styles.className)} data-component="link" href={d.href} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
