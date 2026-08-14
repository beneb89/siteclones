import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
  title: string;
  label2: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("h-[361.5px] min-h-45 flex p-6 rounded-2xl flex-col gap-2.5 bg-surface cursor-pointer max-md:min-h-40", styles.className)} data-component="link" href={d.href}>
      <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1.4px] uppercase">
        {d.label}
      </div>
      <h3 className="block text-[1.375rem] font-medium leading-[2.0625rem] tracking-[-0.44px]" data-component="heading">
        {d.title}
      </h3>
      <div className="block flex-1 text-muted-foreground text-sm font-light leading-[1.3125rem]">
        {d.label2}
      </div>
      <div className="block text-primary text-[0.8125rem] font-medium leading-[1.25rem]">
        Öffnen →
      </div>
    </a>
  );
}
