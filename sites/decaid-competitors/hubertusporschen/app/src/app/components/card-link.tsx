import type { CardLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type CardLinkData = {
  alt: string;
  imgSrc: string;
  label: string;
  title: string;
  description: string;
  label2: string;
};
/** A linked card. */
export default function CardLink({ d, styles }: { d: CardLinkData; styles: CardLinkStyles }) {
  return (
    <a className="flex flex-col overflow-hidden bg-surface-2 cursor-pointer 2xl:hidden" data-component="link" href="/blog/7-teure-fehler-von-matthias-schranner">
      {" "}
      <div className="border-b border-solid border-b-border block overflow-hidden aspect-[8/5] 2xl:hidden" style={{ backgroundImage: "linear-gradient(to right bottom in oklab, var(--clr-5) 0%, var(--clr-6) 100%)" }}>
        <img className="w-full block max-w-full overflow-clip object-cover aspect-[auto_600/375] align-middle h-full 2xl:hidden" data-component="image" alt={d.alt} height="375" src={d.imgSrc} width="600" />
        {" "}
      </div>
      {" "}
      <div className="flex pt-6 pb-7 px-7 flex-col flex-1 2xl:hidden">
        <div className="block mb-3 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.8px] uppercase max-md:leading-4 2xl:hidden">
          {d.label}
        </div>
        {" "}
        <h3 className="block mb-3 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.3125rem] font-medium leading-[1.6875rem] tracking-[-0.21px] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="mb-4 overflow-hidden text-muted-foreground text-[0.9375rem] leading-[1.4375rem] line-clamp-3 2xl:hidden">
          {d.description}
        </p>
        {" "}
        <div className={cn("block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.4px] max-md:leading-4 2xl:hidden", styles.className)}>
          {d.label2}
        </div>
        {" "}
      </div>
      {" "}
    </a>
  );
}
