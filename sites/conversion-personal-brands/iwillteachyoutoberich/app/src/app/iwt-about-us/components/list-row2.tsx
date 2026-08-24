import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("min-h-2.5 list-item relative pl-5 [list-style-type:none] max-lg:top-[0.3375rem] max-lg:-bottom-[0.3375rem] max-lg:pl-[1.5625rem] 2xl:min-h-[0.9375rem] 2xl:pl-7.5 before:content-[''] before:block before:absolute before:right-[15.6375rem] before:left-0 before:w-2.5 before:h-2.5 before:bg-primary max-lg:before:top-[2.9px] max-md:before:right-[20.8125rem] max-lg:before:bottom-2 max-lg:before:w-2.5 max-lg:before:h-2.5 md:max-lg:before:right-159.5 2xl:before:inset-y-1 2xl:before:right-[23.4375rem] 2xl:before:w-[0.9375rem] 2xl:before:h-[0.9375rem]", styles.className)}>
      {d.text}
    </li>
  );
}
