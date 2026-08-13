import type { ReactNode } from "react";
export type MediaTile3Data = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile3({ d }: { d: MediaTile3Data }) {
  return (
    <div className="block mt-2">
      <a className="inline text-muted-foreground cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)]" data-component="link" href={d.href}>
        <svg className="w-auto h-4 inline-block mr-2 align-text-bottom focus:outline-clr-13 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" focusable="false" display="inline-block" overflow="visible">{d.icon}</svg>
        <span className="inline">
          {d.label}
        </span>
      </a>
    </div>
  );
}
