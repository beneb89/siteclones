import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className="list-item leading-4">
      <a className={cn("min-h-5.5 inline-block relative py-0.5 text-muted text-sm leading-5 cursor-pointer after:content-[''] after:block after:absolute after:-bottom-px after:left-0 after:w-0 after:h-px after:bg-color-009 hover:text-color-001", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
