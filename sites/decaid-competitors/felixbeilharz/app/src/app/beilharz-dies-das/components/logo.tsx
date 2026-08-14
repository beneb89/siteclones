import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = {
  href: string;
  viewBox: string;
  dataid: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="block max-w-[33.3333%] pl-[0.9375rem] grow max-lg:max-w-full max-lg:shrink-0 max-md:basis-[390px] md:max-lg:basis-[250px]">
      <div className="flex relative flex-col">
        <a className="h-25 block text-color-007 cursor-pointer" data-component="link" href={d.href} target="_blank">
          <div className="box-content table my-5 mx-auto text-6xl leading-0 text-center">
            <svg className={cn("box-content h-15 inline-block overflow-hidden align-middle text-color-002 leading-15", styles.className)} data-component="image" viewBox={d.viewBox} data-id={d.dataid} data-name="" fill="currentColor">{d.icon}</svg>
          </div>
        </a>
      </div>
    </div>
  );
}
