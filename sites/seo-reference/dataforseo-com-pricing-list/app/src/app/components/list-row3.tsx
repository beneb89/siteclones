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
    <li className={cn("box-content list-item py-1.5", styles.className)} id={d.id}>
      <a className="box-content inline text-color-001 font-semibold cursor-pointer" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
