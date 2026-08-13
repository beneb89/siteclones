import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className="flex justify-start items-center flex-1 gap-3 [list-style-type:none] pointer-events-none">
      <a className={cn("h-16 flex max-w-full p-2 justify-start items-center flex-1 gap-3 cursor-pointer pointer-events-none", styles.className)} data-component="link" href={d.href}>
        <div className="w-12 h-12 border border-solid border-border flex rounded-xl justify-center items-center pointer-events-none">
          <div className="w-6 h-6 flex justify-center items-center pointer-events-none before:content-['_'] before:table before:w-0 before:h-0 before:text-color-001 before:text-base before:leading-6 before:tracking-[-0.18px] before:text-left max-lg:before:w-auto max-lg:before:h-auto after:content-['_'] after:table after:w-0 after:h-0 after:text-color-001 after:text-base after:leading-6 after:tracking-[-0.18px] after:text-left max-lg:after:w-auto max-lg:after:h-auto">
            <svg className="w-auto h-6 block overflow-hidden pointer-events-none focus:outline-clr-21 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
          </div>
        </div>
        <div className="block items-center text-color-002 pointer-events-none">
          <div className="flex justify-start items-center gap-[0.3125rem] whitespace-nowrap text-nowrap pointer-events-none">
            <div className="block text-sm font-medium leading-5 tracking-[-0.09px] pointer-events-none">
              {d.label}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
