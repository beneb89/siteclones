export type TileData = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="box-content block mb-1 py-1.5 px-7.5 [background-size:14px_14px] [background-position:0px_50%] bg-no-repeat cursor-pointer">
      <span className="box-content inline pr-[0.3125rem]">
        {d.text}
      </span>
      <span className="box-content hidden">
        {d.text2}
      </span>
    </div>
  );
}
