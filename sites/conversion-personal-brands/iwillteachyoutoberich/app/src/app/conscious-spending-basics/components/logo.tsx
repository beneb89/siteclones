import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <a className={cn("w-7 h-7 border border-solid border-foreground flex relative p-[3.3px] rounded-[50%] justify-center items-center overflow-hidden cursor-pointer max-lg:w-8.5 max-lg:h-8.5 max-lg:p-[0.3125rem] 2xl:w-8.5 2xl:h-8.5 2xl:p-[0.3125rem]", styles.className)} data-component="link" href={d.href} target="_blank">
      {" "}
      <svg className="w-[1.1875rem] h-[1.1875rem] flex max-w-full max-h-full justify-center items-center leading-0 max-lg:w-5.5 max-lg:h-5.5 2xl:w-5.5 2xl:h-5.5" data-component="icon" fill="currentColor">{d.icon}</svg>
      {" "}
    </a>
  );
}
