import type { ListRowStyles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type ListRowData = {
  label: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="list-item">
      <button className={cn("min-h-15 inline-flex relative min-w-15 m-[0.3125rem] py-4 px-6 rounded-3xl justify-center items-center [font-family:Korb,_sans-serif] text-2xl leading-6 text-left cursor-pointer max-md:min-h-11 max-md:min-w-11 max-md:m-1 max-md:py-3 max-md:px-4 max-md:rounded-[18px] max-md:text-xl max-md:leading-5 md:max-lg:min-h-13 md:max-lg:min-w-13 md:max-lg:py-3.5 md:max-lg:px-5 md:max-lg:rounded-[20px] md:max-lg:text-[1.375rem] md:max-lg:leading-5.5 2xl:text-[1.75rem] 2xl:leading-7 after:content-[''] after:block after:absolute after:inset-0 after:opacity-0 after:rounded-tl-3xl max-md:after:rounded-tl-[18px] md:max-lg:after:rounded-tl-[20px]", styles.className)} data-component="button">
        <span className="block relative z-2">
          {d.label}
        </span>
      </button>
    </li>
  );
}
