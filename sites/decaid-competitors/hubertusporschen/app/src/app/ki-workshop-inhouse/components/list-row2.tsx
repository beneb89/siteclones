import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("2xl:pl-4.5 2xl:text-muted-foreground 2xl:text-[0.9375rem] 2xl:leading-[1.375rem] before:content-['·'] before:block before:absolute before:inset-y-0 before:left-1", styles.className)}>
      {d.text}
    </li>
  );
}
