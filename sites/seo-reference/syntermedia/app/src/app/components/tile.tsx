export type TileData = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="table-cell p-4 align-middle [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </td>
      <td className="table-cell p-4 align-middle [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="table-cell p-4 align-middle [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
      <td className="table-cell p-4 align-middle [border-collapse:collapse] [border-spacing:2px]">
        {d.text4}
      </td>
    </tr>
  );
}
