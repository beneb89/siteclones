import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item relative mb-2 pl-3 [list-style-type:none] before:content-[''] before:block before:absolute before:top-[0.55rem] before:right-[15.4rem] before:bottom-[1.6375rem] before:left-0 before:w-[0.35rem] before:h-[0.35rem] before:bg-foreground before:rounded-tl-[50%] max-md:before:right-[17.5875rem] md:max-lg:before:right-[16.65rem] 2xl:before:right-[21.025rem]", styles.className)}>
      <a className={cn("inline-block text-sm leading-[1.25rem] tracking-[-0.17px] cursor-pointer", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
