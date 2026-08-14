import type { ListRow7Styles } from "../_styles";
import { cn } from "../../../../../../../lib/utils";
export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d, styles }: { d: ListRow7Data; styles: ListRow7Styles }) {
  return (
    <li className={cn("flex py-1 text-sm font-medium leading-3.5 max-lg:[font-size:inherit]", styles.className)}>
      <a className="block cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
