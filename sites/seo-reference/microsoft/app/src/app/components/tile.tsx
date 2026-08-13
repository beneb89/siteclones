import type { DittoNodeMetaMap } from "../ditto-meta";
export type TileData = {
  id: string;
  label: string;
};
/** A content tile. */
export default function Tile({ d, meta }: { d: TileData; meta: DittoNodeMetaMap }) {
  return (
    <uhf-dropdown class="block max-lg:hidden" id={d.id}>
      <uhf-dropdown-desktop class="inline max-lg:hidden">
        {"   "}
        <button data-ditto-id={meta[2]?.anchor} className="h-13.5 flex px-3 justify-center items-center gap-[0.3125rem] text-foreground text-[0.8125rem] leading-[1.3125rem] text-center whitespace-nowrap text-nowrap cursor-pointer max-lg:hidden hover:underline focus:bg-surface focus:[outline-style:dashed] focus:outline-1" data-component="button" aria-expanded="false" aria-haspopup="true" role="button">
          {d.label}
          <uhf-icon class="block text-color-001 max-lg:hidden">
            <i className="inline-block text-foreground [font-family:FabricMDL2Icons] text-[0.5rem] max-lg:hidden before:content-[''] before:text-foreground before:text-[0.5rem] before:leading-[1.3125rem] before:text-center max-lg:before:hidden" />
            {" "}
          </uhf-icon>
          {" "}
        </button>
        {"  "}
      </uhf-dropdown-desktop>
      {" "}
    </uhf-dropdown>
  );
}
