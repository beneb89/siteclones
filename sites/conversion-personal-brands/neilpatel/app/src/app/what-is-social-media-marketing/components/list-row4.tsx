import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("list-item relative pl-[2.0625rem] before:content-[''] before:block before:absolute before:top-[16.7px] before:right-[569.5px] before:bottom-[12.7px] before:left-0 before:w-2 before:h-2 before:-mt-1 before:bg-primary max-md:before:top-[13.3px] max-md:before:right-[15.1rem] max-md:before:bottom-[10.7px] md:max-lg:before:right-[623.5px] 2xl:before:right-[574.5px]", styles.className)}>
      {d.text}
    </li>
  );
}
