import type { TextLink2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink2Data = {
  label: string;
  label2: string;
  title: string;
  description: string;
};
/** A text link. */
export default function TextLink2({ d, styles }: { d: TextLink2Data; styles: TextLink2Styles }) {
  return (
    <a className={cn("min-h-80 border-t-[3px] border-solid border-t-primary flex relative py-9 px-8 flex-col bg-surface-2 cursor-pointer max-md:mt-5 2xl:hidden", styles.className)} data-component="link" href="/keynote-speaker/ki-fuer-entscheider">
      {" "}
      <div className="block mb-1 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden">
        {d.label}
      </div>
      {" "}
      <div className="block mb-4.5 text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4 2xl:hidden">
        {d.label2}
      </div>
      {" "}
      <h3 className="block mb-3 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-medium leading-[1.625rem] tracking-[-0.22px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block mb-5 grow text-muted-foreground text-[0.9375rem] leading-[1.4375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <span className="block text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.6px] uppercase max-md:leading-4 2xl:hidden">
        Zum Thema →
      </span>
      {" "}
    </a>
  );
}
