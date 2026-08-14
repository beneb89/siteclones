import type { ListRow3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow3Data = {
  text: string;
  text2: string;
  text3: string;
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow3({ d, styles }: { d: ListRow3Data; styles: ListRow3Styles }) {
  return (
    <li className={cn("box-content list-item", styles.className)}>
      {d.text}
      <em className="box-content inline italic">
        {d.text2}
      </em>
      {d.text3}
      <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank">
        {d.label}
      </a>
    </li>
  );
}
