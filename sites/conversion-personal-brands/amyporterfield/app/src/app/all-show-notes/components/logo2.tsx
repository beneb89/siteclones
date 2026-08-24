import type { ReactNode } from "react";
import type { Logo2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo2Data = {
  href: string;
  viewBox: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <a className={cn("w-[2.1875rem] h-[1.8125rem] block absolute left-196 transform-[matrix(1,0,0,1,40,0)] origin-[17.5px_14.5px] cursor-pointer max-md:w-[1.5625rem] max-md:h-[1.5625rem] max-md:origin-[12.5px_12.5px] 2xl:transform-[matrix(1,0,0,1,360,0)]", styles.className)} data-component="link" href={d.href} target="_blank">
      <div className="box-content h-full block">
        <svg className="box-content w-[2.1875rem] h-[1.8125rem] inline overflow-hidden align-top max-md:w-[1.5625rem] max-md:h-[1.5625rem]" data-component="icon" viewBox={d.viewBox} xmlns="http://www.w3.org/2000/svg" fill="currentColor">{d.icon}</svg>
      </div>
    </a>
  );
}
