import type { ListRowStyles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type ListRowData = {
  href: string;
  type: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item relative pt-[0.3125rem] pl-[0.9375rem] align-top whitespace-nowrap text-nowrap 2xl:pt-1.5 2xl:pl-4.5 before:content-[''] before:hidden before:w-[0.9375rem] before:-ml-[0.9375rem] before:text-primary before:text-xs before:leading-3 2xl:before:w-4.5 2xl:before:-ml-4.5 2xl:before:text-sm 2xl:before:leading-[0.875rem]">
      <div className={cn("block before:inline-block before:w-[0.9375rem] before:h-3 before:-ml-[0.9375rem] before:text-primary before:text-xs before:leading-3 2xl:before:w-4.5 2xl:before:h-[0.9rem] 2xl:before:-ml-4.5 2xl:before:text-sm 2xl:before:leading-[0.875rem]", styles.className)}>
        <a className="inline text-[0.75rem] font-normal tracking-[0.3px] underline whitespace-normal [word-break:break-word] [overflow-wrap:break-word] cursor-pointer 2xl:text-[0.875rem] 2xl:tracking-[0.36px] after:content-[''] after:inline-block after:w-[0.6875rem] after:h-[0.7125rem] after:mx-[3.5px] after:text-primary after:text-[0.6875rem] after:leading-[0.6875rem] 2xl:after:w-3.5 2xl:after:h-[13.7px] 2xl:after:mx-1 2xl:after:text-sm 2xl:after:leading-[0.875rem]" data-component="link" download="" href={d.href} target="_blank" type={d.type}>
          {d.label}
        </a>
      </div>
      {" "}
    </li>
  );
}
