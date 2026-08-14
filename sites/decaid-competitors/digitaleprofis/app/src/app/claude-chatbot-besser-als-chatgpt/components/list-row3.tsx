import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className="list-item min-w-0">
      <a className={cn("block [font-weight:520] cursor-pointer", styles.className)} href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
