import type { CardLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type CardLinkData = {
  href: string;
  title: string;
  label: string;
};
/** A linked card. */
export default function CardLink({ d, styles }: { d: CardLinkData; styles: CardLinkStyles }) {
  return (
    <a className="flex relative p-7 rounded-[20px] flex-col gap-4 overflow-hidden bg-surface cursor-pointer" data-component="link" href={d.href}>
      <div className="w-[350.7px] block absolute top-0 left-0 min-w-0 bg-accent h-1 max-md:w-[20.4375rem] md:max-lg:w-[202.7px]" aria-hidden="true" />
      <div className="block text-primary [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1.4px] uppercase">
        KI-Marketing
      </div>
      <h3 className="block text-[1.25rem] font-medium tracking-[-0.2px]" data-component="heading">
        {d.title}
      </h3>
      <div className="overflow-hidden text-muted-foreground text-sm font-light leading-[1.3125rem] line-clamp-3">
        {d.label}
      </div>
      <div className={cn("flex items-center gap-2 text-primary text-[0.8125rem] font-medium leading-[1.25rem]", styles.className)}>
        {"Beitrag lesen "}
        <svg className="w-auto h-3 block overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" height="12" stroke="currentColor" viewBox="0 0 16 16" width="12" strokeWidth="1.5" strokeLinecap="square">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </div>
    </a>
  );
}
