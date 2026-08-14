import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("list-item relative pl-4 text-color-021 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] leading-[1.125rem] tracking-[1.47px] uppercase max-md:leading-[1.0625rem] 2xl:hidden before:content-[''] before:block before:absolute before:top-[0.5625rem] before:right-[26.55rem] before:bottom-2 before:left-0 before:w-2 before:h-px before:bg-accent max-md:before:right-[136.5px] md:max-lg:before:right-[18.5rem] 2xl:before:hidden", styles.className)}>
      {d.text}
    </li>
  );
}
