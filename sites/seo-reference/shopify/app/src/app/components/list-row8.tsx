import type { ListRow8Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow8Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow8({ d, styles }: { d: ListRow8Data; styles: ListRow8Styles }) {
  return (
    <li className={cn("list-item pl-1", styles.className)}>
      <a className="inline text-foreground [font-weight:550] underline cursor-pointer hover:no-underline" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
