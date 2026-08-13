import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  text: string;
  title: string;
  text2: string;
  description: string;
  text3: string;
  kind?: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="border border-solid border-border flex relative p-7 rounded-[18px] gap-8 overflow-hidden bg-background max-md:p-6 max-md:flex-col max-md:gap-5">
      <div className="w-55 flex flex-col shrink-0 gap-3 max-md:w-[17.3125rem] max-md:shrink-[initial]">
        <div className="flex items-center gap-2 text-muted [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.47px] uppercase">
          <span className="w-1.5 h-1.5 block rounded-full bg-muted" />
          {d.text}
        </div>
        <h5 className="block text-[1.375rem] font-medium leading-[1.625rem] tracking-[-0.44px]" data-component="heading">
          {d.title}
        </h5>
        <div className="block self-start">
          <span className={cn("inline-block py-1.5 px-2.5 rounded-lg text-color-002 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-xs leading-4.5 tracking-[-0.12px] bg-surface-2", styles.className)} data-component={d.kind}>
            {d.text2}
          </span>
        </div>
      </div>
      <div className="block self-stretch bg-surface-4 w-px max-md:hidden" />
      <div className="flex flex-col justify-between flex-1 gap-4">
        <p className="block text-muted-foreground text-sm leading-[1.375rem]">
          {d.description}
        </p>
        <div className="block pt-1 self-end max-md:self-start">
          <span className={cn("inline-block py-1 px-2 rounded-md text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.625rem] leading-[0.9375rem] tracking-[1.2px] uppercase bg-color-008", styles.className2)} data-component="badge">
            {d.text3}
          </span>
        </div>
      </div>
    </div>
  );
}
