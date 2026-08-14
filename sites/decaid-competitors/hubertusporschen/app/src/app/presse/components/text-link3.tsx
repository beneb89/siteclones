import type { TextLink3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink3Data = {
  href: string;
  label: string;
  title: string;
  description: string;
};
/** A text link. */
export default function TextLink3({ d, styles }: { d: TextLink3Data; styles: TextLink3Styles }) {
  return (
    <a className={cn("border-l-[3px] border-solid border-l-primary block py-6 px-[1.8625rem] bg-background cursor-pointer max-md:px-7 2xl:hidden", styles.className)} data-component="link" href={d.href}>
      {" "}
      <div className="block mb-[0.4rem] text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:mb-1.5 max-md:leading-4 2xl:hidden">
        {d.label}
      </div>
      {" "}
      <h3 className="block mb-2 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-xl font-medium leading-[1.5625rem] tracking-[-0.2px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-sm leading-[1.375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </a>
  );
}
