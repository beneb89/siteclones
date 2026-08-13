import type { ReactNode } from "react";
import type { MediaLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaLinkData = {
  label: string;
  icon: ReactNode;
  label2: string;
};
/** A linked media tile. */
export default function MediaLink({ d, styles }: { d: MediaLinkData; styles: MediaLinkStyles }) {
  return (
    <button className={cn("border border-solid border-border flex relative p-2 rounded-md items-center gap-2 text-muted-foreground font-medium leading-[1.3125rem] text-center whitespace-nowrap text-nowrap bg-border cursor-pointer max-md:p-1.5 max-lg:text-[0.8125rem] max-lg:leading-[1.25rem] md:max-lg:p-[0.4rem] after:block after:absolute after:-top-9.5 after:bottom-11 after:left-0 after:z-10 after:h-7.5 after:py-1.5 after:px-3 after:text-background after:text-xs after:font-medium after:leading-4.5 after:text-center after:bg-foreground after:opacity-0 after:rounded-tl-sm max-lg:after:hidden max-lg:after:bottom-[calc(100%_+_8px)] max-lg:after:top-auto max-lg:after:right-auto max-lg:after:w-auto max-lg:after:h-auto hover:border-color-001 hover:text-foreground hover:outline-foreground hover:[text-decoration-color:var(--foreground)]", styles.className)} data-component="button" title={d.label}>
      <svg className="w-auto h-5 block shrink-0 overflow-hidden max-md:h-4 md:max-lg:h-4.5 focus:outline-clr-17 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      {" "}
      <span className="hidden min-w-0">
        {d.label2}
      </span>
      {" "}
    </button>
  );
}
