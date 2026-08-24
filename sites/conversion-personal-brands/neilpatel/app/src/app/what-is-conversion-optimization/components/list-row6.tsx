import type { ListRow6Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow6Data = {
  text: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className={cn("list-item [list-style-type:decimal]", styles.className)}>
      <span className="inline">
        {d.text}
      </span>
    </li>
  );
}
