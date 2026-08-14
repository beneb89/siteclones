export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="box-content block mb-5 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
      <strong className="box-content inline font-bold">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
