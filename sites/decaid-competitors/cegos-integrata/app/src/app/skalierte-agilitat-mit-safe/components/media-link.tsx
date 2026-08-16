import type { ReactNode } from "react";
import type { MediaLinkStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaLinkData = {
  href: string;
  label: string;
  viewBox: string;
  icon: ReactNode;
};
/** A linked media tile. */
export default function MediaLink({ d, styles }: { d: MediaLinkData; styles: MediaLinkStyles }) {
  return (
    <a className="flex rounded-full justify-center items-center text-primary bg-foreground cursor-pointer h-8 w-8 aspect-square" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
      <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
        {d.label}
      </span>
      {" "}
      <svg className={cn("flex overflow-hidden w-3.5", styles.className)} data-component="icon" aria-hidden="true" viewBox={d.viewBox} focusable="false" fill="currentColor">{d.icon}</svg>
      {" "}
    </a>
  );
}
