import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  href: string;
  title: string;
  description: string;
  label: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <a className={cn("h-[18.35rem] min-h-65 border border-solid border-border flex p-7 rounded-[18px] flex-col gap-3.5 bg-background cursor-pointer md:max-lg:h-[26.3rem] hover:border-clr-16 hover:shadow-[var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-0)_0px_0px_0px_0px,var(--clr-17)_0px_20px_40px_-20px]", styles.className)} data-component="link" href={d.href}>
      <span className="border border-solid border-color-006 block py-1 px-2 rounded-md self-start text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase bg-color-009">
        AI Development
      </span>
      <h4 className="block mt-1 text-[1.1875rem] font-medium leading-[1.4375rem] tracking-[-0.28px]" data-component="heading">
        {d.title}
      </h4>
      <p className="block flex-1 text-muted text-sm leading-[1.375rem]">
        {d.description}
      </p>
      <div className="border-t border-solid border-t-border flex pt-3.5 justify-between items-center text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[0.84px] uppercase">
        <span className="block">
          {d.label}
        </span>
        <span className="flex items-center gap-1 text-foreground font-medium">
          {"Read "}
          <svg className="w-3.5 h-3.5 block overflow-hidden align-middle focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </span>
      </div>
    </a>
  );
}
