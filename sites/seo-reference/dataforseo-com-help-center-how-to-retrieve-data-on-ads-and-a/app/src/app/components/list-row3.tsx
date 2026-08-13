import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  id: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className="box-content list-item py-2.5" id={d.id}>
      <a className={cn("box-content inline text-color-002 font-bold", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
