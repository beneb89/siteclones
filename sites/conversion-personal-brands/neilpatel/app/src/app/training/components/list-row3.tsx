import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("block max-md:inline-block after:content-['|'] after:hidden after:mr-[7.5px] after:ml-[11.3px] after:text-foreground after:text-[0.9375rem] after:font-light after:leading-[1.5625rem] after:text-left after:opacity-50 max-md:after:text-center", styles.className)}>
      <a className={cn("block py-[0.3125rem] cursor-pointer max-md:inline-block max-md:py-0", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
