import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item relative pl-5 text-color-014 text-[0.9375rem] leading-[1.4375rem] 2xl:hidden before:content-['—'] before:block before:absolute before:right-[347.9px] before:left-0 before:w-[0.9375rem] before:h-[22.5px] before:text-accent before:text-[0.9375rem] before:leading-[1.4375rem] max-md:before:right-55.5 md:max-lg:before:right-[10.6125rem] 2xl:before:hidden", styles.className)}>
      {d.text}
    </li>
  );
}
