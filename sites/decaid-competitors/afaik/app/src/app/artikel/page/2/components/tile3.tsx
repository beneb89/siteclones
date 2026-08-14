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
    <tr className="box-content table-row align-middle [border-collapse:collapse] [border-spacing:2px]">
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text}
      </td>
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text2}
      </td>
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text3}
      </td>
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text4}
      </td>
      <td className="box-content border border-solid border-foreground table-cell p-[0.5375rem] align-middle [border-collapse:collapse] [border-spacing:2px] max-md:p-2 md:max-lg:p-[0.525rem]">
        {d.text5}
      </td>
    </tr>
  );
}
