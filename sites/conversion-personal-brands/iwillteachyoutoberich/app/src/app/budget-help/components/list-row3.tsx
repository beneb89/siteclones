import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item relative pl-6 [list-style-type:none] list-outside 2xl:pl-9 before:content-['•'] before:block before:absolute before:top-0 before:right-[576.1px] before:left-0 before:text-foreground before:text-base before:leading-[1.375rem] before:text-center max-md:before:right-[19.9375rem] max-lg:before:text-base max-lg:before:leading-[1.375rem] md:max-lg:before:right-156 2xl:before:right-216 2xl:before:text-2xl 2xl:before:leading-[2.125rem]", styles.className)}>
      {d.text}
    </li>
  );
}
