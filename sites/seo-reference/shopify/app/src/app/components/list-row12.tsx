import type { ListRow12Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow12Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow12({ d, styles }: { d: ListRow12Data; styles: ListRow12Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline cursor-pointer", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
