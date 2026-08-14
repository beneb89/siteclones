import type { TextLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink2Data = {
  href: string;
  label: string;
  title: string;
  description: string;
};
/** A text link. */
export default function TextLink2({ d, styles }: { d: TextLink2Data; styles: TextLink2Styles }) {
  return (
    <a className={cn("border-t-[3px] border-solid border-t-accent block p-[1.8625rem] bg-background cursor-pointer max-md:p-7 2xl:hidden", styles.className)} data-component="link" href={d.href}>
      {" "}
      <div className="block mb-2 text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden">
        {d.label}
      </div>
      {" "}
      <h3 className="block mb-3 text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.1875rem] font-medium leading-[1.5rem] tracking-[-0.19px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block mb-3 text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <div className="block text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] leading-[1.1875rem] max-md:leading-[1.125rem] 2xl:hidden">
        Mehr erfahren →
      </div>
      {" "}
    </a>
  );
}
