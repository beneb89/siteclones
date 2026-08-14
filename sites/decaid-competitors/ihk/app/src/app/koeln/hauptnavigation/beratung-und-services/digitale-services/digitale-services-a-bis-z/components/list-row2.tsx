import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../../../../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
  text: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="block relative mb-2 pl-9.5 [pointer-events:all] max-md:mb-1 max-lg:pl-7.5 after:content-[''] after:hidden after:absolute after:top-3 after:left-0 after:w-2 after:h-2 after:rounded-tl-[3px] max-md:after:top-2.5 max-md:after:w-1.5 max-md:after:h-1.5">
      <a className={cn("inline-block relative -mr-1 -ml-11 py-1 pr-1.5 pl-11 rounded-[3px] leading-6.5 underline cursor-pointer [pointer-events:all] max-lg:-ml-9 max-lg:pl-9 max-lg:leading-[1.4375rem] 2xl:leading-[1.8125rem] before:content-[''] before:block before:absolute before:left-[0.1875rem] before:w-7.5 before:h-7.5 before:text-foreground before:text-3xl before:leading-7.5 before: before:origin-[15px_15px] max-md:before:w-6 max-md:before:h-6 max-md:before:text-2xl max-md:before:leading-6 max-md:before:origin-[12px_12px] md:max-lg:before:inset-y-[2.7px] md:max-lg:before:w-6.5 md:max-lg:before:h-6.5 md:max-lg:before:text-[1.625rem] md:max-lg:before:leading-6.5 md:max-lg:before:origin-[13px_13px] 2xl:before:inset-y-[3.3px]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
      <div className="block mt-1.5 mb-3.5 text-[1.0625rem] leading-[1.625rem] [pointer-events:all] max-lg:text-base max-lg:leading-6 2xl:text-lg 2xl:leading-[1.6875rem]">
        <div className="block mb-[0.85rem] [pointer-events:all] max-lg:mb-[0.8rem] 2xl:mb-[0.9rem]">
          {d.text}
        </div>
        {" "}
      </div>
      {" "}
    </li>
  );
}
