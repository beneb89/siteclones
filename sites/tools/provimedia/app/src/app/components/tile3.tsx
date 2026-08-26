export type Tile3Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <tr className="border-b border-solid border-b-surface-3 table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="table-cell py-3 pr-4 align-middle [border-collapse:collapse] [border-spacing:2px]">
        <span className="inline font-semibold [border-collapse:collapse] [border-spacing:2px]">
          {d.text}
        </span>
      </td>
      <td className="table-cell py-3 pr-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="table-cell py-3 pr-4 align-middle font-semibold text-right [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
      <td className="table-cell py-3 align-middle text-muted-foreground text-right [border-collapse:collapse] [border-spacing:2px]">
        {d.text4}
        <span className="inline ml-2 text-xs leading-4 [border-collapse:collapse] [border-spacing:2px]">
          {d.text5}
        </span>
      </td>
    </tr>
  );
}
