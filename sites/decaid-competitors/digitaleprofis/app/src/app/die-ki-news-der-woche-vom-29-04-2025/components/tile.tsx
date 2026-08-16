export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="grid min-w-0 gap-0.5 max-lg:grid-cols-1">
      <dt className="block min-w-0 text-muted-foreground text-xs font-semibold leading-[1rem]">
        {d.text}
      </dt>
      {" "}
      <dd className="block min-w-0 text-[0.8125rem] font-semibold leading-[1.125rem]">
        {d.text2}
      </dd>
      {" "}
    </div>
  );
}
