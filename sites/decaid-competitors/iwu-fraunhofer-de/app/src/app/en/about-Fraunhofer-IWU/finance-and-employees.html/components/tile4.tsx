export type Tile4Data = {
  text: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <th className="h-full table-cell py-[0.4375rem] px-[0.9375rem] align-middle text-primary font-normal text-center uppercase bg-background [border-spacing:0px_1px] max-md:hidden 2xl:py-[0.525rem] 2xl:px-4.5">
      <b className="inline [border-spacing:0px_1px] max-md:hidden">
        {d.text}
      </b>
    </th>
  );
}
