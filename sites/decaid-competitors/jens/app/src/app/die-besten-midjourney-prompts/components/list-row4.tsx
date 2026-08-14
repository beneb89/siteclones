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
    <li className={cn("list-item", styles.className)}>
      <strong className="inline font-medium">
        {d.text}
      </strong>
      {" oder "}
      <strong className="inline font-medium">
        {d.text2}
      </strong>
      {d.text3}
    </li>
  );
}
