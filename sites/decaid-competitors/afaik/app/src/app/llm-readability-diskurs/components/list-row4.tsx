import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow4Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("box-content list-item", styles.className)}>
      {d.text}
      <em className="box-content inline italic">
        {d.text2}
      </em>
      {d.text3}
    </li>
  );
}
