export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <td className="box-content border border-solid border-clr-22 table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
      <strong className="box-content inline font-bold [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </strong>
    </td>
  );
}
