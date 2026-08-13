import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  name: string;
  name2: string;
  description: string;
};
/** A logo. */
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <div className="block relative shrink-0 max-lg:hidden" name={d.name}>
      <a className={cn("flex relative opacity-60 justify-start items-start content-start gap-2.5 max-lg:hidden", styles.className)} name={d.name2}>
        <div className={cn("flex relative flex-col justify-start items-start content-start self-stretch shrink-0 gap-[0.3125rem] max-lg:hidden", styles.className2)}>
          <div className="flex relative py-2.5 px-3 justify-start items-center content-center shrink-0 gap-1 max-lg:hidden">
            <div className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className3)}>
              <p className="block text-color-002 [font-family:'Inter_Variable',_'Inter_Variable_Placeholder',_sans-serif] text-[0.875rem] tracking-[-0.2px] text-left [font-feature-settings:'cv05',_'cv11',_'ss03',_'ss07'] max-lg:hidden" dir="auto">
                {d.description}
              </p>
            </div>
            <svg className="w-auto h-2 block relative z-1 shrink-0 overflow-hidden aspect-square max-lg:hidden" data-component="icon" role="presentation" viewBox="0 0 20 20" data-framer-name="Dropdown" fill="currentColor">
              <use href="#367334708" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}
