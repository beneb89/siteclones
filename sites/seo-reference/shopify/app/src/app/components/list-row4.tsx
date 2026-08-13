import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("flex relative flex-col items-center h-full max-lg:hidden", styles.className)}>
      <a className={cn("flex items-center cursor-pointer h-full max-lg:hidden", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
