import type { DittoNodeMetaMap } from "../ditto-meta";
import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  description: string;
  href: string;
  description2: string;
  href2: string;
  description3: string;
  href3: string;
  title: string;
  description4: string;
};
/** A feature card. */
export default function FeatureCard({ d, meta, styles }: { d: FeatureCardData; meta: DittoNodeMetaMap; styles: FeatureCardStyles }) {
  return (
    <li className="list-item">
      <div data-ditto-id={meta[1]?.anchor} className="h-full border border-solid border-border flex relative p-8 rounded-2xl flex-col gap-3 bg-border">
        <p className="block text-muted-foreground [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem] tracking-[1.18px] uppercase max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[1.1px] md:max-lg:tracking-[1.13px] 2xl:tracking-[1.2px]">
          <span className="inline">
            {d.description}
          </span>
          <span className="inline mx-[0.15rem]" aria-hidden="true">
            ·
          </span>
          <a className="inline relative z-2 cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] hover:underline" data-component="link" href={d.href}>
            {d.description2}
          </a>
          <span className="inline mx-[0.15rem]" aria-hidden="true">
            ·
          </span>
          <a className="inline relative z-2 cursor-pointer hover:border-primary hover:text-primary hover:outline-primary hover:[text-decoration-color:var(--primary)] hover:underline" data-component="link" href={d.href2}>
            {d.description3}
          </a>
        </p>
        <h3 className="block [font-family:'DM_Serif_Display',_Georgia,_serif] text-[1.375rem] leading-[1.75rem] tracking-[-0.44px] text-balance max-md:text-xl max-md:leading-[1.5625rem] max-md:tracking-[-0.4px] md:max-lg:text-[1.3125rem] md:max-lg:leading-[1.6875rem] md:max-lg:tracking-[-0.42px]" data-component="heading">
          <a className={cn("inline cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:z-1 after:w-[376.7px] after:h-[17.65rem] max-md:after:w-[21.3125rem] md:max-lg:after:w-[339.3px] 2xl:after:w-[448.7px] 2xl:after:h-[17.6875rem]", styles.className)} data-component="link" href={d.href3}>
            {d.title}
          </a>
        </h3>
        <p className="block flex-1 text-muted text-sm leading-[1.375rem] max-md:text-[0.8125rem] max-md:leading-[1.3125rem]">
          {d.description4}
        </p>
        <span className="flex items-center gap-2 text-primary [font-family:'JetBrains_Mono',_ui-monospace,_SFMono-Regular,_Menlo,_monospace] text-xs leading-[1.1875rem] tracking-[1.18px] uppercase max-lg:text-[0.6875rem] max-lg:leading-[1.125rem] max-md:tracking-[1.1px] md:max-lg:tracking-[1.13px] 2xl:tracking-[1.2px]">
          {"\nRead analysis\n"}
          <svg className="w-auto h-3.5 block max-w-full overflow-hidden" data-component="icon" aria-hidden="true" fill="none" height="14" stroke="currentColor" viewBox="0 0 24 24" width="14" strokeWidth="2" data-astro-cid-rctrd56q="">
            <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-rctrd56q="" />
          </svg>
        </span>
      </div>
    </li>
  );
}
