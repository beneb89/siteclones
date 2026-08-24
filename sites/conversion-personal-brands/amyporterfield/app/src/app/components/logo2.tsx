import type { ReactNode } from "react";
import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  href: string;
  target: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <a className={cn("w-7 h-[1.5625rem] block absolute cursor-pointer max-md:w-[1.6875rem] max-md:h-[1.6875rem] max-md:left-68.5 max-md:origin-[13.5px_13.5px]", styles.className)} data-component="link" href={d.href} target={d.target}>
      <div className="box-content h-full block">
        <svg className="box-content w-7 h-[1.5625rem] inline overflow-hidden align-top max-md:w-[1.6875rem] max-md:h-[1.6875rem]" data-component="icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">{d.icon}</svg>
      </div>
    </a>
  );
}
