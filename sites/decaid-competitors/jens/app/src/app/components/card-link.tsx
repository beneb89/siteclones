import type { CardLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type CardLinkData = {
  href: string;
  label: string;
  title: string;
  description: string;
  label2: string;
};
/** A linked card. */
export default function CardLink({ d, styles }: { d: CardLinkData; styles: CardLinkStyles }) {
  return (
    <a className="h-[307.5px] min-h-75 flex relative p-9 rounded-[20px] flex-col gap-4 overflow-hidden bg-surface cursor-pointer max-md:h-[291.5px] max-md:p-7 max-md:min-h-0 md:max-lg:h-[26.4375rem]" data-component="link" href={d.href}>
      <div className="w-[350.7px] block absolute top-0 left-0 min-w-0 bg-accent h-1 max-md:w-[20.4375rem] md:max-lg:w-[202.7px]" aria-hidden="true" />
      <div className="flex rounded-full justify-center items-center text-surface [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.8125rem] font-medium leading-[1.25rem] bg-primary h-10 w-10">
        {d.label}
      </div>
      <h3 className="block mt-1 text-2xl font-medium leading-8 tracking-[-0.48px]" data-component="heading">
        {d.title}
      </h3>
      <p className="block flex-1 text-muted-foreground text-[0.9375rem] font-light">
        {d.description}
      </p>
      <span className="flex py-2.5 px-5 rounded-full justify-center items-center self-start gap-2 text-color-002 text-[0.8125rem] font-semibold leading-[1.25rem] bg-primary">
        {d.label2}
        <svg className={cn("w-3 h-3 block overflow-hidden align-middle", styles.className)} data-component="icon" aria-hidden="true" fill="none" height="12" stroke="currentColor" viewBox="0 0 16 16" width="12" strokeWidth="1.5" strokeLinecap="square">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </a>
  );
}
