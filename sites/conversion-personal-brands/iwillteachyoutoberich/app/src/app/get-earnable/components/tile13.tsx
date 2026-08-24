export type Tile13Data = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile13({ d }: { d: Tile13Data }) {
  return (
    <div className="block relative">
      <div className="block">
        <p className="block my-2.5 [font-family:'PP_Mori']">
          <b className="inline font-bold">
            {d.description}
          </b>
          {d.description2}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
