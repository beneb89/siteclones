export type TileData = {
  style: string;
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <div className="block p-5 rounded-xl text-center" style={d.style}>
      <p className="block text-color-001 text-[1.9375rem] font-extrabold leading-[3.0625rem]">
        {d.description}
      </p>
      <p className="block mt-1 text-color-006 text-[0.9375rem] leading-[1.4375rem]">
        {d.description2}
      </p>
    </div>
  );
}
