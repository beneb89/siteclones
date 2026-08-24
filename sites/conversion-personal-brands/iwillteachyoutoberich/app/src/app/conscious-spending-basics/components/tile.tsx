export type TileData = {
  description: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <p className="block my-[13.3px] [font-family:'PP_Mori'] text-lg leading-[1.9375rem] max-lg:my-[0.9375rem] 2xl:my-5">
      {d.description}
      <b className="inline font-bold">
        {d.description2}
      </b>
      {d.description3}
    </p>
  );
}
