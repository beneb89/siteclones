import type { LogoStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type LogoData = Record<string, never>;
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className={cn("w-6.5 h-6.5 block absolute -top-72 transform-[none] max-md:w-[1.0625rem] max-md:h-[1.0625rem] max-md:top-[23.8125rem] max-md:left-[5.5625rem] max-md:transform-[matrix(1.17188,0,0,1.17188,16.7578,66.9453)] max-md:origin-[8.5px_8.5px] md:max-lg:origin-[13px_13px]", styles.className)}>
      <div className="box-content h-full block">
        <svg className="box-content w-auto h-6.5 inline overflow-hidden align-top max-md:h-[1.0625rem]" data-component="icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M470.36,206.84a13,13,0,0,0-12.32-9l-144.6-.42L268.35,60a13,13,0,0,0-24.7,0L198.56,197.43,54,197.85a13,13,0,0,0-7.63,23.5l116.73,85.34L118.78,444.34a13,13,0,0,0,20,14.52L256,374.21l117.23,84.65a13,13,0,0,0,20-14.52L348.94,306.69l116.73-85.34A13,13,0,0,0,470.36,206.84Z" />
        </svg>
      </div>
    </div>
  );
}
