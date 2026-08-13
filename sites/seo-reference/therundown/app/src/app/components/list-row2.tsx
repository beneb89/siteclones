import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item relative pl-5.5 text-[0.9375rem] leading-6 before:content-[''] before:block before:absolute before:top-[9.3px] before:right-158 before:left-0.5 before:w-1.5 before:h-1.5 before:bg-muted-foreground before:rounded-tl-[999px] max-md:before:right-[20.9375rem] md:max-lg:before:right-182", styles.className)}>
      {d.text}
    </li>
  );
}
