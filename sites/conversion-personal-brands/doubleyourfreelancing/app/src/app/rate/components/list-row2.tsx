import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("box-content list-item relative max-h-[1e+06px] pl-5.5 2xl:hidden before:content-[''] before:block before:absolute before:top-[0.9375rem] before:right-[35.6875rem] before:left-0 before:w-[0.4375rem] before:h-[0.4375rem] before:bg-foreground before:rounded-tl-[50%] max-md:before:right-79 2xl:before:hidden", styles.className)}>
      {d.text}
    </li>
  );
}
