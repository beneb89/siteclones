import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("box-content list-item relative mb-3 ml-5 pl-5 before:content-['›'] before:block before:absolute before:top-0 before:right-120 before:bottom-0.5 before:left-0 before:w-[0.4375rem] before:h-[18.9px] before:text-background before:text-[1.3125rem] before:font-bold before:leading-[1.1875rem] max-md:before:right-77 max-md:before:h-[1.1rem] max-lg:before:text-xl max-lg:before:leading-[1.125rem] md:max-lg:before:right-[43.8125rem] md:max-lg:before:h-[18.3px]", styles.className)}>
      <a className="box-content inline cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
