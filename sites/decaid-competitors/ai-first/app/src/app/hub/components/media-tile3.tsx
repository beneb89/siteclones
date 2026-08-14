import type { ReactNode } from "react";
export type MediaTile3Data = {
  icon: ReactNode;
  label: string;
};
/** A media tile. */
export default function MediaTile3({ d }: { d: MediaTile3Data }) {
  return (
    <button className="border border-solid border-surface flex py-1 px-3 rounded-full items-center gap-1 text-color-023 text-xs font-medium leading-4 text-center cursor-default" data-component="button">
      <svg className="w-3 h-3 block overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" height="24" viewBox="0 -960 960 960" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      {d.label}
    </button>
  );
}
