import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  description: string;
  description2: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item pl-5.5 text-color-001 [font-family:'Geist_Variable',_'Geist_Variable_Placeholder',_sans-serif] leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11',_'salt',_'ss01'] [list-style-type:none] 2xl:pl-6 2xl:text-lg 2xl:leading-[1.8125rem] before:content-['•'] before:block before:absolute before:right-[44.6875rem] before:left-0 before:w-[0.3125rem] before:h-[1.6rem] before:text-color-001 before:text-base before:leading-[1.625rem] max-md:before:right-82.5 2xl:before:h-[1.8rem] 2xl:before:text-lg 2xl:before:leading-[1.8125rem]", styles.className)}>
      <p className="block">
        <strong className="inline">
          {d.description}
        </strong>
        {d.description2}
      </p>
    </li>
  );
}
