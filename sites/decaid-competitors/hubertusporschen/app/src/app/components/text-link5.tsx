import type { TextLink5Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink5Data = {
  href: string;
  label: string;
  title: string;
  description: string;
  label2: string;
};
/** A text link. */
export default function TextLink5({ d, styles }: { d: TextLink5Data; styles: TextLink5Styles }) {
  return (
    <a className="border-l-2 border-solid border-l-accent flex flex-col overflow-hidden bg-surface-2 cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
      {" "}
      <div className="h-full flex p-7 flex-col flex-1 2xl:hidden">
        <div className="block mb-3 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden">
          {d.label}
        </div>
        {" "}
        <h4 className="block mb-3 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-medium leading-6.5 tracking-[-0.2px] 2xl:hidden" data-component="heading">
          {d.title}
        </h4>
        {" "}
        <p className="block mb-5 text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
          {d.description}
        </p>
        {" "}
        <div className={cn("block text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden", styles.className)}>
          {d.label2}
        </div>
        {" "}
      </div>
      {" "}
    </a>
  );
}
