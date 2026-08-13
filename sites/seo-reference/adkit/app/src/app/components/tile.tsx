import type { DittoNodeMetaMap } from "../ditto-meta";
export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d, meta }: { d: TileData; meta: DittoNodeMetaMap }) {
  return (
    <span className="block">
      <span className="inline text-accent">
        {"  --env"}
      </span>
      <span data-ditto-id={meta[2]?.anchor} className="inline text-accent">
        {d.text}
      </span>
      <span className="inline text-color-006">
        {" \\\n"}
      </span>
    </span>
  );
}
