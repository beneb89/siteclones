import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className="list-item pointer-events-none">
      <a className={cn("h-[46.5px] flex py-3 px-4.5 items-center text-lg leading-[1.4375rem] whitespace-nowrap text-nowrap cursor-pointer pointer-events-none hover:bg-clr-26 focus:bg-clr-33", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
