import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <strong className="inline font-medium">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
