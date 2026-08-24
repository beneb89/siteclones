import type { ListRow10Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow10Data = {
  text: string;
};
/** A list row. */
export default function ListRow10({ d, styles }: { d: ListRow10Data; styles: ListRow10Styles }) {
  return (
    <li className={cn("list-item [list-style-type:decimal]", styles.className)}>
      {d.text}
    </li>
  );
}
