import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  ariacontrols: string;
  ariaexpanded: string;
  arialabelledby: string;
  ariaselected: string;
  href: string;
  id: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className="box-content w-[17.1875rem] list-item float-left max-lg:w-1/4 max-lg:inline max-lg:mb-2.5 max-lg:[float:initial]" aria-controls={d.ariacontrols} aria-expanded={d.ariaexpanded} aria-labelledby={d.arialabelledby} aria-selected={d.ariaselected} role="tab">
      <a className={cn("border-t-2 border-solid border-t-clr-7 border-r border-r-clr-7 border-b-2 border-l-2 border-l-clr-7 block py-3 px-5 font-semibold leading-4 text-center cursor-pointer max-lg:min-h-11 max-lg:border-b-[3px]", styles.className)} data-component="link" href={d.href} id={d.id}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
