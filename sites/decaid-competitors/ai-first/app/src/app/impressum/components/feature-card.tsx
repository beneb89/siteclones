import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <section className={cn("block", styles.className)}>
      <h2 className="block text-foreground text-xl font-semibold leading-[1.4375rem] max-md:text-lg max-md:leading-[1.3125rem]" data-component="heading">
        {d.title}
      </h2>
      <p className="block">
        {d.description}
      </p>
    </section>
  );
}
