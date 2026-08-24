import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow4Data = {
  description: string;
  description2: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className="list-item bg-background shadow-[var(--clr-14)_0px_29px_60px_0px]">
      <a className={cn("block p-[1.5625rem] text-color-013 cursor-pointer", styles.className)} data-component="link" href="/training/content-marketing-unlocked">
        {" "}
        <p className="block mb-5 text-xl font-semibold leading-7.5 max-md:mb-4.5 max-md:text-lg max-md:leading-[1.6875rem]">
          {d.description}
        </p>
        {" "}
        <p className="block">
          {d.description2}
        </p>
        {" "}
      </a>
      {" "}
    </li>
  );
}
