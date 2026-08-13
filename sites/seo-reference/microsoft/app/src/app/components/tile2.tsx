export type Tile2Data = {
  description: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <ul className="block mt-5 [list-style-type:disc] list-outside">
      <li className="list-item relative my-1 ml-3 pl-3">
        <p className="block">
          {d.description}
        </p>
        {" "}
      </li>
    </ul>
  );
}
