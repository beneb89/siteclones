import type { ListRow7Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow7Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow7({ d, styles }: { d: ListRow7Data; styles: ListRow7Styles }) {
  return (
    <li className={cn("list-item [list-style-type:decimal]", styles.className)}>
      <span className="inline">
        {d.text}
      </span>
      <span className="inline">
        {d.text2}
      </span>
    </li>
  );
}
