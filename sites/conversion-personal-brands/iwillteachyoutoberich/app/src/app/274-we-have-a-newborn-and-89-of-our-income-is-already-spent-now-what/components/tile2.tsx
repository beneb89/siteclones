export type Tile2Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile2({ d }: { d: Tile2Data }) {
  return (
    <p className="block my-[13.3px] [font-family:'PP_Mori'] text-lg leading-[1.9375rem] max-lg:my-[0.9375rem] 2xl:my-5">
      {d.description}
      <br className="inline" />
      {d.description2}
    </p>
  );
}
