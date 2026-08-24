import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("list-item relative mb-[0.3125rem] pl-[2.0625rem] before:content-[''] before:block before:absolute before:top-3 before:right-[38.7375rem] before:left-0 before:w-2 before:h-2 before:-mt-1 before:bg-primary max-md:before:right-[19.675rem] md:max-lg:before:right-[42.1125rem] 2xl:before:right-[39.9875rem]", styles.className)}>
      {d.text}
    </li>
  );
}
