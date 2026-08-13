import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  href: string;
  label: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className={cn("list-item pointer-events-none", styles.className)}>
      <a className="w-full h-12.5 min-h-12.5 inline-flex py-[0.3125rem] px-5 items-center gap-2.5 text-primary text-lg font-medium leading-[1.4375rem] cursor-pointer pointer-events-none hover:border-color-001 hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)] focus:border-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="link" href={d.href}>
        <svg className="w-[0.4375rem] h-3.5 block shrink-0 overflow-hidden pointer-events-none max-lg:hidden hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] focus:border-primary focus:text-primary focus:outline-primary focus:[text-decoration-color:var(--primary)]" data-component="icon" height="14" width="7" fill="currentColor">
          <use xlinkHref="#btn-arrow-right" />
        </svg>
        <span className="block pointer-events-none">
          {d.label}
        </span>
      </a>
    </li>
  );
}
