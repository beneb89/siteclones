import type { Tile3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile3Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A content tile. */
export default function Tile3({ d, styles }: { d: Tile3Data; styles: Tile3Styles }) {
  return (
    <article className="w-[24.125rem] border border-solid border-border flex relative min-w-80 py-7.5 px-7 rounded-2xl flex-col shrink-0 basis-[calc(33.333%_-_14px)] gap-4.5 max-md:w-[17.8rem] max-lg:min-w-65 max-lg:py-6.5 max-lg:px-6 max-lg:basis-[85%] md:max-lg:w-[38.675rem]" style={{ backgroundImage: "linear-gradient(var(--color-004) 0%, var(--color-010) 100%)" }}>
      <div className="h-6 block opacity-60 text-primary [font-family:Georgia,_serif] text-5xl leading-[1.8125rem]">
        “
      </div>
      {" "}
      <blockquote className="block flex-1 text-base leading-6 before:content-[''] after:content-['']">
        {d.text}
      </blockquote>
      {" "}
      <div className="border-t border-solid border-t-border flex pt-4.5 items-center gap-3.5">
        <div className="w-11 h-11 border border-solid border-color-003 flex rounded-[50%] justify-center items-center shrink-0 text-primary text-[0.8125rem] font-semibold leading-[1.3125rem] tracking-[0.26px] bg-color-005">
          {d.text2}
        </div>
        {" "}
        <div className="block">
          <strong className={cn("block text-sm font-semibold leading-[1.0625rem]", styles.className)}>
            {d.text3}
          </strong>
          {" "}
          <span className="inline text-muted text-xs leading-[1.1875rem]">
            {d.text4}
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </article>
  );
}
