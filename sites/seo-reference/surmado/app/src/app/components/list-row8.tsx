import type { ListRow8Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow8Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow8({ d, styles }: { d: ListRow8Data; styles: ListRow8Styles }) {
  return (
    <li className="list-item mb-0.5 max-lg:mb-0">
      <a className={cn("h-[31.5px] border-b border-solid border-b-clr-2 inline-flex pt-1 pb-0.5 items-center text-color-002 text-sm leading-[1.5625rem] cursor-pointer max-lg:min-h-11 max-lg:block max-lg:py-3 max-lg:leading-[1.375rem] max-lg:h-auto hover:border-b-color-005 hover:border-l-clr-17 hover:border-r-clr-17 hover:border-t-clr-17 hover:text-clr-17 hover:outline-clr-17 hover:[text-decoration-color:var(--clr-17)]", styles.className)} data-component="button" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
