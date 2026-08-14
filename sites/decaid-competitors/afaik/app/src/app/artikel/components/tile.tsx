export type TileData = {
  text: string;
  text2: string;
  text3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <tr className="box-content table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [word-break:break-word] [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        <strong className="box-content inline font-bold [border-collapse:collapse] [border-spacing:2px]">
          {d.text}
        </strong>
      </td>
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [word-break:break-word] [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text2}
      </td>
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [word-break:break-word] [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text3}
      </td>
    </tr>
  );
}
