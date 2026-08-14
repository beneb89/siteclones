import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("list-item relative pl-6 text-[0.9375rem] leading-6 2xl:hidden", styles.className)}>
      <span className="w-[0.9375rem] h-6 block absolute top-0.5 left-0 text-accent font-semibold 2xl:hidden" aria-hidden="true">
        →
      </span>
      {d.text}
    </li>
  );
}
