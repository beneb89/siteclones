import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className="flex items-center gap-[0.4rem] max-md:gap-1.5 2xl:hidden">
      <span className="block text-accent font-bold 2xl:hidden" aria-hidden="true">
        ·
      </span>
      {" "}
      <span className={cn("block 2xl:hidden", styles.className)}>
        {d.text}
      </span>
      {" "}
    </li>
  );
}
