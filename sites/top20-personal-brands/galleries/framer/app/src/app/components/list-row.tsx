import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  description: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative shrink-0 max-lg:hidden", styles.className)}>
      <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] overflow-hidden text-primary cursor-pointer max-lg:hidden" data-component="link" href={d.href}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className2)} lang="zxx">
          <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig'] max-lg:hidden" dir="auto">
            {d.description}
          </p>
        </div>
        <div className="w-[1.475rem] flex relative pt-px flex-col justify-center items-center content-center shrink-0 gap-2.5 max-lg:hidden">
          <div className="w-[1.475rem] block relative z-1 shrink-0 max-lg:hidden">
            <div className="flex relative p-[0.1875rem] rounded-[3px] justify-center items-center content-center gap-2.5 overflow-hidden max-lg:hidden after:content-[''] after:block after:absolute after:inset-0 after:w-[1.475rem] after:h-[0.8125rem] after:rounded-tl-[3px] max-lg:after:hidden">
              <div className="w-[1.1rem] flex relative z-2 flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden">
                <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.4375rem] leading-[0.4375rem] tracking-[0.21px] uppercase max-lg:hidden" dir="auto">
                  New
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
