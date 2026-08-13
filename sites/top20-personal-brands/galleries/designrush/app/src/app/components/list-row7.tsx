import type { ListRow7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow7Data = {
  href: string;
  text: string;
};
/** A list row. */
export default function ListRow7({ d, styles }: { d: ListRow7Data; styles: ListRow7Styles }) {
  return (
    <li className={cn("h-12 min-h-12 flex relative items-center pointer-events-none max-lg:h-8 max-lg:min-h-8", styles.className)}>
      <a className={cn("flex items-center font-semibold whitespace-nowrap text-nowrap cursor-pointer pointer-events-none max-lg:py-[0.3125rem]", styles.className2)} data-component="link" href={d.href}>
        <strong className={cn("block font-medium pointer-events-none", styles.className3)}>
          {d.text}
        </strong>
      </a>
    </li>
  );
}
