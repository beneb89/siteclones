import type { ListRow6Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow6Data = {
  text: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className={cn("list-item relative pl-6 text-sm leading-[1.375rem] 2xl:hidden", styles.className)}>
      <span className="w-3.5 h-[21.7px] block absolute top-0.5 left-0 text-accent font-semibold 2xl:hidden" aria-hidden="true">
        →
      </span>
      {d.text}
    </li>
  );
}
