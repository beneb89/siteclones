import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  href: string;
  viewBox: string;
  icon: ReactNode;
  description: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="block before:content-['_'] before:table before:w-0 before:h-0 before:text-color-001 before:text-base before:leading-6 after:content-['_'] after:table after:w-0 after:h-0 after:text-color-001 after:text-base after:leading-6">
      <a className={cn("flex justify-center items-center gap-3 cursor-pointer", styles.className)} data-component="link" href={d.href} target="_blank">
        <svg className="w-auto h-6 flex justify-center items-center overflow-hidden align-middle focus:outline-clr-17 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" height="100%" role="img" viewBox={d.viewBox} width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">{d.icon}</svg>
        <p className="block text-sm leading-[1.3125rem]">
          {d.description}
        </p>
      </a>
    </div>
  );
}
