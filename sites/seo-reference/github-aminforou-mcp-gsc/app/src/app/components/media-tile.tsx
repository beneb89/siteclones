import type { DittoNodeMetaMap } from "../ditto-meta";
export type MediaTileData = {
  ariacontrols: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, meta }: { d: MediaTileData; meta: DittoNodeMetaMap }) {
  return (
    <li className="list-item max-lg:invisible">
      <div className="block relative isolate max-lg:invisible">
        <button data-ditto-id={meta[2]?.anchor} className="w-full h-10 flex p-2 justify-between items-center font-medium tracking-[0.24px] text-center whitespace-nowrap text-nowrap cursor-pointer max-lg:invisible hover:opacity-75" data-component="button" aria-controls={d.ariacontrols} aria-expanded="false" type="button">
          {d.label}
          <svg className="w-auto h-4 block ml-1 align-text-bottom transform-[matrix(0,1,-1,0,0,0)] origin-[8px_8px] max-lg:invisible focus:outline-clr-14 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" focusable="false" display="inline-block" overflow="visible">
            <path d="m6.427 4.427 3.396 3.396a.25.25 0 0 1 0 .354l-3.396 3.396A.25.25 0 0 1 6 11.396V4.604a.25.25 0 0 1 .427-.177Z" />
          </svg>
        </button>
      </div>
    </li>
  );
}
