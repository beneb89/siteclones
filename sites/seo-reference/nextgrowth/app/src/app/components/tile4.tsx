export type Tile4Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
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
      <td className="border border-solid border-border table-cell p-[8.5px] align-middle [border-collapse:collapse] [border-spacing:2px]">
        {d.text4}
      </td>
      <td className="border border-solid border-border table-cell p-[8.5px] align-middle [border-collapse:collapse] [border-spacing:2px]">
        {d.text5}
      </td>
    </tr>
  );
}
