import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow5Data = {
  text: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item relative pl-[1.8625rem] text-color-014 text-base leading-6 max-md:pl-7 max-md:[font-size:inherit] 2xl:hidden before:content-['✕'] before:block before:absolute before:right-[393.7px] before:left-0 before:w-[0.8125rem] before:h-6 before:text-accent before:text-base before:font-semibold before:leading-6 max-md:before:right-70.5 md:max-lg:before:right-[13.9375rem] 2xl:before:hidden", styles.className)}>
      {d.text}
    </li>
  );
}
