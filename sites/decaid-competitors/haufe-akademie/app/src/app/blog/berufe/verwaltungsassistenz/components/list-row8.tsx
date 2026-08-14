import type { ListRow8Styles } from "../_styles";
import { cn } from "../../../../../lib/utils";
export type ListRow8Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow8({ d, styles }: { d: ListRow8Data; styles: ListRow8Styles }) {
  return (
    <li className="box-content list-item">
      <a className="box-content w-6 h-6 flex justify-center items-center text-lg font-medium leading-[1.6875rem] cursor-pointer" data-component="link" href={d.href} target="_blank">
        <i className={cn("box-content block [font-family:FontAwesome] font-normal leading-4.5 before:text-background before:text-lg before:leading-4.5 before:text-left", styles.className)} />
        <span className="box-content w-px h-px block absolute min-w-0 -m-px overflow-hidden">
          {d.label}
        </span>
      </a>
    </li>
  );
}
