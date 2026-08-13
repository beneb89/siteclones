import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  id: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item", styles.className)} id={d.id}>
      <a className="block py-3 text-color-007 text-[0.9375rem] font-semibold leading-6 cursor-pointer" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
