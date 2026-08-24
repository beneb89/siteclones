import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <section className={cn("block my-10 p-5 rounded-sm overflow-hidden bg-background shadow-[var(--clr-19)_0px_2px_2px_0px,var(--color-015)_0px_0px_0px_1px] max-lg:border-t max-lg:border-solid max-lg:border-t-surface-5 max-lg:p-0 max-lg:rounded-[initial] max-lg:shadow-[initial]", styles.className)}>
      <h3 className="flex justify-between items-center text-[1.375rem] font-bold leading-[1.875rem] cursor-pointer max-lg:py-4 max-lg:pr-7.5 max-lg:pl-4 max-md:text-lg max-md:leading-[1.5rem] after:content-[''] after:block after:w-2.5 after:h-2.5 after:ml-4 after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,0,0)] after:origin-[5px_5px]" data-component="heading">
        {d.title}
      </h3>
      {"  "}
    </section>
  );
}
