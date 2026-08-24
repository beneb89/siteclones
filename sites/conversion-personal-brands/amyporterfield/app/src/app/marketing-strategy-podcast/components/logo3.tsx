import type { Logo3Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Logo3Data = Record<string, never>;
/** A logo. */
export default function Logo3({ d, styles }: { d: Logo3Data; styles: Logo3Styles }) {
  return (
    <div className={cn("w-[2.0625rem] h-[2.3125rem] block absolute top-[6.5625rem] transform-[none] max-md:w-5.5 max-md:h-[1.5625rem] max-md:top-11 max-md:origin-[11px_12.5px] md:max-lg:origin-[16.5px_18.5px]", styles.className)}>
      <div className="box-content h-full block">
        <svg className="box-content w-[2.0625rem] h-[2.3125rem] inline overflow-hidden align-top max-md:w-5.5 max-md:h-[1.5625rem]" data-component="icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M470.36,206.84a13,13,0,0,0-12.32-9l-144.6-.42L268.35,60a13,13,0,0,0-24.7,0L198.56,197.43,54,197.85a13,13,0,0,0-7.63,23.5l116.73,85.34L118.78,444.34a13,13,0,0,0,20,14.52L256,374.21l117.23,84.65a13,13,0,0,0,20-14.52L348.94,306.69l116.73-85.34A13,13,0,0,0,470.36,206.84Z" />
        </svg>
      </div>
    </div>
  );
}
