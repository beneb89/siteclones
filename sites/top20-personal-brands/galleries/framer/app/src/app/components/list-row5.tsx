import type { ListRow5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow5Data = {
  name?: string;
  href: string;
  name2?: string;
  description: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item relative shrink-0", styles.className)} name={d.name}>
      <a className="h-5.5 flex relative rounded-lg justify-start items-center content-center gap-[0.3125rem] overflow-hidden text-primary cursor-pointer" data-component="link" href={d.href} name={d.name2}>
        <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap", styles.className2)} lang="zxx">
          <p className="block text-color-001 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.14px] text-left [font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig']" dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </li>
  );
}
