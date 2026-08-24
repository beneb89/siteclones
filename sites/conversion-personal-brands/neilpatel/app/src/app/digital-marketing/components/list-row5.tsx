import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow5Data = {
  text: string;
  href: string;
  label: string;
  text2: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className={cn("list-item relative pl-[2.0625rem] before:content-[''] before:block before:absolute before:top-[16.7px] before:right-[39.3875rem] before:left-0 before:w-2 before:h-2 before:-mt-1 before:bg-primary max-md:before:top-[13.3px] max-md:before:right-[18.55rem] md:max-lg:before:right-[42.7625rem] 2xl:before:right-[39.7rem]", styles.className)}>
      {d.text}
      <a className="inline text-primary cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        {d.label}
      </a>
      {d.text2}
    </li>
  );
}
