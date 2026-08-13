import type { ListRow9Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow9Data = {
  ariaLabel: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow9({ d, styles }: { d: ListRow9Data; styles: ListRow9Styles }) {
  return (
    <li className="list-item">
      <a className={cn("h-11 min-h-11 border border-solid border-surface inline-flex py-1 px-3 rounded-md items-center text-color-003 cursor-pointer hover:border-clr-9 hover:text-clr-17 hover:outline-clr-17 hover:[text-decoration-color:var(--clr-17)] focus:text-clr-30 focus:outline-clr-30 focus:[text-decoration-color:var(--clr-30)]", styles.className)} data-component="button" aria-label={d.ariaLabel} href={d.href} rel="noopener noreferrer" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
