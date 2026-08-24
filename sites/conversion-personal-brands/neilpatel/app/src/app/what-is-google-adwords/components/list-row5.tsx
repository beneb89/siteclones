import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow5Data = {
  text: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item [list-style-type:decimal]", styles.className)}>
      {d.text}
    </li>
  );
}
