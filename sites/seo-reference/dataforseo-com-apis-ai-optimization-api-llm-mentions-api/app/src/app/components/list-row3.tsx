import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline-block text-background text-sm font-medium leading-[1.375rem] cursor-pointer hover:text-clr-43 hover:[text-decoration-color:var(--clr-43)]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
