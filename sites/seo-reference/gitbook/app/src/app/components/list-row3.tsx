import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("flex relative mb-0.5 max-lg:hidden 2xl:hidden", styles.className)}>
      <a className={cn("border-l-2 border-solid block relative right-px -left-px z-10 py-1 px-3 rounded-tr-2xl rounded-br-2xl text-sm leading-5 cursor-pointer w-full max-lg:hidden 2xl:hidden", styles.className2)} data-component="link" href={d.href}>
        <span className={cn("inline max-lg:hidden 2xl:hidden", styles.className3)}>
          {d.label}
        </span>
      </a>
    </li>
  );
}
