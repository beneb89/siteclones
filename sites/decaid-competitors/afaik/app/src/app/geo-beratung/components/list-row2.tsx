import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("box-content list-item", styles.className)}>
      <strong className="box-content inline font-bold">
        {d.text}
      </strong>
      <br className="box-content inline" />
      {d.text2}
    </li>
  );
}
