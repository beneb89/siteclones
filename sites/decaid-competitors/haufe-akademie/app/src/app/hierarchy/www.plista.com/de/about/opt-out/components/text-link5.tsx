import type { TextLink5Styles } from "../_styles";
import { cn } from "../../../../../../../lib/utils";
export type TextLink5Data = {
  label: string;
};
/** A text link. */
export default function TextLink5({ d, styles }: { d: TextLink5Data; styles: TextLink5Styles }) {
  return (
    <a className={cn("min-h-8 border-solid flex min-w-[fit-content] p-3 rounded-lg text-sm leading-[1.0625rem] cursor-pointer", styles.className)} href="/blog/berufe/verwaltungsassistenz" target="_self">
      {" "}
      <div className="block min-w-0">
        <div className="flex">
          <i className={cn("min-h-9 flex min-w-9 max-w-9 max-h-9 mr-3 rounded-full justify-center items-center text-primary text-lg leading-4.5 text-center bg-surface", styles.className2)} />
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
