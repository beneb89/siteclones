import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  alt: string;
  sizes?: string;
  imgSrc: string;
  srcSet?: string;
  label: string;
  width: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="flex py-8 px-7 rounded-2xl flex-col items-center text-center bg-background shadow-[var(--clr-3)_0px_4px_24px_0px]">
      <div className="h-50 flex mb-6 justify-center items-center shrink-0 overflow-hidden max-md:h-32">
        <img className={cn("w-50 h-50 block max-w-full overflow-clip object-contain align-middle max-md:w-32 max-md:h-32", styles.className)} data-component="image" alt={d.alt} height="200" sizes={d.sizes} src={d.imgSrc} srcSet={d.srcSet} title={d.label} width={d.width} />
        {" "}
      </div>
      {" "}
      <h3 className="block mb-3.5 text-color-001 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-lg font-medium leading-[1.8125rem]">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
