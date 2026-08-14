export type Tile5Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile5({ d }: { d: Tile5Data }) {
  return (
    <tr className="box-content table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [word-break:break-word] [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text}
      </td>
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle text-right [word-break:break-word] [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text2}
      </td>
    </tr>
  );
}
