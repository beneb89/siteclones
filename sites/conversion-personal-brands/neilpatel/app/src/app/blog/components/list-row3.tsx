import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow3Data = {
  ariacontrols: string;
  ariaLabel: string;
  ariaselected?: string;
  id: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className="w-3.5 h-3.5 list-item leading-0" role="presentation">
      <button className={cn("border-2 border-solid border-primary inline-block rounded-[50%] text-color-007 text-[0rem] text-center cursor-pointer", styles.className)} data-component="button" aria-controls={d.ariacontrols} aria-label={d.ariaLabel} aria-selected={d.ariaselected} id={d.id} role="tab" type="button">
        {d.label}
      </button>
    </li>
  );
}
