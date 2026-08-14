import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  htmlFor: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("border-t border-solid border-t-accent block", styles.className)}>
      {" "}
      <label className="flex relative py-6 px-4 justify-between items-center cursor-pointer before:content-[''] before:hidden before:w-[1.1rem] before:h-[1.1rem] before:mr-[0.9rem] before:bg-accent after:content-['ausklappen'] after:block after:w-28 after:h-5 after:text-accent after:text-xl after:font-light after:leading-5 after:text-left max-lg:after:content-[''] max-lg:after:w-[0.9375rem] max-lg:after:h-[0.5625rem] max-lg:after:ml-4 max-lg:after:bg-accent max-lg:after:text-[color:inherit] max-lg:after:[font-size:inherit] max-lg:after:[font-weight:inherit] max-lg:after:leading-[inherit] max-lg:after:[text-align:inherit]" htmlFor={d.htmlFor}>
        <h4 className="block mt-[-4.1px] -mb-[0.3375rem] text-border text-lg font-bold leading-[1.375rem] [word-break:break-word] max-md:[font-size:inherit] 2xl:-mt-[0.275rem] 2xl:-mb-1.5 2xl:text-[1.1875rem] 2xl:leading-[1.4375rem]" data-component="heading">
          {d.title}
        </h4>
      </label>
      {"  "}
    </div>
  );
}
