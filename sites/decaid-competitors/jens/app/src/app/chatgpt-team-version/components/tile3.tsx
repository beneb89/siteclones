export type Tile3Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="border-b border-solid border-b-border table-cell py-3 px-4 align-top leading-[1.4375rem] [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </td>
      <td className="border-b border-solid border-b-border table-cell py-3 px-4 align-top leading-[1.4375rem] [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="border-b border-solid border-b-border table-cell py-3 px-4 align-top leading-[1.4375rem] [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
      <td className="border-b border-solid border-b-border table-cell py-3 px-4 align-top leading-[1.4375rem] [border-collapse:collapse] [border-spacing:2px]">
        {d.text4}
      </td>
    </tr>
  );
}
