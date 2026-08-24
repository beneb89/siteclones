import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow5Data = {
  description: string;
  description2: string;
  description3: string;
  description4: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("flex mb-5 p-8 rounded-3xl flex-col gap-2 bg-surface-8 max-md:hidden", styles.className)}>
      <p className="w-[342.7px] block text-color-021 text-xl font-medium leading-[1.6875rem] md:max-lg:w-75 2xl:w-[349.3px]">
        {d.description}
      </p>
      {" "}
      <blockquote className="flex flex-col gap-2 text-color-009 [font-family:Roboto,_Arial,_Helvetica,_sans-serif] text-sm font-normal leading-5">
        <p className="block">
          {d.description2}
        </p>
        {" "}
      </blockquote>
      {" "}
      <p className="block pt-2 [font-family:Roboto,_Arial,_Helvetica,_sans-serif] text-xs leading-[1.0625rem]">
        <span className="block text-color-019 font-medium">
          {d.description3}
        </span>
        {" "}
        <span className="inline text-color-010 font-normal">
          {d.description4}
        </span>
        {" "}
      </p>
      {" "}
    </li>
  );
}
