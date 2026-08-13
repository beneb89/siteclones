import type { ListRow8Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow8Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow8({ d, styles }: { d: ListRow8Data; styles: ListRow8Styles }) {
  return (
    <li className="list-item">
      <a className={cn("block py-[0.3125rem] px-6 text-color-001 [font-family:Poppins,_sans-serif] font-medium cursor-pointer", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
