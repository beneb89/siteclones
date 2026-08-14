export type TileData = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <tr className="box-content table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="box-content border-b border-solid border-b-clr-0 table-cell py-[13.1px] px-[0.65rem] align-top text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </td>
      <td className="box-content border-b border-solid border-b-clr-0 table-cell py-[13.1px] px-[0.65rem] align-top text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="box-content border-b border-solid border-b-clr-0 table-cell py-[13.1px] px-[0.65rem] align-top text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
      <td className="box-content border-b border-solid border-b-clr-0 table-cell py-[13.1px] px-[0.65rem] align-top text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text4}
      </td>
      <td className="box-content border-b border-solid border-b-clr-0 table-cell py-[13.1px] px-[0.65rem] align-top text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text5}
      </td>
    </tr>
  );
}
