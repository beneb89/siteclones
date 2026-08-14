import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type ListRow2Data = {
  text: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="block align-top">
      <label className={cn("inline-block relative py-[7.5px] pr-[1.5625rem] pl-[2.8125rem] cursor-default 2xl:py-[0.5625rem] 2xl:pr-7.5 2xl:pl-13.5 before:content-[''] before:block before:absolute before:top-[7.5px] before:bottom-[9.5px] before:left-[1.5625rem] before:w-[0.8125rem] before:h-[0.8125rem] before:text-border before:text-[0.8125rem] before:leading-[0.8125rem] 2xl:before:top-[0.5625rem] 2xl:before:bottom-[0.7125rem] 2xl:before:left-7.5 2xl:before:w-4 2xl:before:h-[0.975rem] 2xl:before:text-base 2xl:before:leading-[1rem]", styles.className)}>
        {d.text}
      </label>
      {" "}
    </li>
  );
}
