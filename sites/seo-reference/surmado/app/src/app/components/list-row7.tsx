import type { ListRow7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d, styles }: { d: ListRow7Data; styles: ListRow7Styles }) {
  return (
    <li className="list-item mb-0.5 max-lg:mb-0">
      <a className={cn("h-[31.5px] border-b border-solid border-b-clr-2 inline-flex pt-1 pb-0.5 items-center text-color-002 text-sm leading-[1.5625rem] cursor-pointer max-lg:min-h-11 max-lg:block max-lg:py-3 max-lg:leading-[1.375rem] max-lg:h-auto", styles.className)} data-component="button" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
