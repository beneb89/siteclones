import type { TextLink2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLink2Data = {
  href: string;
  label: string;
  label2: string;
  title: string;
  description: string;
  label3: string;
};
/** A text link. */
export default function TextLink2({ d, styles }: { d: TextLink2Data; styles: TextLink2Styles }) {
  return (
    <a className={cn("h-[342.9px] min-h-80 border-t-[3px] border-solid border-t-primary flex relative py-9 px-8 flex-col cursor-pointer md:max-lg:h-[32.325rem] 2xl:hidden", styles.className)} data-component="link" href={d.href}>
      {" "}
      <div className={cn("block mb-1 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.98px] max-md:leading-[1.125rem] 2xl:hidden", styles.className2)}>
        {d.label}
      </div>
      {" "}
      <div className={cn("block mb-4.5 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.4px] uppercase max-md:leading-4 2xl:hidden", styles.className3)}>
        {d.label2}
      </div>
      {" "}
      <h3 className={cn("block mb-3 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.375rem] font-medium leading-[1.625rem] tracking-[-0.22px] 2xl:hidden", styles.className4)} data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className={cn("block mb-5 grow text-[0.9375rem] leading-[1.4375rem] 2xl:hidden", styles.className5)}>
        {d.description}
      </p>
      {" "}
      <span className={cn("block [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.6px] uppercase max-md:leading-4 2xl:hidden", styles.className6)}>
        {d.label3}
      </span>
      {" "}
    </a>
  );
}
