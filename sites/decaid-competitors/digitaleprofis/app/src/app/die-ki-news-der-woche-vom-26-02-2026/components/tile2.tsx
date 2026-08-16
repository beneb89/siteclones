export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="grid gap-0.5 grid-cols-1">
      <dt className="block text-muted-foreground text-xs font-semibold leading-[1rem]">
        {d.text}
      </dt>
      {" "}
      <dd className="block text-[0.8125rem] font-semibold leading-[1.125rem]">
        {d.text2}
      </dd>
      {" "}
    </div>
  );
}
