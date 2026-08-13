import type { ListRow6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow6Data = {
  ariacontrols: string;
  ariaexpanded: string;
  arialabelledby: string;
  ariaselected: string;
  href: string;
  id: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className="box-content list-item float-left max-lg:inline max-lg:mb-2.5 max-lg:[float:initial]" aria-controls={d.ariacontrols} aria-expanded={d.ariaexpanded} aria-labelledby={d.arialabelledby} aria-selected={d.ariaselected} role="tab">
      <a className={cn("border-t-2 border-solid border-t-clr-13 border-r border-r-clr-13 border-b-2 border-l-2 border-l-clr-13 block py-3 px-5 font-semibold leading-4 text-center cursor-pointer max-lg:min-h-11 max-lg:text-[0.75rem]", styles.className)} href={d.href} id={d.id}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
