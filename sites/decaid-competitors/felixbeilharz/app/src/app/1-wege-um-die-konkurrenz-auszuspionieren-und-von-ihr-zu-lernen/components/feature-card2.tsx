import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCard2Data = {
  id: string;
  href: string;
  label: string;
  title: string;
  href2: string;
  label2: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <article className={cn("w-full border-l-2 border-solid border-l-clr-7 block relative p-2.5", styles.className)} id={d.id}>
      <div className="box-content h-full block p-px [overflow-wrap:break-word]">
        <h2 className="box-content h-full block text-color-001 [font-family:Oswald] text-[1.0625rem] leading-[1.375rem] text-left" data-component="heading">
          <span className="box-content inline">
            <a className="box-content border-b border-dashed border-b-primary inline text-color-003 [background-size:1px_0px] [background-position:0px_100%] bg-repeat-x cursor-pointer" style={{ backgroundImage: "linear-gradient(var(--clr-1) 0%, var(--clr-1) 100%)" }} data-component="link" href={d.href} title={d.label}>
              {d.title}
            </a>
          </span>
        </h2>
      </div>
      {" "}
      <div className="box-content w-64 h-full block absolute top-0 left-0 z-12 cursor-pointer max-md:w-[20.8125rem] md:max-lg:w-171.5">
        <a className="box-content h-full block absolute top-0 inset-x-0 z-12 text-clr-7 text-[0rem] leading-0" data-component="link" href={d.href2}>
          {d.label2}
        </a>
      </div>
    </article>
  );
}
