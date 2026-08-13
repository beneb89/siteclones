export type FeatureGridItemData = {
  variant: string;
  eyebrow: string;
  title: string;
  stat?: string;
  description?: string;
  date?: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "read-write-oauth":
      return (
        <div className="block relative py-6 px-5 bg-foreground">
          <span className="block mb-3.5 text-color-006 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
            Meta Ads MCP
          </span>
          <div className="flex items-baseline gap-1 text-[2.5rem] font-light leading-10 tracking-[-1.2px]">
            {d.stat}
            <span className="block ml-0.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-base leading-4">
              {d.eyebrow}
            </span>
          </div>
          <div className="block mt-3 text-color-004 text-xs leading-[1rem]">
            {d.title}
          </div>
          <div className="inline-flex mt-3 items-center gap-1 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
            <span className="block" aria-hidden="true">
              ▼
            </span>
            open beta
          </div>
        </div>
      );
    case "read-only-by-design":
      return (
        <div className="block relative py-6 px-5 bg-foreground">
          <span className="block mb-3.5 text-color-006 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
            Google Ads MCP
          </span>
          <div className="flex items-baseline gap-1 text-[2.5rem] font-light leading-10 tracking-[-1.2px]">
            {d.stat}
            <span className="block ml-0.5 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-base leading-4">
              {d.eyebrow}
            </span>
          </div>
          <div className="block mt-3 text-color-004 text-xs leading-[1rem]">
            {d.title}
          </div>
          <div className="inline-flex mt-3 items-center gap-1 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
            <span className="block" aria-hidden="true">
              ▼
            </span>
            open source
          </div>
        </div>
      );
    case "full":
      return (
        <div className="block relative py-6 px-5 bg-foreground">
          <span className="block mb-3.5 text-color-006 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
            {d.eyebrow}
          </span>
          <div className="flex items-baseline gap-1 text-[2.5rem] font-light leading-10 tracking-[-1.2px]">
            {d.title}
          </div>
          <div className="block mt-3 text-color-004 text-xs leading-[1rem]">
            {d.description}
          </div>
          <div className="inline-flex mt-3 items-center gap-1 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
            <span className="block" aria-hidden="true">
              ▼
            </span>
            TikTok World
          </div>
        </div>
      );
    case "google-meta-tiktok-amazon":
      return (
        <div className="block relative py-6 px-5 bg-foreground">
          <span className="block mb-3.5 text-color-006 [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
            {d.eyebrow}
          </span>
          <div className="flex items-baseline gap-1 text-[2.5rem] font-light leading-10 tracking-[-1.2px]">
            {d.stat}
          </div>
          <div className="block mt-3 text-color-004 text-xs leading-[1rem]">
            {d.title}
          </div>
          <div className="inline-flex mt-3 items-center gap-1 text-primary [font-family:'Geist_Mono',_'Geist_Mono_Fallback',_ui-monospace,_SFMono-Regular,_Menlo,_Monaco,_Consolas,_'Liberation_Mono',_'Courier_New',_monospace] text-[0.6875rem] leading-[1rem] tracking-[1.26px] uppercase">
            <span className="block" aria-hidden="true">
              ▼
            </span>
            {d.date}
          </div>
        </div>
      );
    default:
      return null;
  }
}
