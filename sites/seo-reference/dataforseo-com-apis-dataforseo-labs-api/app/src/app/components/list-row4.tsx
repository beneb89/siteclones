import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  ariacontrols: string;
  ariaexpanded: string;
  arialabelledby: string;
  ariaselected: string;
  href: string;
  id: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className="box-content block mb-2.5" aria-controls={d.ariacontrols} aria-expanded={d.ariaexpanded} aria-labelledby={d.arialabelledby} aria-selected={d.ariaselected} role="tab">
      <a className={cn("border-2 border-solid block py-3 px-7 rounded-[3px] font-semibold leading-4 text-center cursor-pointer max-lg:text-[0.75rem]", styles.className)} href={d.href} id={d.id}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
