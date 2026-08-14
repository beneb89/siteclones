import type { TextLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink2Data = {
  href: string;
  label: string;
  title: string;
  label2: string;
  description: string;
};
/** A text link. */
export default function TextLink2({ d, styles }: { d: TextLink2Data; styles: TextLink2Styles }) {
  return (
    <a className={cn("border-l-[3px] border-solid block p-[1.8625rem] bg-background cursor-pointer max-md:p-7 2xl:hidden", styles.className)} data-component="link" href={d.href}>
      {" "}
      <div className={cn("block mb-2 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden", styles.className2)}>
        {d.label}
      </div>
      {" "}
      <h3 className="block mb-2 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-medium leading-[1.75rem] tracking-[-0.22px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <div className="block mb-3 text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4 2xl:hidden">
        {d.label2}
      </div>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </a>
  );
}
