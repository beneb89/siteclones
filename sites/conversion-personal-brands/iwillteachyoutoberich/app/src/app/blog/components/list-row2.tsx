import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("h-[2.1875rem] border border-solid border-primary flex relative min-w-[9.775rem] my-[6.7px] mx-auto pt-0.5 px-[23.3px] rounded-[2.7px] justify-center items-center overflow-hidden font-medium leading-3.5 tracking-[-0.56px] text-center whitespace-nowrap text-nowrap [list-style-type:none] max-lg:h-10 max-lg:min-w-0 max-lg:pt-[0.15rem] max-lg:px-[2.1875rem] max-lg:rounded-sm max-lg:leading-4 max-lg:tracking-[-0.64px] max-lg:m-0 2xl:h-10 2xl:min-w-[14.6875rem] 2xl:my-2.5 2xl:pt-[0.1875rem] 2xl:px-[2.1875rem] 2xl:rounded-sm 2xl:leading-5 2xl:tracking-[-0.8px] before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:h-[2.0625rem] before:bg-primary before:opacity-0 max-lg:before:hidden 2xl:before:h-9.5", styles.className)}>
      <a className={cn("block cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:z-1 after:h-[2.0625rem] max-md:after:w-[164.5px] max-lg:after:h-9.5 md:max-lg:after:w-[19.8125rem] 2xl:after:h-9.5", styles.className2)}>
        {d.label}
      </a>
    </li>
  );
}
