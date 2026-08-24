export type Tile4Data = {
  description: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <div className="block relative">
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
