import type { ListRowStyles } from "../_styles";
import { cn } from "../../../../../../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("border-t border-solid border-t-primary block relative leading-6 max-lg:leading-[1.375rem] 2xl:leading-[1.625rem] before:content-[''] before:block before:absolute before:top-[27.5px] before:right-[693.7px] before:bottom-[12.5px] before:left-[0.1875rem] before:z-1 before:w-7.5 before:h-7.5 before:-mt-[0.9375rem] before:text-accent before:text-3xl before:leading-7.5 max-md:before:right-75.5 md:max-lg:before:right-[42.1875rem] 2xl:before:right-[52.9375rem] after:content-[''] after:hidden after:absolute after:top-3 after:left-0 after:w-2 after:h-2 after:bg-accent after:rounded-tl-[3px] max-md:after:top-2.5 max-md:after:w-1.5 max-md:after:h-1.5", styles.className)}>
      <a className={cn("h-[3.4375rem] min-h-[3.4375rem] flex relative py-3.5 pr-[0.9375rem] pl-10.5 items-center underline cursor-pointer before:content-[''] before:block before:absolute before:inset-0 before:bg-border before:opacity-0", styles.className2)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
