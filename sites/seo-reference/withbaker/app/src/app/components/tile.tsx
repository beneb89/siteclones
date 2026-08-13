export type TileData = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <tr className="table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </td>
      <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
        {d.text2}
      </td>
      <td className="border border-solid border-border table-cell py-[0.4375rem] px-[10.5px] align-middle text-left [border-collapse:collapse] [border-spacing:2px]">
        <code className="inline py-0.5 px-[0.3125rem] rounded-sm [font-family:ui-monospace,_monospace] text-xs leading-[1.25rem] bg-surface [border-collapse:collapse] [border-spacing:2px]">
          {d.text3}
        </code>
      </td>
    </tr>
  );
}
