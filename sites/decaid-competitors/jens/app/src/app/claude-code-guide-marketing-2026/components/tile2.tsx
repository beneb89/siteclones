export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="border-b border-solid border-b-border table-cell py-3 px-4 align-top leading-[1.4375rem] [border-collapse:collapse] [border-spacing:2px]">
        <strong className="inline font-medium [border-collapse:collapse] [border-spacing:2px]">
          {d.text}
        </strong>
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
      <td className="border-b border-solid border-b-border table-cell py-3 px-4 align-top leading-[1.4375rem] [border-collapse:collapse] [border-spacing:2px]">
        {d.text5}
      </td>
    </tr>
  );
}
