"use client";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  value: string;
  text: string;
  text2: string;
};
/** A logo. */
export default function Logo({ d, styles, checked = true, onToggle }: { d: LogoData; styles: LogoStyles; checked?: boolean; onToggle?: () => void }) {
  return (
    <label className={cn("h-13.5 min-h-11 border border-solid flex py-2 px-3.5 rounded-xl items-center gap-2 cursor-pointer", checked ? "border-primary bg-surface" : "border-border bg-background")}>
      <input className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)] cursor-default" data-component="input" type="checkbox" value={d.value} checked={checked} onChange={onToggle} readOnly={!onToggle} />
      <span className={cn("border border-solid flex rounded-sm justify-center items-center h-4 w-4", checked ? "border-primary text-color-001 bg-primary" : "border-border bg-background")} aria-hidden="true">
        <svg className={cn("block overflow-hidden align-middle h-3 w-3 focus:outline-clr-18 focus:[outline-style:auto] focus:outline-[5px]", checked ? "" : "invisible")} data-component="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="block leading-5">
        <span className={cn("block text-[0.875rem] font-medium", checked ? "text-primary" : "text-foreground", styles.className)}>
          {d.text}
        </span>
        <span className="block text-muted-foreground text-xs leading-4">
          {d.text2}
        </span>
      </span>
    </label>
  );
}
