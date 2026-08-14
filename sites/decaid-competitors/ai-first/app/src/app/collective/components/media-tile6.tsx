import type { ReactNode } from "react";
export type MediaTile6Data = {
  icon: ReactNode;
  text: string;
  kind?: string;
};
/** A media tile. */
export default function MediaTile6({ d }: { d: MediaTile6Data }) {
  return (
    <span className="border border-solid border-color-013 flex py-2.5 px-5 rounded-full items-center shrink-0 gap-2.5 text-color-015 text-base font-semibold leading-[1.375rem] whitespace-nowrap text-nowrap bg-color-002 md:max-lg:text-[0.9375rem] md:max-lg:leading-[1.3125rem] 2xl:[font-size:inherit]">
      <svg className="block shrink-0 overflow-hidden align-middle h-4 w-4" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg" data-component={d.kind}>{d.icon}</svg>
      {d.text}
    </span>
  );
}
