import type { ListRow4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("list-item relative mb-2.5 pl-5.5 text-color-002 leading-[1.625rem] before:content-[''] before:block before:absolute before:top-[0.6875rem] before:right-139 before:bottom-[2.1375rem] before:left-0.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-tl-full max-md:before:right-[19.9375rem] max-md:before:bottom-[3.7375rem] md:max-lg:before:right-174 2xl:before:right-149", styles.className)}>
      <strong className="inline text-foreground font-semibold">
        {d.text}
      </strong>
      {d.text2}
    </li>
  );
}
