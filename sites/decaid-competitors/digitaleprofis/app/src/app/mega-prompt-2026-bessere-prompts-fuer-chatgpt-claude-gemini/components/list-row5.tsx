import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow5Data = {
  text: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item py-5.5 pl-3 leading-[1.8125rem] max-md:py-4.5 max-md:pl-2", styles.className)}>
      {d.text}
    </li>
  );
}
