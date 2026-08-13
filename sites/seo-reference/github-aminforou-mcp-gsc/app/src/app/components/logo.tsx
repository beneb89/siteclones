import type { ReactNode } from "react";
import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  href: string;
  id: string;
  icon: ReactNode;
  label: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className="flex">
      <a className={cn("h-7.5 flex relative px-2 rounded-md items-center leading-7.5 text-center whitespace-nowrap text-nowrap cursor-pointer hover:bg-color-001 hover:border-b-color-002 focus:border-b-color-002", styles.className)} data-component="link" href={d.href} id={d.id}>
        {" "}
        <svg className={cn("w-auto h-4 block mr-2 align-text-bottom text-muted-foreground focus:outline-clr-14 focus:[outline-style:auto] focus:outline-[5px]", styles.className2)} data-component="icon" aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" version="1.1" data-view-component="true" fill="currentColor">{d.icon}</svg>
        {" "}
        <span className={cn("block before:block before:h-0 before:text-foreground before:text-sm before:font-semibold before:leading-7.5 before:text-center", styles.className3)}>
          {d.label}
        </span>
        {"  "}
      </a>
    </li>
  );
}
