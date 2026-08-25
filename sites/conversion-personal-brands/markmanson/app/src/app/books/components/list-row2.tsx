import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  href: string;
  label2: string;
  target?: string;
  label?: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="list-item">
      <a className={cn("block p-[0.9375rem] uppercase cursor-pointer", styles.className)} data-component="link" href={d.href} target={d.target} title={d.label}>
        {d.label2}
      </a>
    </li>
  );
}
