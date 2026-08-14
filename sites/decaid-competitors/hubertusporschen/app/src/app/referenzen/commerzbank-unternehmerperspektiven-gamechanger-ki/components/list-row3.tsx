import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("flex items-start gap-2 2xl:hidden", styles.className)}>
      <span className="block mt-1 text-accent 2xl:hidden">
        —
      </span>
      {d.text}
    </li>
  );
}
