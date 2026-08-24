import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow4Data = {
  id: string;
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("flex p-2 items-center", styles.className)} aria-selected="false" id={d.id} role="option">
      <div className={cn("w-4 h-3 block min-w-0 mr-2 rounded-[1px] [background-size:3904px_12px] bg-no-repeat shadow-[var(--clr-21)_0px_0px_1px_0px]", styles.className2)} style={{ backgroundImage: "url(\"/assets/cloned/images/cf0cad086f25.webp\")" }} />
      <span className="block min-w-0 mr-2 text-foreground">
        {d.text}
      </span>
      <span className="block min-w-0 text-color-012">
        {d.text2}
      </span>
    </li>
  );
}
