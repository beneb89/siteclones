import type { TextLink12Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink12Data = {
  label: string;
  label2: string;
};
/** A text link. */
export default function TextLink12({ d, styles }: { d: TextLink12Data; styles: TextLink12Styles }) {
  return (
    <a className={cn("min-h-8 border-solid flex min-w-[fit-content] p-3 rounded-lg text-sm leading-[1.0625rem] cursor-pointer", styles.className)} href="/blog/berufe/verwaltungsassistenz" target="_self">
      {" "}
      <i className="min-h-9 flex min-w-9 max-w-9 max-h-9 mr-3 rounded-full justify-center items-center text-primary text-[1.125rem] italic bg-clr-1" />
      {" "}
      <div className="block min-w-0">
        <div className="flex">
          <div className="block min-w-0 my-auto font-medium leading-5">
            {d.label}
          </div>
          {" "}
        </div>
        {" "}
        <div className="block mt-1 text-color-003 leading-5">
          {d.label2}
        </div>
        {" "}
      </div>
      {" "}
    </a>
  );
}
