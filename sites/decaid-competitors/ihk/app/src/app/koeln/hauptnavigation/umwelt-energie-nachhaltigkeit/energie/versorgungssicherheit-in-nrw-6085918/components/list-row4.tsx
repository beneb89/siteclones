import type { ListRow4Styles } from "../_styles";
import { cn } from "../../../../../../../lib/utils";
export type ListRow4Data = {
  href: string;
  label: string;
  label2: string;
};
/** A list row. */
export default function ListRow4({ d, styles }: { d: ListRow4Data; styles: ListRow4Styles }) {
  return (
    <li className={cn("block mx-[0.3375rem] [pointer-events:all] max-md:mx-[0.3rem]", styles.className)}>
      <a className={cn("min-h-10.5 inline-flex relative min-w-10.5 -ml-[0.075rem] py-2.5 pr-4.5 pl-12 rounded-[18px] justify-center items-center [font-family:Korb,_sans-serif] text-xl leading-5 text-left bg-background cursor-pointer [pointer-events:all] max-lg:min-h-9.5 max-lg:min-w-9.5 max-lg:-ml-px max-lg:pl-11.5 max-md:rounded-[14px] max-md:text-lg max-lg:leading-4.5 md:max-lg:rounded-2xl md:max-lg:[font-size:inherit] 2xl:ml-[-1.3px] 2xl:text-[1.375rem] 2xl:leading-5.5 before:block before:absolute before:top-[1.3125rem] before:bottom-1.5 before:left-3 before:h-7.5 before:-mt-[0.9375rem] before:text-foreground before:text-3xl before:leading-7.5 before:text-left max-lg:before:top-[1.1875rem] max-md:before:bottom-[0.4375rem] max-md:before:h-6 max-md:before:-mt-3 max-md:before:text-2xl max-md:before:leading-6 md:max-lg:before:h-6.5 md:max-lg:before:-mt-[0.8125rem] md:max-lg:before:text-[1.625rem] md:max-lg:before:leading-6.5 after:content-[''] after:block after:absolute after:inset-0 after:h-10.5 after:shadow-[var(--background)_0px_0px_0px_2px] after:opacity-0 after:rounded-tl-[18px] max-lg:after:h-9.5 max-md:after:rounded-tl-[14px] md:max-lg:after:rounded-tl-2xl", styles.className2)} data-component="button" href={d.href} rel="noopener" target="_blank" title={d.label}>
        {d.label2}
      </a>
      {" "}
    </li>
  );
}
