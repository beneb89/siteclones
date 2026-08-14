import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item relative pl-8 before:content-[''] before:block before:absolute before:top-px before:right-[30.6875rem] before:-bottom-px before:left-0 before:w-7.5 before:h-5.5 before:pr-3 before:text-accent before:text-xl before:font-bold before:leading-5.5 before:text-left max-md:before:right-77 max-lg:before:w-[1.6875rem] max-lg:before:h-5 max-lg:before:text-lg max-lg:before:leading-5 md:max-lg:before:right-[43.3125rem]", styles.className)}>
      {d.text}
    </li>
  );
}
