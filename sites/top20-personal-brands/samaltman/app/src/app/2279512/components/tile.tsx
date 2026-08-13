export type TileData = Record<string, never>;
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="box-content block relative max-w-137.5 my-2.5 -mx-2.5 py-2 px-2.5 text-[0.8125rem] leading-[1.3125rem]">
      <div className="box-content block text-muted-foreground font-medium">
        <strong className="box-content inline font-bold">
          A posthaven user
        </strong>
        {"\n        upvoted this post.\n      "}
      </div>
      {" "}
    </div>
  );
}
