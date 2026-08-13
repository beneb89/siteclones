import type { DittoNodeMetaMap } from "../ditto-meta";
export type MediaTileData = {
  ariacontrols: string;
  label: string;
};
/** A media tile. */
export default function MediaTile({ d, meta }: { d: MediaTileData; meta: DittoNodeMetaMap }) {
  return (
    <div className="border-b border-solid border-b-border block py-5">
      <button data-ditto-id={meta[1]?.anchor} className="flex justify-between items-center gap-4 text-[1.0625rem] font-medium leading-[1.625rem] tracking-[-0.17px] text-left cursor-pointer w-full" data-component="button" aria-controls={d.ariacontrols} aria-expanded="false" type="button">
        <span className="block">
          {d.label}
        </span>
        <span className="w-7 h-7 border border-solid border-border flex rounded-full justify-center items-center shrink-0 text-muted-foreground">
          <svg className="w-3.5 h-3.5 block overflow-hidden align-middle focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </span>
      </button>
    </div>
  );
}
