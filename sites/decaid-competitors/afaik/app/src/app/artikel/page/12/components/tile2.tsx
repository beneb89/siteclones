export type Tile2Data = {
  text: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
      <strong className="box-content inline font-bold [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </strong>
    </td>
  );
}
