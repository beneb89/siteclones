import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("2xl:pl-4.5 2xl:text-color-008 2xl:text-[0.9375rem] 2xl:leading-[1.375rem] before:content-['·'] before:block before:absolute before:left-1 before:text-accent", styles.className)}>
      {d.text}
    </li>
  );
}
