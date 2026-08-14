import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../../../../../lib/utils";
export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("block relative mb-2 pl-8 max-lg:mb-[0.45rem] max-md:pl-6 2xl:mb-[0.55rem] after:content-[''] after:block after:absolute after:top-3 after:right-[718.7px] after:left-0 after:w-2 after:h-2 after:bg-accent after:rounded-tl-[3px] max-md:after:top-2.5 max-md:after:right-[20.5625rem] max-md:after:w-1.5 max-md:after:h-1.5 md:max-lg:after:right-175 2xl:after:right-218", styles.className)}>
      {d.text}
    </li>
  );
}
