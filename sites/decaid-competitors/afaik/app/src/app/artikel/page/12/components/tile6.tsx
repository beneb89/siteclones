export type Tile6Data = {
  text: string;
};
/** A content tile. */
export default function Tile6({ d }: { d: Tile6Data }) {
  return (
    <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
      <em className="box-content inline italic [border-collapse:collapse] [border-spacing:2px]">
        {d.text}
      </em>
    </td>
  );
}
