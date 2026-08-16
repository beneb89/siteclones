export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <details className="box-content block">
      <summary className="box-content list-item list-inside">
        <strong className="box-content inline font-bold">
          {d.text}
        </strong>
      </summary>
      {d.text2}
    </details>
  );
}
