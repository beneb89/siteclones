import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  href: string;
  label: string;
  label2: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className={cn("flex py-0.5 items-baseline gap-2 cursor-pointer", styles.className)} data-component="link" href={d.href}>
      <span className="flex items-center gap-1 text-color-004 text-[0.8125rem] font-medium leading-[1.25rem]">
        {d.label}
        <svg className="block overflow-hidden align-middle text-color-002 [translate:0px_-1px] h-2.5 w-2.5 focus:outline-clr-17 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 12 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9L9 3M4.5 3H9v4.5" />
        </svg>
      </span>
      <span className="block text-muted-foreground text-[0.6875rem] leading-[1.0625rem] max-md:hidden">
        {d.label2}
      </span>
    </a>
  );
}
