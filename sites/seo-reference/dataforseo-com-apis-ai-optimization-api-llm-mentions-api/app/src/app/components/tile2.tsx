export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <div className="border-b border-solid border-b-surface-4 flex py-3 justify-between">
      <span className="block font-medium">
        {d.text}
      </span>
      {" "}
      <span className="block text-accent text-sm font-semibold leading-[1.375rem]">
        {d.text2}
      </span>
      {" "}
    </div>
  );
}
