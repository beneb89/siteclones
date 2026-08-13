export type Tile2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <tr className="border-b border-solid border-b-border table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
        <code className="inline py-0.5 px-1.5 rounded-sm [font-family:neueMontrealMono,_'neueMontrealMono_Fallback'] text-xs leading-[1.0625rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
          {d.text}
        </code>
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="table-cell py-3 px-4 align-middle text-muted-foreground [border-collapse:collapse] [border-spacing:2px]">
        {d.text3}
      </td>
    </tr>
  );
}
