import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className="list-item pointer-events-none">
      <a className="h-10 flex py-2 px-3 rounded-sm justify-between items-center font-medium cursor-pointer pointer-events-none" data-component="link" aria-expanded="false" href={d.href} rel={d.rel} target={d.target}>
        <span className={cn("block pointer-events-none", styles.className)}>
          {d.label}
        </span>
      </a>
    </li>
  );
}
