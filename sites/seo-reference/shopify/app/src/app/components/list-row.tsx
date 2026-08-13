import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative opacity-0 [translate:0px_-24px] pointer-events-none max-lg:hidden before:content-[''] before:absolute before:left-1.5 before:w-px before:bg-border max-lg:before:hidden", styles.className)}>
      <a className="w-64 h-5 flex relative pl-6 text-pretty cursor-pointer pointer-events-none max-lg:hidden before:content-[''] before:block before:absolute before:top-1 before:right-[15.4375rem] before:bottom-2.5 before:left-[0.1875rem] before:z-20 before:w-1.5 before:h-1.5 before:bg-muted-foreground before:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--background)_0px_0px_0px_2px,var(--clr-0)_0px_0px_0px_0px] before:rounded-tl-full max-lg:before:hidden after:content-[''] after:block after:absolute after:inset-y-1 after:right-61 after:left-0 after:z-10 after:w-3 after:h-3 after:bg-border after:rounded-tl-full max-lg:after:hidden" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
