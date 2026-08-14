import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard2Data = {
  text: string;
  text2: string;
  title: string;
  description: string;
  text3: string;
  text4: string;
  text5: string;
  href: string;
  label: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <article className={cn("h-[554.7px] min-h-95 flex py-9 px-7 flex-col bg-surface-2 md:max-lg:h-[54.5375rem] 2xl:hidden", styles.className)}>
      <div className="block mb-3 text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden">
        {d.text}
      </div>
      {" "}
      <div className="block mb-[14.9px] text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[3.1875rem] italic leading-[3.1875rem] tracking-[-1.02px] max-md:mb-3.5 max-md:text-5xl max-md:leading-12 max-md:tracking-[-0.96px] 2xl:hidden">
        {d.text2}
      </div>
      {" "}
      <h3 className="block mb-3 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.625rem] font-medium leading-[1.9375rem] tracking-[-0.38px] max-md:text-2xl max-md:leading-[1.8125rem] max-md:tracking-[-0.36px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block mb-4.5 text-muted-foreground text-[0.9375rem] leading-[1.4375rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <ul className={cn("grid mt-3 mb-6 gap-2 grid-cols-[217px] [list-style-type:none] list-outside max-md:grid-cols-[279px] 2xl:hidden", styles.className2)}>
        <li className={cn("list-item relative pl-4 text-muted-foreground text-sm leading-[1.25rem] 2xl:hidden before:content-['·'] before:block before:absolute before:right-[13.0625rem] before:left-1 before:w-1 before:h-[20.3px] before:text-primary before:text-sm before:font-bold before:leading-[1.25rem] max-md:before:right-[16.9375rem] 2xl:before:hidden", styles.className3)}>
          {d.text3}
        </li>
        <li className={cn("list-item relative pl-4 text-muted-foreground text-sm leading-[1.25rem] 2xl:hidden before:content-['·'] before:block before:absolute before:right-[13.0625rem] before:left-1 before:w-1 before:h-[20.3px] before:text-primary before:text-sm before:font-bold before:leading-[1.25rem] max-md:before:right-[16.9375rem] 2xl:before:hidden", styles.className4)}>
          {d.text4}
        </li>
        <li className={cn("list-item relative pl-4 text-muted-foreground text-sm leading-[1.25rem] 2xl:hidden before:content-['·'] before:block before:absolute before:right-[13.0625rem] before:left-1 before:w-1 before:h-[20.3px] before:text-primary before:text-sm before:font-bold before:leading-[1.25rem] max-md:before:right-[16.9375rem] 2xl:before:hidden", styles.className5)}>
          {d.text5}
        </li>
      </ul>
      {" "}
      <a className={cn("border-b border-solid border-b-primary block pb-1 self-start text-primary [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.6875rem] font-semibold leading-[1.1875rem] tracking-[1.54px] uppercase cursor-pointer max-md:leading-[1.125rem] 2xl:hidden", styles.className6)} data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </article>
  );
}
