export type Tile2Data = {
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block my-4.5">
      <span className="inline [font-family:Raleway] text-[1.375rem] leading-6.5">
        {d.description}
      </span>
    </p>
  );
}
