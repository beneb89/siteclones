import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <details className="box-content block">
      <summary className={cn("box-content border-solid flex relative z-2 py-4.5 px-6 flex-row-reverse justify-end items-center gap-6 grid-cols-[auto_min-content] cursor-pointer after:content-[''] after:block after:w-2 after:h-2 after:transform-[matrix(0.707107,0.707107,-0.707107,0.707107,-1.76777,-1.76777)] after:origin-[5px_5px]", styles.className)}>
        <h4 className="box-content block [font-family:-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_Helvetica,_Arial,_sans-serif] text-lg [font-weight:750] leading-[1.25rem] tracking-[-0.72px] text-pretty" data-component="heading">
          {d.title}
        </h4>
      </summary>
      <div className="box-content border-r border-solid border-r-foreground border-b border-b-foreground border-l border-l-foreground block relative z-2 py-4.5 px-6">
        <p className="box-content block mt-[1.35rem] leading-[2.3125rem] text-pretty max-md:mt-[1.1375rem] max-md:leading-[1.9375rem] md:max-lg:mt-5 md:max-lg:leading-[2.125rem]">
          {d.description}
        </p>
        {" "}
      </div>
    </details>
  );
}
