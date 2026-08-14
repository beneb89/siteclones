export type Tile6Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile6({ d }: { d: Tile6Data }) {
  return (
    <tr className="box-content table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [word-break:break-word] [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text}
      </td>
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [word-break:break-word] [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        <strong className="box-content inline font-bold [border-collapse:collapse] [border-spacing:2px]">
          {d.text2}
        </strong>
      </td>
    </tr>
  );
}
