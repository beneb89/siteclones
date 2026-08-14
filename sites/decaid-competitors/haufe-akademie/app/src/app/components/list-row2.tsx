import type { ListRow2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow2Data = {
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("border-t border-solid list-item", styles.className)}>
      <a className="flex py-3 justify-between items-center text-surface cursor-pointer" data-component="link" href="/1685">
        {d.label}
        <i className="block [font-family:'Font_Awesome_Pro'] font-black leading-4 text-center max-lg:leading-3.5" />
      </a>
    </li>
  );
}
