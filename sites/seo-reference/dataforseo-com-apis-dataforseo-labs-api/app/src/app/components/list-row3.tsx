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
    <li className="box-content w-[16.5625rem] list-item float-left" aria-controls={d.ariacontrols} aria-expanded={d.ariaexpanded} aria-labelledby={d.arialabelledby} aria-selected={d.ariaselected} role="tab">
      <a className={cn("h-15.5 min-h-15.5 border-b-[6px] border-solid block mx-0.5 py-3 px-[0.9375rem] font-semibold leading-4 text-center cursor-pointer", styles.className)} data-component="link" href={d.href} id={d.id}>
        {" "}
        <span className="box-content inline" />
        {" "}
        <span className="box-content inline">
          {d.label}
        </span>
        {" "}
      </a>
      {" "}
    </li>
  );
}
