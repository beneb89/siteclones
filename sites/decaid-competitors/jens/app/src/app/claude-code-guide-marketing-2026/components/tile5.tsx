export type Tile5Data = {
  description: string;
};
/** A content tile. */
export default function Tile5({ d }: { d: Tile5Data }) {
  return (
    <p className="block my-5">
      <strong className="inline font-medium">
        Nicht
      </strong>
      {d.description}
    </p>
  );
}
