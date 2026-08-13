import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow2Data = {
  description: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("list-item pl-6.5 text-color-001 [font-family:'Suisse_Int'l_Regular',_'Suisse_Int'l_Regular_Placeholder',_sans-serif] text-[1.1875rem] leading-[1.8125rem] tracking-[0.19px] [list-style-type:none] max-lg:pl-5.5 max-lg:leading-6 max-lg:tracking-[0.16px] max-lg:[font-size:inherit] before:content-['•'] before:block before:absolute before:right-[31.9125rem] before:left-0 before:w-2 before:h-[28.5px] before:text-color-001 before:text-[1.1875rem] before:leading-[1.8125rem] before:tracking-[0.19px] max-lg:before:right-[21.425rem] max-lg:before:w-[0.45rem] max-lg:before:h-6 max-lg:before:text-base max-lg:before:leading-6 max-lg:before:tracking-[0.16px]", styles.className)}>
      <p className="block">
        {d.description}
      </p>
    </li>
  );
}
