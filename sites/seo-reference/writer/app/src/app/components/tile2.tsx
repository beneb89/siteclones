export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="border border-solid border-foreground table-cell p-2 align-middle [word-break:break-word] [border-collapse:collapse] [border-spacing:2px] max-md:p-1.5">
        {d.text}
      </td>
      <td className="border border-solid border-foreground table-cell p-2 align-middle [word-break:break-word] [border-collapse:collapse] [border-spacing:2px] max-md:p-1.5">
        {d.text2}
      </td>
      <td className="border border-solid border-foreground table-cell p-2 align-middle [word-break:break-word] [border-collapse:collapse] [border-spacing:2px] max-md:p-1.5">
        {d.text3}
      </td>
      <td className="border border-solid border-foreground table-cell p-2 align-middle [word-break:break-word] [border-collapse:collapse] [border-spacing:2px] max-md:p-1.5">
        {d.text4}
      </td>
    </tr>
  );
}
