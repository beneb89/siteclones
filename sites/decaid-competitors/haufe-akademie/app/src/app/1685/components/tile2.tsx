export type Tile2Data = {
  id: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block pt-3">
      <a className="inline text-primary cursor-pointer" href="/1685" id={d.id}>
        {d.description}
      </a>
      {" "}
    </p>
  );
}
