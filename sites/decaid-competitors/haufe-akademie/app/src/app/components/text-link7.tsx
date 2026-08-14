import type { TextLink7Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink7Data = {
  label: string;
  label2: string;
};
/** A text link. */
export default function TextLink7({ d, styles }: { d: TextLink7Data; styles: TextLink7Styles }) {
  return (
    <a className={cn("min-h-8 border-solid flex min-w-[fit-content] p-3 rounded-lg text-sm leading-[1.0625rem] cursor-pointer", styles.className)} href="/blog/berufe" target="_self">
      {" "}
      <i className="min-h-9 flex min-w-9 max-w-9 max-h-9 mr-3 rounded-full justify-center items-center text-primary [font-family:'Font_Awesome_Pro'] text-lg font-black leading-4.5 text-center bg-surface" />
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
