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
      <a className="block text-muted-foreground text-[0.8125rem] font-light leading-[1.25rem] cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
