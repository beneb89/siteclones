import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item relative pl-4 text-color-007 text-sm leading-[1.25rem] 2xl:hidden before:content-['·'] before:block before:absolute before:right-[13.0625rem] before:left-1 before:w-1 before:h-[20.3px] before:text-accent before:text-sm before:font-bold before:leading-[1.25rem] max-md:before:right-[16.9375rem] md:max-lg:before:right-[7.4375rem] 2xl:before:hidden", styles.className)}>
      {d.text}
    </li>
  );
}
