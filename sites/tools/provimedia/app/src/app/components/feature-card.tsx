import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  href: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <a className={cn("border border-solid border-border block p-6 rounded-2xl bg-color-001 cursor-pointer hover:border-clr-9", styles.className)} data-component="link" href={d.href}>
      <h3 className={cn("block text-lg font-semibold leading-7 text-balance", styles.className2)} data-component="heading">
        {d.title}
      </h3>
      <p className="block mt-2 text-muted-foreground text-sm leading-[1.4375rem] text-pretty">
        {d.description}
      </p>
    </a>
  );
}
