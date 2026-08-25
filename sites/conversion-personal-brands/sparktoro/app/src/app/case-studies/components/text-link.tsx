import type { TextLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
  label2: string;
  label3: string;
};
/** A text link. */
export default function TextLink({ d, styles }: { d: TextLinkData; styles: TextLinkStyles }) {
  return (
    <a className={cn("border-2 border-solid border-border flex relative pt-8.5 pb-7 px-6.5 rounded-[20px] flex-col overflow-hidden text-primary bg-background cursor-pointer before:content-[''] before:block before:absolute before:top-0 before:inset-x-0 before:h-2", styles.className)} data-component="link" href={d.href}>
      {" "}
      <span className="block mb-2.5 text-muted-foreground text-[0.8125rem] font-bold leading-[1.25rem] tracking-[0.52px] uppercase">
        {d.label}
      </span>
      {" "}
      <span className="block mb-3 text-border [font-family:'League_Spartan',_sans-serif] text-[1.3125rem] font-bold leading-[1.5625rem] tracking-[-0.21px]">
        {d.label2}
      </span>
      {" "}
      <span className="block mb-4.5 grow text-color-014 text-[0.9375rem] leading-[1.4375rem]">
        {d.label3}
      </span>
      {" "}
      <span className="block text-color-004 text-sm font-semibold leading-[1.3125rem] uppercase">
        How They Did It →
      </span>
      {" "}
    </a>
  );
}
