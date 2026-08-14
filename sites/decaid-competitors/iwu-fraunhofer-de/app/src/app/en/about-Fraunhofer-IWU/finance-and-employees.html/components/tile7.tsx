export type Tile7Data = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
};
/** A content tile. */
export default function Tile7({ d }: { d: Tile7Data }) {
  return (
    <tr className="h-8 table-row align-middle bg-surface [border-spacing:0px_1px] max-md:hidden 2xl:h-[2.4rem]">
      <td className="h-full table-cell py-[0.4375rem] px-[0.9375rem] align-middle [border-spacing:0px_1px] max-md:hidden 2xl:py-[0.525rem] 2xl:px-4.5">
        {d.text}
      </td>
      <td className="h-full table-cell py-[0.4375rem] px-[0.9375rem] align-middle text-center [border-spacing:0px_1px] max-md:hidden 2xl:py-[0.525rem] 2xl:px-4.5">
        {d.text2}
      </td>
      <td className="h-full table-cell py-[0.4375rem] px-[0.9375rem] align-middle text-center [border-spacing:0px_1px] max-md:hidden 2xl:py-[0.525rem] 2xl:px-4.5">
        {d.text3}
      </td>
      <td className="h-full table-cell py-[0.4375rem] px-[0.9375rem] align-middle text-center [border-spacing:0px_1px] max-md:hidden 2xl:py-[0.525rem] 2xl:px-4.5">
        {d.text4}
      </td>
      <td className="h-full table-cell py-[0.4375rem] px-[0.9375rem] align-middle text-center [border-spacing:0px_1px] max-md:hidden 2xl:py-[0.525rem] 2xl:px-4.5">
        {d.text5}
      </td>
      <td className="h-full table-cell py-[0.4375rem] px-[0.9375rem] align-middle text-center [border-spacing:0px_1px] max-md:hidden 2xl:py-[0.525rem] 2xl:px-4.5">
        {d.text6}
      </td>
    </tr>
  );
}
