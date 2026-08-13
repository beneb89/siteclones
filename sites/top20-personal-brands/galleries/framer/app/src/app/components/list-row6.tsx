import type { ListRow6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow6Data = {
  description: string;
  name?: string;
  href?: string;
  name2?: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className={cn("hidden max-lg:list-item max-lg:relative max-lg:shrink-0", styles.className)} name={d.name}>
      <a className={cn("hidden max-lg:h-5.5 max-lg:flex max-lg:relative max-lg:rounded-lg max-lg:justify-start max-lg:items-center max-lg:content-center max-lg:gap-[0.3125rem]", styles.className2)} href={d.href} name={d.name2}>
        <div className={cn("hidden max-lg:flex max-lg:relative max-lg:flex-col max-lg:justify-start max-lg:shrink-0 max-lg:whitespace-pre max-lg:text-nowrap", styles.className3)} lang="zxx">
          <p className={cn("hidden max-lg:block max-lg:[font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] max-lg:text-left max-lg:[font-feature-settings:'cv01',_'cv05',_'cv09',_'cv11',_'dlig']", styles.className4)} dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </li>
  );
}
