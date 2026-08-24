export type Tile12Data = {
  description: string;
};
/** A content tile. */
export default function Tile12({ d }: { d: Tile12Data }) {
  return (
    <div className="w-full block relative">
      <div className="block">
        <p className="block my-2.5 [font-family:'PP_Mori']">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
