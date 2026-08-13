import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item text-[1.125rem]", styles.className)}>
      {d.text}
      <em className="inline italic">
        {d.text2}
      </em>
      {d.text3}
    </li>
  );
}
