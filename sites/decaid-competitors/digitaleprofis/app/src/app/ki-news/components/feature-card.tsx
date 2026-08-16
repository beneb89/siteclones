import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  dateTime: string;
  date: string;
  href: string;
  title: string;
  description: string;
  ariaLabel: string;
  href2: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <article className={cn("grid p-7 items-center gap-7 grid-cols-[1fr_3.571fr_auto] max-md:p-5.5 max-md:gap-4 max-md:grid-cols-1 md:max-lg:grid-cols-[148.141px_493.859px]", styles.className)}>
      <div className="grid gap-2 text-muted-foreground text-sm [font-weight:520] leading-[1.375rem] grid-cols-1">
        <span className="border border-solid border-primary block py-[0.3125rem] px-[0.5625rem] rounded-[999px] text-color-007 text-xs font-bold leading-[1.1875rem] bg-surface-6">
          KI-News
        </span>
        {" "}
        <time className="block" dateTime={d.dateTime}>
          {d.date}
        </time>
        {" "}
      </div>
      {" "}
      <div className="block min-w-0">
        <h2 className="block text-[2rem] [font-weight:710] leading-[2.1875rem] [overflow-wrap:break-word] text-balance max-lg:text-2xl max-lg:leading-[1.625rem]" data-component="heading">
          <a className="inline font-semibold cursor-pointer" data-component="link" href={d.href}>
            {d.title}
          </a>
        </h2>
        {" "}
        <div className="block mt-3 text-muted-foreground leading-6 text-pretty">
          <p className="block">
            {d.description}
          </p>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <a className="h-[2.8rem] min-h-11 flex py-[0.65rem] px-[0.9rem] rounded-[999px] items-center gap-2 text-color-005 text-[0.9375rem] font-semibold leading-6 cursor-pointer max-md:col-start-1 md:max-lg:col-start-2" data-component="link" aria-label={d.ariaLabel} href={d.href2}>
        {" "}
        <span className="block">
          Lesen
        </span>
        {" "}
        <span className="block" aria-hidden="true">
          →
        </span>
        {" "}
      </a>
      {" "}
    </article>
  );
}
