export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </td>
      <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
    </tr>
  );
}
