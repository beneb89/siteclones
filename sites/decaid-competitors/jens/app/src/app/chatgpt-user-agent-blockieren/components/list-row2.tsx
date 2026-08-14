import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  description: string;
  description2: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item", styles.className)}>
      <p className="block my-5">
        <strong className="inline font-medium">
          {d.description}
        </strong>
        {d.description2}
      </p>
      {" "}
    </li>
  );
}
