import type { ListRow9Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow9Data = {
  text: string;
  href: string;
  rel: string;
  label: string;
};
/** A list row. */
export default function ListRow9({ d, styles }: { d: ListRow9Data; styles: ListRow9Styles }) {
  return (
    <li className={cn("box-content list-item", styles.className)}>
      <strong className="box-content inline font-bold">
        {d.text}
      </strong>
      {" "}
      <a className="box-content inline text-primary underline cursor-pointer" data-component="link" href={d.href} rel={d.rel} target="_blank">
        {d.label}
      </a>
    </li>
  );
}
