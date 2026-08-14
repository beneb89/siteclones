import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
  title: string;
  description: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className="border border-solid border-border flex p-5 rounded-2xl items-start gap-4 bg-surface cursor-pointer" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
      <div className="block text-accent [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1.4px] uppercase">
        {d.label}
      </div>
      <div className={cn("block flex-1", styles.className)}>
        <h3 className="block font-medium tracking-[-0.16px]" data-component="heading">
          {d.title}
        </h3>
        <p className="block mt-1 text-muted-foreground text-sm font-light leading-[1.3125rem]">
          {d.description}
        </p>
        <span className="inline-block mt-2 text-primary [font-family:'IBM_Plex_Mono',_'IBM_Plex_Mono_Fallback',_ui-monospace,_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1.4px] uppercase">
          Quelle ansehen →
        </span>
      </div>
    </a>
  );
}
