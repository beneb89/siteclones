import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="box-content h-10 block float-left text-xs leading-[1.1875rem] [list-style-type:none]">
      <a className={cn("box-content inline mr-[0.3125rem] py-2.5 cursor-pointer", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
