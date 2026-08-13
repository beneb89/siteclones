import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  ariacontrols: string;
  ariaexpanded: string;
  arialabelledby: string;
  ariaselected: string;
  href: string;
  id: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className="box-content w-[17.1875rem] list-item float-left" aria-controls={d.ariacontrols} aria-expanded={d.ariaexpanded} aria-labelledby={d.arialabelledby} aria-selected={d.ariaselected} role="tab">
      <a className={cn("min-h-15 border-t-2 border-solid border-t-clr-13 border-r border-r-clr-13 border-b-2 border-l-2 border-l-clr-13 block py-3 px-5 font-semibold leading-4 text-center cursor-pointer", styles.className)} data-component="link" href={d.href} id={d.id}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
