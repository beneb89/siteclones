import type { ReactNode } from "react";
export type MediaTile2Data = {
  href: string;
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <li className="hidden max-lg:list-item max-lg:pointer-events-none">
      <a className="hidden max-lg:flex max-lg:py-2.5 max-md:items-center max-lg:gap-x-4 max-md:text-base max-md:leading-6 max-lg:cursor-pointer max-lg:pointer-events-none md:max-lg:items-start" href={d.href}>
        <svg className="hidden w-5 h-5 max-lg:block max-lg:shrink-0 max-lg:overflow-hidden max-lg:align-middle max-lg:pointer-events-none" fill="currentColor">{d.icon}</svg>
        <span className="hidden max-lg:flex max-lg:items-center max-lg:pointer-events-none">
          {d.label}
          <svg className="hidden w-3.5 h-3.5" fill="currentColor">
            <use href="#icon-arrow" />
          </svg>
        </span>
      </a>
    </li>
  );
}
