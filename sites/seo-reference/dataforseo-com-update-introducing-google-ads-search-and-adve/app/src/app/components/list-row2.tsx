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
    <li className={cn("box-content list-item max-lg:h-[2.9375rem]", styles.className)} id={d.id}>
      <a className="box-content block py-3 text-clr-1 text-[0.9375rem] cursor-pointer" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
