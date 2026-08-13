import type { DittoNodeMetaMap } from "../ditto-meta";
export type TileData = {
  label: string;
};
/** A content tile. */
export default function Tile({ d, meta }: { d: TileData; meta: DittoNodeMetaMap }) {
  return (
    <div data-ditto-id={meta[0]?.anchor} className="block relative ml-6">
      <button data-ditto-id={meta[1]?.anchor} className="flex items-center gap-1 text-border text-sm leading-5 text-center cursor-pointer hover:text-background hover:outline-background hover:[text-decoration-color:var(--background)]" data-component="button">
        {d.label}
        <i className="block [font-family:'Font_Awesome_6_Free'] text-[0.625rem] font-black leading-2.5 before:content-[''] before:text-border before:text-[0.625rem] before:font-black before:leading-2.5 before:text-center" />
      </button>
    </div>
  );
}
