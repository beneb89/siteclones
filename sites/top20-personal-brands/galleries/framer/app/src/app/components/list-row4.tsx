import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  href: string;
  description: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("list-item relative shrink-0", styles.className)} name="AI Website Builder Link Container">
      <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] overflow-hidden text-primary cursor-pointer" data-component="link" href={d.href} name="AI Website Builder Link Container">
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className2)} lang="zxx">
          <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig']" dir="auto">
            {d.description}
          </p>
        </div>
        <div className="hidden max-lg:w-[1.475rem] max-lg:flex max-lg:relative max-lg:pt-px max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:shrink-0 max-lg:gap-2.5">
          <div className="hidden max-lg:w-[1.475rem] max-lg:block max-lg:relative max-lg:z-1 max-lg:shrink-0">
            <div className="hidden max-lg:flex max-lg:relative max-lg:p-[0.1875rem] max-lg:rounded-[3px] max-lg:justify-center max-lg:items-center max-lg:content-center max-lg:gap-2.5 max-lg:overflow-hidden after:content-[''] after:block after:absolute after:inset-0 after:w-[1.475rem] after:h-[0.8125rem] after:rounded-tl-[3px] 2xl:after:hidden">
              <div className="hidden max-lg:w-[1.1rem] max-lg:flex max-lg:relative max-lg:z-2 max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap">
                <p className="hidden max-lg:block max-lg:text-color-002 max-lg:[font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] max-lg:text-[0.4375rem] max-lg:leading-[0.4375rem] max-lg:tracking-[0.21px] max-lg:uppercase" dir="auto">
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
