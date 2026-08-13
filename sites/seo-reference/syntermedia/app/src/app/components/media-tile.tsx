import type { DittoNodeMetaMap } from "../ditto-meta";
export type MediaTileData = {
  ariacontrols: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, meta }: { d: MediaTileData; meta: DittoNodeMetaMap }) {
  return (
    <div className="block relative">
      <button data-ditto-id={meta[1]?.anchor} className="h-9 flex py-2 px-3 rounded-md items-center gap-1 text-color-005 leading-5 text-center cursor-pointer" data-component="button" aria-controls={d.ariacontrols} aria-expanded="false" type="button">
        {d.label}
        <svg className="block overflow-hidden align-middle w-3.5 h-3.5 focus:outline-color-004 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}
