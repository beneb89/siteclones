export type Tile8Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile8({ d }: { d: Tile8Data }) {
  return (
    <div className="block relative">
      <div className="block pl-12.5">
        <p className="block my-2.5 [font-family:'PP_Mori']">
          <strong className="inline font-bold">
            {d.description}
          </strong>
          {d.description2}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
