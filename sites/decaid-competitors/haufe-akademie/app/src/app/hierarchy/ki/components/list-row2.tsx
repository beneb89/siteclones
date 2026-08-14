import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item relative pl-8 text-base leading-5.5 max-lg:text-sm max-lg:leading-5 before:content-[''] before:block before:absolute before:top-px before:right-140.5 before:left-0 before:w-7.5 before:h-5.5 before:pr-3 before:text-background before:text-xl before:font-light before:leading-5.5 before:text-left max-md:before:right-69 max-lg:before:w-[1.6875rem] max-lg:before:h-5 max-lg:before:text-lg max-lg:before:leading-5 md:max-lg:before:right-[41.3125rem] 2xl:before:right-144.5", styles.className)}>
      {d.text}
    </li>
  );
}
