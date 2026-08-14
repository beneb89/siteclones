import type { TextLink3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink3Data = {
  label: string;
  title: string;
  description: string;
  label2: string;
};
/** A text link. */
export default function TextLink3({ d, styles }: { d: TextLink3Data; styles: TextLink3Styles }) {
  return (
    <a className={cn("min-h-75 border-r border-solid border-r-border border-b border-b-border flex relative p-8 flex-col gap-4 bg-color-002 cursor-pointer max-md:h-[20.8375rem] 2xl:hidden", styles.className)} data-component="link" href="/keynote-speaker/ki-fuer-entscheider">
      {" "}
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden">
        {d.label}
      </div>
      {" "}
      <h3 className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.4375rem] font-semibold leading-[1.6875rem] tracking-[-0.46px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <div className={cn("border-t border-solid border-t-border flex pt-[14.9px] justify-between text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.6px] uppercase max-md:pt-3.5 max-md:leading-4 2xl:hidden", styles.className2)}>
        <span className="block 2xl:hidden">
          {d.label2}
        </span>
        <b className="block text-primary font-semibold 2xl:hidden">
          Zum Thema →
        </b>
      </div>
      {" "}
    </a>
  );
}
