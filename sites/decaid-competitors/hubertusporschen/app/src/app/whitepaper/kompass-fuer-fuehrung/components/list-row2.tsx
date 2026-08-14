import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow2Data = {
  id: string;
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("flex p-2 items-center 2xl:hidden", styles.className)} aria-selected="false" id={d.id} role="option">
      <div className={cn("w-4 h-3 block min-w-0 mr-2 rounded-[1px] [background-size:3904px_12px] bg-no-repeat shadow-[var(--clr-27)_0px_0px_1px_0px] 2xl:hidden", styles.className2)} style={{ backgroundImage: "url(\"/assets/cloned/images/0b9ffd286eb0.webp\")" }} />
      <span className="block min-w-0 mr-2 2xl:hidden">
        {d.text}
      </span>
      <span className="block min-w-0 text-clr-30 2xl:hidden">
        {d.text2}
      </span>
    </li>
  );
}
