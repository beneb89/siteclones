export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="border border-solid border-border table-cell p-[8.5px] align-middle [border-collapse:collapse] [border-spacing:2px]">
        <strong className="inline font-bold [border-collapse:collapse] [border-spacing:2px]">
          {d.text}
        </strong>
      </td>
      <td className="border border-solid border-border table-cell p-[8.5px] align-middle [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="border border-solid border-border table-cell p-[8.5px] align-middle [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
    </tr>
  );
}
