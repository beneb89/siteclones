import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className="list-item min-w-0">
      <a className={cn("block text-muted text-sm [font-weight:520] leading-[1.1875rem] cursor-pointer", styles.className)} href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
