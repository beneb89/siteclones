import type { TextLink6Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type TextLink6Data = {
  label: string;
};
/** A text link. */
export default function TextLink6({ d, styles }: { d: TextLink6Data; styles: TextLink6Styles }) {
  return (
    <a className={cn("min-h-8 border-solid flex min-w-[fit-content] p-3 rounded-lg text-sm leading-[1.0625rem] cursor-pointer", styles.className)} href="/blog/berufe" target="_self">
      {" "}
      <div className="block min-w-0">
        <div className="flex">
          <i className="min-h-9 flex min-w-9 max-w-9 max-h-9 mr-3 rounded-full justify-center items-center text-primary [font-family:'Font_Awesome_Pro'] text-lg font-black leading-4.5 text-center bg-surface" />
          {" "}
          <div className="block min-w-0 my-auto font-medium leading-5">
            {d.label}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </a>
  );
}
