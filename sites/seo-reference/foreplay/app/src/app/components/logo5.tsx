import type { ReactNode } from "react";
export type Logo5Data = {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo5({ d }: { d: Logo5Data }) {
  return (
    <li className="w-7 h-7 list-item opacity-68">
      <a className="h-7 inline-block max-w-full justify-center items-center text-primary cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} target="_blank">
        <div className="w-7 h-7 block before:content-['_'] before:table before:w-0 before:h-0 before:text-primary before:text-base before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-primary after:text-base after:leading-6 after:tracking-[-0.18px]">
          <svg className="w-auto h-7 inline overflow-hidden focus:outline-clr-21 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
        </div>
      </a>
    </li>
  );
}
