export type Tile3Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <th className="h-full table-cell py-[0.4375rem] px-[0.9375rem] align-middle text-primary font-normal text-left uppercase bg-background [border-spacing:0px_1px] max-md:hidden 2xl:py-[0.525rem] 2xl:px-4.5">
      {d.text}
      <br className="inline [border-spacing:0px_1px] max-md:hidden" />
      {d.text2}
    </th>
  );
}
