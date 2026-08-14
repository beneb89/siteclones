import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("hidden 2xl:list-item 2xl:relative 2xl:pl-4.5 2xl:text-color-008 2xl:text-[0.9375rem] 2xl:leading-[1.375rem] before:content-['·'] before:block before:absolute before:right-[290.7px] before:left-1 before:w-1 before:h-[22.3px] before:text-accent before:text-[0.9375rem] before:font-bold before:leading-[1.375rem] max-lg:before:hidden", styles.className)}>
      {d.text}
    </li>
  );
}
