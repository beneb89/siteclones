import type { CardLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type CardLinkData = {
  alt: string;
  imgSrc: string;
  label: string;
  title: string;
  description: string;
  label2: string;
  label3: string;
};
/** A linked card. */
export default function CardLink({ d, styles }: { d: CardLinkData; styles: CardLinkStyles }) {
  return (
    <a className={cn("border-r border-solid border-r-border border-b border-b-border flex bg-color-002 cursor-pointer", styles.className)} data-component="link" href="/blog/7-teure-fehler-von-matthias-schranner">
      {" "}
      <div className={cn("block overflow-hidden aspect-video 2xl:hidden", styles.className2)}>
        <img className="w-full block max-w-full overflow-clip object-cover aspect-[auto_800/450] align-middle h-full 2xl:hidden" data-component="image" alt={d.alt} height="450" src={d.imgSrc} width="800" />
        {" "}
      </div>
      {" "}
      <div className={cn("flex p-[1.8625rem] flex-col gap-3 max-md:p-7 2xl:hidden", styles.className3)}>
        <span className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden">
          {d.label}
        </span>
        {" "}
        <h3 className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.3125rem] font-semibold leading-[1.625rem] tracking-[-0.31px] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="overflow-hidden text-muted-foreground text-sm leading-[1.375rem] line-clamp-3 2xl:hidden">
          {d.description}
        </p>
        {" "}
        <div className={cn("border-t border-solid border-t-border flex pt-[14.9px] justify-between text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[1.0625rem] tracking-[1.4px] uppercase max-md:pt-3.5 max-md:leading-4 2xl:hidden", styles.className4)}>
          <span className="block 2xl:hidden">
            {d.label2}
          </span>
          {" "}
          <span className="block 2xl:hidden">
            {d.label3}
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </a>
  );
}
