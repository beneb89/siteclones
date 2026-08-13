import type { ReactNode } from "react";
export type Logo2Data = {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <a className="h-8 block max-w-full p-1 justify-center items-center text-color-002 cursor-pointer hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)]" data-component="link" aria-label={d.ariaLabel} href={d.href}>
      <div className="w-6 h-6 flex justify-center items-center">
        <div className="flex justify-center items-center before:content-['_'] before:table before:w-0 before:h-0 before:text-color-002 before:text-base before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-color-002 after:text-base after:leading-6 after:tracking-[-0.18px]">
          <svg className="w-auto h-6 block overflow-hidden focus:outline-clr-21 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
        </div>
      </div>
    </a>
  );
}
