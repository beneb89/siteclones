export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <tr className="box-content table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="box-content border-b border-solid border-b-clr-0 table-cell py-[13.1px] px-[0.65rem] align-top text-left [word-break:break-word] [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </td>
      <td className="box-content border-b border-solid border-b-clr-0 table-cell py-[13.1px] px-[0.65rem] align-top text-left [word-break:break-word] [border-collapse:collapse] [border-spacing:2px]">
        <strong className="box-content inline font-bold [border-collapse:collapse] [border-spacing:2px]">
          {d.text2}
        </strong>
      </td>
    </tr>
  );
}
