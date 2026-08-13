import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("flex gap-3", styles.className)}>
      <span className="block mt-0.5 shrink-0 text-color-007">
        +
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
