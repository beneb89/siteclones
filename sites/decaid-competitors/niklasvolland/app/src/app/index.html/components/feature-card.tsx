import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="border-b border-solid border-b-border block">
      <button className={cn("w-full flex py-6 justify-between items-center gap-5 text-color-015 text-[0.8125rem] leading-[1.0625rem] text-left cursor-pointer", styles.className)} data-component="button">
        <h3 className="block flex-1 text-foreground text-base font-semibold leading-[1.3125rem]" data-component="heading">
          {d.title}
        </h3>
        <span className="w-7 h-7 border border-solid border-border flex rounded-[50%] justify-center items-center shrink-0 text-muted-foreground text-lg font-light leading-6 bg-border">
          +
        </span>
      </button>
      {" "}
      <p className="block max-h-0 overflow-hidden text-muted-foreground text-sm leading-[1.5rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
