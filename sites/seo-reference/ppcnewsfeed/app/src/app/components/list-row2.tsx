import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <a className={cn("h-7.5 flex py-2 px-4 rounded-md justify-center items-center leading-3.5 bg-border shadow-[var(--clr-1)_0px_1px_3px_0px] cursor-pointer", styles.className2)} data-component="button" href={d.href} rel="tag">
        {d.label}
      </a>
    </li>
  );
}
