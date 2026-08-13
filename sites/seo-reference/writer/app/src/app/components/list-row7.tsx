import type { ListRow7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow7Data = {
  id: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d, styles }: { d: ListRow7Data; styles: ListRow7Styles }) {
  return (
    <li className="list-item [list-style-type:none]" id={d.id}>
      <a className={cn("inline-block py-[0.5625rem] text-color-001 [font-family:Poppins,_sans-serif] cursor-pointer max-lg:py-1.5 max-md:text-[0.6875rem] max-md:leading-[0.8125rem] md:max-lg:text-xs md:max-lg:leading-[0.875rem]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
