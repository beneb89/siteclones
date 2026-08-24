import type { ListRow6Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow6Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow6({ d, styles }: { d: ListRow6Data; styles: ListRow6Styles }) {
  return (
    <li className={cn("list-item relative pl-7 before:content-[''] before:block before:absolute before:top-2 before:right-100 before:left-0 before:w-2 before:h-2 before:bg-primary max-md:before:right-[18.5625rem] md:max-lg:before:right-157.5", styles.className)}>
      <a className="inline-block cursor-pointer" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
