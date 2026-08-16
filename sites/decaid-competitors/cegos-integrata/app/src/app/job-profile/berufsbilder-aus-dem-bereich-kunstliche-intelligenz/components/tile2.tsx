export type Tile2Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="box-content block mb-5 max-md:mb-[16.3px] md:max-lg:mb-[1.125rem]">
      <strong className="box-content inline font-bold">
        <mark className="box-content inline text-color-003">
          <strong className="box-content inline font-black">
            {d.description}
          </strong>
        </mark>
      </strong>
      <br className="box-content inline" />
      {d.description2}
    </p>
  );
}
