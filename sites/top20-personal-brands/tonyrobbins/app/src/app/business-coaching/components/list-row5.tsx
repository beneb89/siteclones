import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow5Data = {
  label: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className="list-item relative">
      <button className={cn("border border-solid border-color-001 inline-block py-2 px-4 rounded-full font-medium text-center cursor-pointer", styles.className)} data-component="button">
        {d.label}
      </button>
    </li>
  );
}
