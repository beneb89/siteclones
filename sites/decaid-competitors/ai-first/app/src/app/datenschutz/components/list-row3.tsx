import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <strong className="inline text-foreground font-bold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
