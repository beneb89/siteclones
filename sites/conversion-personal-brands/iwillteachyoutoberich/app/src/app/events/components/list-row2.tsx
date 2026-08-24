import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item relative pl-[1.3125rem] [list-style-type:none] max-lg:pl-6 2xl:pl-7.5 before:content-['•'] before:block before:absolute before:right-[27.875rem] before:left-0 before:h-[1.1375rem] before:text-foreground before:text-sm before:leading-[1.125rem] before:text-center max-md:before:right-[19.9375rem] max-lg:before:h-[1.3rem] max-lg:before:text-base max-lg:before:leading-[1.3125rem] md:max-lg:before:right-156 2xl:before:right-167.5 2xl:before:h-6.5 2xl:before:text-xl 2xl:before:leading-6.5", styles.className)}>
      {d.text}
    </li>
  );
}
