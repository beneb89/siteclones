import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="grid items-start gap-2.5 leading-[1.3125rem] grid-cols-[18px_1fr] before:content-['+'] before:block before:w-4.5 before:h-[1.3125rem] before:text-color-003 before:text-sm before:font-bold before:leading-[1.3125rem] before:tracking-[-0.07px]">
      <span className={cn("block", styles.className)}>
        {d.text}
      </span>
    </li>
  );
}
