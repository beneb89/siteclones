import type { ReactNode } from "react";
export type MediaLinkData = {
  href: string;
  viewBox: string;
  icon: ReactNode;
  label: string;
};
/** A linked media tile. */
export default function MediaLink({ d }: { d: MediaLinkData }) {
  return (
    <a className="block cursor-pointer" data-component="link" href={d.href} target="_blank">
      <svg className="block overflow-hidden align-middle h-5 w-5 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="currentColor" height="1em" stroke="currentColor" viewBox={d.viewBox} width="1em" xmlns="http://www.w3.org/2000/svg" strokeWidth="0">{d.icon}</svg>
      <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
        {d.label}
      </span>
    </a>
  );
}
