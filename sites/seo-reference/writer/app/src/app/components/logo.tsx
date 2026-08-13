import type { ReactNode } from "react";
export type LogoData = {
  ariaLabel: string;
  href: string;
  label: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <a className="w-10 h-10 block float-left my-0.5 mx-[0.4375rem] rounded-[50%] justify-center items-center align-middle text-[2rem] leading-[2.375rem] cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="nofollow noopener" target="_blank" title={d.label}>
      <span className="box-content w-10 h-10 block float-left rounded-[999px] overflow-hidden align-middle text-base leading-[1.1875rem] bg-surface max-md:text-xl max-md:leading-8 hover:bg-foreground">
        <svg className="w-auto h-10 block rounded-[999px] overflow-hidden transform-[matrix(0.65,0,0,0.65,0,0)] origin-[20px_20px] mx-auto focus:outline-clr-10 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" height="100%" viewBox="0 0 32 32" width="100%" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">{d.icon}</svg>
      </span>
    </a>
  );
}
