import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow5Data = {
  text: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item relative py-3 pl-[1.8625rem] text-color-042 text-sm leading-[1.375rem] max-md:pl-7 2xl:hidden", styles.className)}>
      <span className="w-3.5 h-[21.7px] block absolute left-0 text-accent font-semibold 2xl:hidden">
        →
      </span>
      {d.text}
    </li>
  );
}
