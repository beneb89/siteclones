import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow4Data = {
  text: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("list-item relative pl-[22.7px] text-muted leading-[1.625rem] max-md:pl-5 max-md:leading-[1.5rem] md:max-lg:pl-[21.3px] md:max-lg:leading-[1.5625rem] 2xl:pl-6 2xl:leading-[1.6875rem]", styles.className)}>
      {d.text}
      <a className="inline underline cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
