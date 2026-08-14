import type { CardLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type CardLinkData = {
  href: string;
  label: string;
  title: string;
  description: string;
};
/** A linked card. */
export default function CardLink({ d, styles }: { d: CardLinkData; styles: CardLinkStyles }) {
  return (
    <a className="flex relative p-8 rounded-[20px] flex-col gap-4 overflow-hidden bg-surface cursor-pointer" data-component="link" href={d.href}>
      <div className="w-[313.3px] block absolute top-0 left-0 min-w-0 bg-accent h-1 max-md:w-[20.4375rem] md:max-lg:w-[202.7px]" aria-hidden="true" />
      <div className="block text-primary [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[1.54px] uppercase">
        {d.label}
      </div>
      <h3 className="block text-[1.375rem] font-medium leading-[2.0625rem] tracking-[-0.44px]" data-component="heading">
        {d.title}
      </h3>
      <p className="block text-muted-foreground text-[0.9375rem] font-light">
        {d.description}
      </p>
      <span className={cn("flex py-2.5 px-5 rounded-full justify-center items-center self-start gap-2 text-color-002 text-[0.8125rem] font-semibold leading-[1.25rem] bg-primary", styles.className)}>
        {"Format ansehen "}
        <svg className="w-3 h-3 block overflow-hidden align-middle md:max-lg:w-[0.5625rem]" data-component="icon" aria-hidden="true" fill="none" height="12" stroke="currentColor" viewBox="0 0 16 16" width="12" strokeWidth="1.5" strokeLinecap="square">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </a>
  );
}
