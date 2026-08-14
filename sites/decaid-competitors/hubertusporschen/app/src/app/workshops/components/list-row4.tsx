import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("list-item relative pl-5 2xl:hidden before:content-['—'] before:block before:absolute before:inset-y-0 before:right-[29.1875rem] before:left-0 before:w-3.5 before:h-[1.4rem] before:text-accent before:text-sm before:leading-[1.375rem] max-md:before:right-[13.9375rem] md:max-lg:before:right-[33.6875rem] 2xl:before:hidden", styles.className)}>
      {d.text}
    </li>
  );
}
