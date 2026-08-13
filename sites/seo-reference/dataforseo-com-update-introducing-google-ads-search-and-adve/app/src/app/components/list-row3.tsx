import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("box-content list-item", styles.className)}>
      <a className={cn("box-content block py-[0.5625rem] px-4 font-semibold cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
