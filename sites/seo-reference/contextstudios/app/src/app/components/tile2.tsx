export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="block text-color-009 text-xs font-semibold leading-4 tracking-[0.48px]">
        {d.text}
      </dt>
      <dd className="block text-muted text-sm leading-[1.4375rem]">
        {d.text2}
      </dd>
    </div>
  );
}
