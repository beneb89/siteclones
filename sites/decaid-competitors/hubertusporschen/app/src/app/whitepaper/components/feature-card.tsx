import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  text: string;
  title: string;
  title2: string;
  description: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <article className={cn("h-[1067.7px] min-h-105 border-r border-solid border-r-border border-b border-b-border flex py-10 flex-col gap-4 bg-color-002 2xl:hidden", styles.className)}>
      <div className="flex mb-2 justify-between items-start gap-4 2xl:hidden">
        <div className="block text-accent [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden">
          {d.text}
        </div>
        {" "}
      </div>
      {" "}
      <h3 className="block text-primary [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-[1.75rem] font-semibold leading-[2rem] tracking-[-0.56px] 2xl:hidden" data-component="heading">
        {d.title}
        <em className="inline text-muted-foreground font-medium italic 2xl:hidden">
          {d.title2}
        </em>
        {" "}
      </h3>
      {" "}
      <p className="block text-muted-foreground text-[0.9375rem] leading-[1.5625rem] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <ul className="block mt-2 [list-style-type:none] list-outside 2xl:hidden">
        <li className="list-item relative py-[0.4rem] pl-5 text-sm leading-[1.3125rem] max-md:py-1.5 2xl:hidden">
          <span className="w-3.5 h-[1.3125rem] block absolute left-0 text-accent font-semibold 2xl:hidden">
            →
          </span>
          {d.text2}
        </li>
        <li className="list-item relative py-[0.4rem] pl-5 text-sm leading-[1.3125rem] max-md:py-1.5 2xl:hidden">
          <span className="w-3.5 h-[1.3125rem] block absolute left-0 text-accent font-semibold 2xl:hidden">
            →
          </span>
          {d.text3}
        </li>
        <li className="list-item relative py-[0.4rem] pl-5 text-sm leading-[1.3125rem] max-md:py-1.5 2xl:hidden">
          <span className="w-3.5 h-[1.3125rem] block absolute left-0 text-accent font-semibold 2xl:hidden">
            →
          </span>
          {d.text4}
        </li>
        <li className="list-item relative py-[0.4rem] pl-5 text-sm leading-[1.3125rem] max-md:py-1.5 2xl:hidden">
          <span className="w-3.5 h-[1.3125rem] block absolute left-0 text-accent font-semibold 2xl:hidden">
            →
          </span>
          {d.text5}
        </li>
      </ul>
      {" "}
      <div className={cn("border-t border-solid border-t-border flex pt-5 flex-wrap justify-between items-end gap-4 2xl:hidden", styles.className2)}>
        <div className="block text-muted-foreground [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-medium leading-[0.9375rem] tracking-[1.6px] uppercase 2xl:hidden">
          <b className="inline text-primary font-semibold 2xl:hidden">
            {d.text6}
          </b>
          {d.text7}
        </div>
        {" "}
        <a className="border border-solid border-primary flex py-[1.0625rem] px-6.5 justify-between items-center gap-[14.9px] text-primary text-[0.8125rem] font-semibold leading-[1.375rem] tracking-[0.52px] uppercase whitespace-nowrap text-nowrap cursor-pointer max-md:gap-3.5 max-md:leading-[1.3125rem] 2xl:hidden" data-component="button" href="/whitepaper/kompass-fuer-fuehrung">
          Whitepaper ansehen
        </a>
        {" "}
      </div>
      {" "}
    </article>
  );
}
