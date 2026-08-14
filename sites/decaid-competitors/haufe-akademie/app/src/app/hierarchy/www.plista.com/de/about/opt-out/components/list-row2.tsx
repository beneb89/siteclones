import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../../../../../lib/utils";
export type ListRow2Data = {
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("hidden 2xl:border-t 2xl:border-solid 2xl:list-item", styles.className)}>
      <a className="hidden 2xl:flex 2xl:py-3 2xl:justify-between 2xl:items-center 2xl:text-surface 2xl:cursor-pointer" href="/1685">
        {d.label}
        <i className="hidden 2xl:block 2xl:[font-family:'Font_Awesome_Pro'] 2xl:font-black 2xl:leading-4 2xl:text-center" />
      </a>
    </li>
  );
}
