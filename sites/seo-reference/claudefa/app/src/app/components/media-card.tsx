import type { ReactNode } from "react";
export type MediaCardData = {
  icon: ReactNode;
  text: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="hidden 2xl:border 2xl:border-solid 2xl:border-border 2xl:flex 2xl:relative 2xl:p-6 2xl:rounded-2xl 2xl:flex-col 2xl:bg-clr-34">
      <div className="hidden 2xl:flex 2xl:mb-4 2xl:justify-between 2xl:items-start">
        <div className="hidden 2xl:block 2xl:p-3 2xl:rounded-full 2xl:bg-clr-35 2xl:shadow-[var(--clr-5)_0px_0px_0px_0px,var(--clr-36)_0px_0px_0px_8px,var(--clr-0)_0px_0px_0px_0px]">
          <svg className="hidden 2xl:w-5 2xl:h-5 2xl:block 2xl:overflow-hidden 2xl:align-middle 2xl:text-clr-19" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
        </div>
        <div className="hidden 2xl:flex 2xl:py-0.5 2xl:px-2.5 2xl:rounded-xl 2xl:items-center 2xl:text-[0.8125rem] 2xl:leading-[1.25rem] 2xl:bg-clr-37">
          {d.text}
        </div>
      </div>
      <h3 className="hidden 2xl:block 2xl:mb-3 2xl:text-lg 2xl:font-semibold 2xl:leading-7 2xl:tracking-[-0.45px]">
        {d.title}
      </h3>
      <p className="hidden line-clamp-3 2xl:overflow-hidden 2xl:text-clr-18 2xl:text-sm 2xl:leading-[1.4375rem] 2xl:block">
        {d.description}
      </p>
    </div>
  );
}
