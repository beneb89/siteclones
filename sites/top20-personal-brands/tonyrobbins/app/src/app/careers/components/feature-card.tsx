import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
  text: string;
  text2: string;
  href: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="border-b border-solid border-b-surface grid max-w-400 py-8 px-10 gap-2 mx-auto grid-cols-5 max-lg:px-5 max-md:grid-cols-1">
      <div className="flex items-center gap-2 col-start-[span_2] col-end-[span_2] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial]">
        <h2 className={cn("block text-[1.5rem] font-medium tracking-[-1.2px]", styles.className)} data-component="heading">
          {d.title}
        </h2>
      </div>
      <div className="flex items-center gap-1">
        <span className="hidden min-w-0 font-medium leading-4 max-md:block">
          Location:
        </span>
        <span className="block opacity-60 leading-4">
          {d.text}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <span className="hidden min-w-0 font-medium leading-4 max-md:block">
          Employee Type:
        </span>
        <span className="block opacity-60 leading-4">
          {d.text2}
        </span>
      </div>
      <div className="flex justify-end max-md:[justify-content:initial]">
        <a className="flex px-8 rounded-full justify-center items-center gap-2 text-color-009 text-sm font-medium leading-[1.375rem] whitespace-nowrap text-nowrap bg-border cursor-pointer h-11 max-lg:leading-[1.3125rem] 2xl:text-[0.9375rem] 2xl:leading-[1.4375rem]" data-component="button" href={d.href}>
          Learn More
        </a>
      </div>
    </div>
  );
}
