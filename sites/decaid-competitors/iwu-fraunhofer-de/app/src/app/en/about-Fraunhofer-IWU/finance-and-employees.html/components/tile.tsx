export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <th className="hidden max-md:table-cell max-md:relative max-md:py-[0.4375rem] max-md:px-[0.9375rem] max-md:overflow-hidden max-md:align-middle max-md:text-primary max-md:font-normal max-md:text-center max-md:uppercase max-md:whitespace-nowrap max-md:text-nowrap max-md:bg-background max-md:[border-spacing:0px_1px]">
      <b className="hidden max-md:inline max-md:[border-spacing:0px_1px]">
        {d.text}
      </b>
    </th>
  );
}
