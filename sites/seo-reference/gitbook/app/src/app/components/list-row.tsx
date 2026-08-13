import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="flex flex-col max-lg:hidden 2xl:hidden">
      <a className={cn("w-[17.5625rem] flex relative py-1.5 pr-1.5 pl-3 rounded-tr-2xl rounded-br-2xl justify-start items-center gap-3 text-color-001 text-balance cursor-pointer max-lg:hidden 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:right-[17.5625rem] before:-left-px before:w-px max-lg:before:hidden 2xl:before:hidden hover:bg-clr-7 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]", styles.className)} data-component="link" href={d.href}>
        <span className="block max-lg:hidden 2xl:hidden">
          {d.label}
        </span>
      </a>
    </li>
  );
}
