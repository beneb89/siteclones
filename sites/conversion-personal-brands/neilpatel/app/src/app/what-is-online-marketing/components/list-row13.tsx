import type { ListRow13Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow13Data = {
  text: string;
};
/** A list row. */
export default function ListRow13({ d, styles }: { d: ListRow13Data; styles: ListRow13Styles }) {
  return (
    <li className={cn("list-item relative mb-[16.7px] pl-[2.0625rem] max-md:mb-[13.3px] before:content-[''] before:block before:absolute before:top-[16.7px] before:right-[39.3875rem] before:left-0 before:w-2 before:h-2 before:-mt-1 before:bg-primary max-md:before:top-[13.3px] max-md:before:right-[18.55rem] md:max-lg:before:right-[42.7625rem] 2xl:before:right-[39.7rem]", styles.className)}>
      {d.text}
    </li>
  );
}
