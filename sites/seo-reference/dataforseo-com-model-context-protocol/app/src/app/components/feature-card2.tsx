import type { ReactNode } from "react";
import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard2Data = {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d, styles }: { d: FeatureCard2Data; styles: FeatureCard2Styles }) {
  return (
    <a className={cn("border border-solid border-border flex p-5 rounded-xl flex-col gap-3 text-background bg-border cursor-pointer max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] max-lg:[grid-row-start:initial] hover:bg-clr-24 hover:border-clr-25 hover:shadow-[var(--clr-5)_0px_0px_20px_0px] focus:bg-clr-35", styles.className)} data-component="link" href={d.href} target="_blank">
      {" "}
      <div className="flex justify-between items-start">
        <span className="w-11 h-11 border border-solid border-accent flex rounded-lg justify-center items-center shrink-0 text-primary bg-color-006">
          {" "}
          <svg className="w-auto h-6 block overflow-hidden align-middle" data-component="icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
          {" "}
        </span>
        {" "}
        <span className="block shrink-0 text-color-005 leading-4" aria-hidden="true">
          {" "}
          <svg className="w-auto h-4 block overflow-hidden align-middle" data-component="icon" fill="none" height="16" stroke="currentColor" viewBox="0 0 16 16" width="16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3.5 12.5L12.5 3.5" />
            <path d="M5.5 3.5h7v7" />
          </svg>
          {" "}
        </span>
        {" "}
      </div>
      {" "}
      <h3 className="block text-color-003 text-[1.375rem] font-bold leading-[1.625rem]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-color-008 text-lg font-medium leading-[1.8125rem]">
        {d.description}
      </p>
      {" "}
    </a>
  );
}
