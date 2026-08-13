import type { ListRow6Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow6Data = {
  href: string;
  label: string;
  rel?: string;
  target?: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="inline font-medium cursor-pointer" data-component="link" href={d.href} rel={d.rel} target={d.target}>
        {d.label}
      </a>
    </li>
  );
}
