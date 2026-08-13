import type { ReactNode } from "react";
import type { Logo4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo4Data = {
  href: string;
  id: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo4({ d, styles }: { d: Logo4Data; styles: Logo4Styles }) {
  return (
    <a className={cn("w-[2.1875rem] h-[2.1875rem] border border-solid border-border flex max-w-full rounded-[9px] justify-center items-center text-color-003 cursor-pointer", styles.className)} data-component="link" href={d.href} id={d.id} rel="noopener noreferrer" target="_blank">
      <div className="w-5 h-5 block before:content-['_'] before:table before:w-0 before:h-0 before:text-color-003 before:text-base before:leading-6 before:tracking-[-0.18px] after:content-['_'] after:table after:w-0 after:h-0 after:text-color-003 after:text-base after:leading-6 after:tracking-[-0.18px] hover:border-color-003 hover:text-color-003 hover:outline-color-003 hover:[text-decoration-color:var(--color-003)] focus:border-color-003 focus:text-color-003 focus:outline-color-003 focus:[text-decoration-color:var(--color-003)]">
        <svg className="w-auto h-5 inline overflow-hidden focus:outline-clr-21 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      </div>
    </a>
  );
}
