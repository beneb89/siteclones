import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <li className={cn("grid py-3.5 gap-3.5 grid-cols-[36px_1fr]", styles.className)}>
      <div className="h-9 flex rounded-[50%] justify-center items-center shrink-0 text-surface font-extrabold bg-color-008">
        {d.text}
      </div>
      {" "}
      <div className="block">
        <h3 className="block mb-1 text-[0.9375rem] font-bold leading-[1.0625rem] tracking-[-0.27px]" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="w-full max-w-153 block text-accent text-sm leading-[1.375rem]">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </li>
  );
}
