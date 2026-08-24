import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow5Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item [list-style-type:decimal]", styles.className)}>
      <strong className="inline font-medium">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
