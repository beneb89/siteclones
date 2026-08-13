import type { ReactNode } from "react";
export type MediaLink2Data = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A linked media tile. */
export default function MediaLink2({ d }: { d: MediaLink2Data }) {
  return (
    <a className="flex min-w-0 justify-center items-center flex-1 cursor-pointer" href={d.href}>
      <div className="flex relative min-w-0 p-2 flex-col justify-center items-center gap-1">
        <div className="block min-w-0">
          <svg className="block overflow-hidden align-middle text-muted-foreground h-5 w-5" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
        </div>
        <span className="block opacity-70 min-w-0 text-muted-foreground text-[0.625rem] font-medium leading-[0.9375rem]">
          {d.label}
        </span>
      </div>
    </a>
  );
}
