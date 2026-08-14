import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("flex py-1 text-sm font-medium leading-3.5 max-lg:[font-size:inherit]", styles.className)}>
      <a className="block cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
