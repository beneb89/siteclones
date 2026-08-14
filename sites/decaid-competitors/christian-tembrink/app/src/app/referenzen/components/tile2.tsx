export type Tile2Data = {
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block my-4.5">
      <span className="inline [font-family:Raleway]">
        <i className="inline italic">
          {d.description}
        </i>
      </span>
    </p>
  );
}
