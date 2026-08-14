import type { FeatureCard4Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard4Data = {
  text: string;
  title: string;
  description: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
};
/** A feature card. */
export default function FeatureCard4({ d, styles }: { d: FeatureCard4Data; styles: FeatureCard4Styles }) {
  return (
    <article className={cn("border-t-[3px] border-solid flex py-8 px-[1.8625rem] flex-col bg-background max-md:px-7 2xl:hidden", styles.className)}>
      <div className={cn("block mb-3 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[2px] uppercase max-md:leading-4 2xl:hidden", styles.className2)}>
        {d.text}
      </div>
      {" "}
      <h3 className="block mb-3 [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-2xl font-medium italic leading-[1.8125rem] tracking-[-0.36px] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block mb-4 text-muted-foreground [font-family:'Source_Serif_4',_Georgia,_'Times_New_Roman',_serif] text-base italic leading-[1.5625rem] max-md:[font-size:inherit] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <ul className="block grow text-muted-foreground text-sm leading-[1.4375rem] [list-style-type:none] list-outside 2xl:hidden">
        <li className={cn("list-item relative mb-1 pl-4 2xl:hidden before:content-['·'] before:block before:absolute before:inset-y-0 before:right-[261.5px] before:left-1 before:w-[0.1875rem] before:h-[1.4375rem] before:text-accent before:text-sm before:leading-[1.4375rem] max-md:before:right-58 md:max-lg:before:right-[34.25rem] 2xl:before:hidden", styles.className3)}>
          {d.text2}
        </li>
        <li className={cn("list-item relative mb-1 pl-4 2xl:hidden before:content-['·'] before:block before:absolute before:inset-y-0 before:right-[261.5px] before:left-1 before:w-[0.1875rem] before:h-[1.4375rem] before:text-accent before:text-sm before:leading-[1.4375rem] max-md:before:right-58 md:max-lg:before:right-[34.25rem] 2xl:before:hidden", styles.className4)}>
          {d.text3}
        </li>
        <li className={cn("list-item relative mb-1 pl-4 2xl:hidden before:content-['·'] before:block before:absolute before:right-[261.5px] before:left-1 before:w-[0.1875rem] before:h-[1.4375rem] before:text-accent before:text-sm before:leading-[1.4375rem] max-md:before:right-58 md:max-lg:before:right-[34.25rem] 2xl:before:hidden", styles.className5)}>
          {d.text4}
        </li>
        <li className="list-item relative mb-1 pl-4 2xl:hidden before:content-['·'] before:block before:absolute before:inset-y-0 before:right-[261.5px] before:left-1 before:w-[0.1875rem] before:h-[1.4375rem] before:text-accent before:text-sm before:leading-[1.4375rem] max-md:before:right-58 max-md:before:bottom-[1.4375rem] md:max-lg:before:right-[34.25rem] 2xl:before:hidden">
          {d.text5}
        </li>
      </ul>
      {" "}
      <div className={cn("border-t border-solid border-t-border block mt-4 pt-4 [font-family:'IBM_Plex_Mono',_ui-monospace,_Menlo,_monospace] text-[0.625rem] font-semibold leading-[1.0625rem] tracking-[1.6px] uppercase max-md:leading-4 2xl:hidden", styles.className6)}>
        {d.text6}
      </div>
      {" "}
    </article>
  );
}
