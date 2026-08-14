import type { ListRow5Styles } from "../_styles";
import { cn } from "../../../../../../../lib/utils";
export type ListRow5Data = {
  href: string;
  label2: string;
  text: string;
  rel?: string;
  target?: string;
  label?: string;
};
/** A list row. */
export default function ListRow5({ d, styles }: { d: ListRow5Data; styles: ListRow5Styles }) {
  return (
    <li className="list-item relative mb-1.5 pl-9.5 leading-[1.5rem] max-lg:pl-7.5 max-lg:leading-[1.5625rem] 2xl:leading-[1.5625rem]">
      <a className={cn("inline-block relative -mr-1 -ml-11 py-1 pr-1.5 pl-8.5 rounded-[3px] leading-[1.375rem] underline cursor-pointer max-lg:-ml-9 max-lg:leading-[1.4375rem] 2xl:leading-[1.4375rem] before:block before:absolute before:top-0.5 before:left-[0.1875rem] before:w-6 before:h-6 before:text-foreground before:text-2xl before:leading-6 before: before:origin-[12px_12px]", styles.className)} data-component="link" href={d.href} rel={d.rel} target={d.target} title={d.label}>
        {d.label2}
      </a>
      {" "}
      <span className="hidden">
        {d.text}
      </span>
      {" "}
    </li>
  );
}
