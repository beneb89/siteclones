import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("flex gap-3", styles.className)}>
      <span className="block mt-0.5 shrink-0 text-color-008">
        −
      </span>
      <div className="block text-color-002 text-sm leading-5">
        <strong className="inline text-background font-bold">
          {d.text}
        </strong>
        {d.text2}
      </div>
    </li>
  );
}
