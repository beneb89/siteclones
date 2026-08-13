import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  text: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("border-b border-solid border-b-border grid gap-1 cursor-pointer grid-cols-1", styles.className)} data-component="link" href={d.href}>
      <strong className="overflow-hidden text-sm font-medium leading-[1.1875rem] tracking-[-0.13px] line-clamp-2">
        {d.text}
      </strong>
      {" "}
      <span className="block text-muted [font-family:'IBM_Plex_Mono',_SFMono-Regular,_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.8125rem] tracking-[1px] uppercase">
        {d.label}
      </span>
    </a>
  );
}
