import type { ListRow6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow6Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className={cn("hidden max-md:w-[19.4375rem] max-lg:list-item max-lg:relative max-lg:pointer-events-none md:max-lg:w-64 before:content-[''] before:absolute before:left-1.5 before:w-px before:bg-border 2xl:before:hidden", styles.className)}>
      <a className="hidden max-md:w-[19.4375rem] max-lg:h-5 max-lg:flex max-lg:relative max-lg:pl-6 max-lg:text-pretty max-lg:cursor-pointer max-lg:pointer-events-none md:max-lg:w-64 before:content-[''] before:block before:absolute before:top-1 before:right-75.5 before:bottom-2.5 before:left-[0.1875rem] before:z-20 before:w-1.5 before:h-1.5 before:bg-muted-foreground before:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--background)_0px_0px_0px_2px,var(--clr-0)_0px_0px_0px_0px] before:rounded-tl-full md:max-lg:before:right-[15.4375rem] 2xl:before:hidden after:content-[''] after:block after:absolute after:inset-y-1 after:right-[18.6875rem] after:left-0 after:z-10 after:w-3 after:h-3 after:bg-border after:rounded-tl-full md:max-lg:after:right-61 2xl:after:hidden" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
