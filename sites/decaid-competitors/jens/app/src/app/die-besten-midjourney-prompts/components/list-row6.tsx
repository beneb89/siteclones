import type { ListRow6Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow6Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className="block text-muted-foreground text-[0.8125rem] font-light leading-[1.25rem] cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
