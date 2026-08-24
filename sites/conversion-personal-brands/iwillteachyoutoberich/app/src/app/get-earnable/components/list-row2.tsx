import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("flex relative items-center", styles.className)}>
      <span className="flex relative mt-2.5 pr-5 text-left">
        {" "}
        <i className="w-[12.5px] block [font-family:'Font_Awesome_5_Free'] text-[0.625rem] font-black leading-2.5 before:content-[''] before:text-foreground before:text-[0.625rem] before:font-black before:leading-2.5 before:text-left" aria-hidden="true" />
        {" "}
      </span>
      {" "}
      <span className="block pl-[0.3125rem] self-center">
        {d.text}
      </span>
      {" "}
    </li>
  );
}
