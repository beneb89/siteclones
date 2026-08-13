import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
  width: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <a className={cn("border border-solid border-surface-2 flex p-8 rounded-2xl flex-col items-center gap-6 text-center bg-background shadow-[var(--clr-3)_0px_1px_2px_0px] cursor-pointer focus:outline-foreground", styles.className)} data-component="link" href={d.href}>
      {" "}
      <div className="w-full flex justify-center items-center focus:outline-foreground">
        <img className={cn("h-42.5 block max-w-full overflow-clip align-middle focus:outline-foreground", styles.className2)} data-component="image" alt={d.alt} height="170" src={d.imgSrc} title={d.label} width={d.width} />
        {" "}
      </div>
      {" "}
      <h3 className="block text-color-001 text-lg font-bold leading-[1.5625rem] max-lg:text-[0.9375rem] max-lg:leading-[1.3125rem] focus:outline-color-001" data-component="heading">
        {d.title}
      </h3>
      {" "}
    </a>
  );
}
