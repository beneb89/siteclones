import type { TextLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink2Data = {
  label: string;
  title: string;
  description: string;
};
/** A text link. */
export default function TextLink2({ d, styles }: { d: TextLink2Data; styles: TextLink2Styles }) {
  return (
    <a className={cn("min-h-70 border-t-[3px] border-solid border-t-primary flex py-8 px-[1.8625rem] flex-col gap-[14.9px] bg-surface-2 cursor-pointer max-md:px-7 max-md:gap-3.5 2xl:hidden", styles.className)} data-component="link" href="/branchen/banken-versicherungen">
      {" "}
      <span className="block text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden">
        {d.label}
      </span>
      {" "}
      <h3 className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-semibold leading-[1.625rem] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block grow text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <span className="border-t border-solid border-t-border block pt-3 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4 2xl:hidden">
        Zur Branche
      </span>
      {" "}
    </a>
  );
}
