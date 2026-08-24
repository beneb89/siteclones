import type { ListRow7Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d, styles }: { d: ListRow7Data; styles: ListRow7Styles }) {
  return (
    <li className={cn("list-item relative pl-[2.0625rem] before:content-[''] before:block before:absolute before:top-[16.7px] before:right-[39.3875rem] before:bottom-[12.7px] before:left-0 before:w-2 before:h-2 before:-mt-1 before:bg-primary max-md:before:top-[13.3px] max-md:before:right-[18.55rem] max-md:before:bottom-[10.7px] md:max-lg:before:right-[42.7625rem] 2xl:before:right-[39.7rem]", styles.className)}>
      <a className="inline text-primary cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
