import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  id: string;
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("flex relative py-2.5 px-5 rounded-[20px] flex-col justify-center items-center text-center bg-accent max-lg:pt-6.5 max-lg:pb-8", styles.className)} id={d.id}>
      <div className={cn("w-25 h-25 flex absolute -top-[4.625rem] min-w-0 rounded-full justify-center items-center bg-background shadow-[var(--clr-34)_0px_4px_20px_-12px] max-md:w-20 max-md:h-20", styles.className2)}>
        <div className="block text-color-001 [font-family:Satoshi,_Arial,_sans-serif] text-[2rem] font-bold">
          {d.text}
        </div>
      </div>
      <h1 className="block my-5 text-color-001 [font-family:Satoshi,_Arial,_sans-serif] text-[1.75rem] font-bold leading-[2.125rem] max-lg:text-[1.625rem] max-lg:leading-[2.1875rem]" data-component="heading">
        {d.title}
      </h1>
      <p className="block mb-8 [font-family:Satoshi,_Arial,_sans-serif] text-lg leading-[1.6875rem] max-lg:mb-6 max-lg:text-base max-lg:leading-6">
        {d.description}
        <br className="inline" />
      </p>
    </div>
  );
}
