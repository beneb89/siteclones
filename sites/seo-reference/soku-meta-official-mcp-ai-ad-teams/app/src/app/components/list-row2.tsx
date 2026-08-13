import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item text-muted-foreground", styles.className)}>
      {d.text}
      <strong className="inline text-foreground font-semibold">
        {d.text2}
      </strong>
      {d.text3}
    </li>
  );
}
