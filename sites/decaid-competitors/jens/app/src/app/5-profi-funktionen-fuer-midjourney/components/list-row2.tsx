import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="inline-flex items-center gap-1.5 text-sm font-medium leading-[1.3125rem] cursor-pointer" data-component="link" href={d.href}>
        <span className="block text-accent" aria-hidden="true">
          →
        </span>
        {d.label}
      </a>
    </li>
  );
}
