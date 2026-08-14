import type { TextLink13Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type TextLink13Data = {
  href: string;
  label: string;
  label2: string;
};
/** A text link. */
export default function TextLink13({ d, styles }: { d: TextLink13Data; styles: TextLink13Styles }) {
  return (
    <a className="min-h-8 border-2 border-solid border-clr-1 flex min-w-[fit-content] p-3 rounded-lg text-sm leading-[1.0625rem] cursor-pointer" href={d.href} target="_self">
      {" "}
      <i className={cn("min-h-9 flex min-w-9 max-w-9 max-h-9 mr-3 rounded-full justify-center items-center text-primary", styles.className)} />
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
