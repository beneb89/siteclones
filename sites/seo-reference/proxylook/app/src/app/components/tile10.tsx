export type Tile10Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
};
/** A content tile. */
export default function Tile10({ d }: { d: Tile10Data }) {
  return (
    <tr className="border-b border-solid border-b-surface-3 table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="border-b border-solid border-b-surface-3 table-cell p-3 align-middle text-muted-foreground font-semibold [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </td>
      <td className="border-b border-solid border-b-surface-3 border-l-2 border-l-primary table-cell p-3 align-middle text-primary font-bold text-center bg-surface-4 [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="border-b border-solid border-b-surface-3 table-cell p-3 align-middle text-accent text-center [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
      <td className="border-b border-solid border-b-surface-3 table-cell p-3 align-middle text-accent text-center [border-collapse:collapse] [border-spacing:2px]">
        {d.text4}
      </td>
      <td className="border-b border-solid border-b-surface-3 table-cell p-3 align-middle text-accent text-center [border-collapse:collapse] [border-spacing:2px]">
        {d.text5}
      </td>
    </tr>
  );
}
