export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block my-[13.3px] [font-family:'PP_Mori'] text-lg leading-[1.9375rem] max-lg:my-[0.9375rem] 2xl:my-5">
      <span className="inline">
        {d.description}
      </span>
    </p>
  );
}
